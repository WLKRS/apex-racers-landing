import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { sdk } from "./sdk";
import * as db from "../db";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    // Try OAuth authentication first
    user = await sdk.authenticateRequest(opts.req);
  } catch (error) {
    // If OAuth fails, try Solana wallet authentication
    try {
      const walletAddress = opts.req.headers["x-wallet-address"] as string | undefined;
      if (walletAddress && walletAddress.length > 0) {
        // Use wallet address as openId for Solana wallet users
        const openId = `solana:${walletAddress}`;
        
        // Get or create user
        let existingUser = await db.getUserByOpenId(openId);
        if (!existingUser) {
          await db.upsertUser({
            openId,
            name: `Solana User ${walletAddress.slice(0, 8)}`,
            loginMethod: "solana",
            lastSignedIn: new Date(),
          });
          existingUser = await db.getUserByOpenId(openId);
        } else {
          // Update last signed in
          await db.upsertUser({
            openId,
            lastSignedIn: new Date(),
          });
        }
        if (existingUser) {
          user = existingUser;
        }
      }
    } catch (walletError) {
      // Both authentication methods failed, user remains null
      console.warn("[Auth] Both OAuth and Solana wallet authentication failed");
    }
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
