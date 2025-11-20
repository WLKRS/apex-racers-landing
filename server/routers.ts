import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { generateNewCar, getMintCostSOL, getMintCostRCN } from "./gameUtils";
import { mintNewCar, getPlayerGarage } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  game: router({
    // Mint a new car
    mintCar: protectedProcedure
      .input(z.object({
        paymentMethod: z.enum(["SOL", "RCN"]),
      }))
      .mutation(async ({ ctx, input }) => {
        if (!ctx.user) throw new Error("Not authenticated");

        // Generate new car with random rarity and stats
        const { rarity, name, stats } = generateNewCar();

        // Get mint cost
        const costSOL = getMintCostSOL(rarity);
        const costRCN = getMintCostRCN(rarity);

        // TODO: In production, verify payment on blockchain
        // For now, just create the car in database

        const newCar = await mintNewCar(ctx.user.id, {
          userId: ctx.user.id,
          carName: name,
          rarity,
          level: 1,
          fuel: 100,
          maxFuel: 100,
          speed: stats.speed,
          acceleration: stats.acceleration,
          handling: stats.handling,
          trunk: stats.trunk,
          wins: 0,
          losses: 0,
          totalRaces: 0,
        });

        return {
          success: true,
          car: newCar,
          cost: {
            sol: costSOL,
            rcn: costRCN,
            paymentMethod: input.paymentMethod,
          },
        };
      }),

    // Get player's garage (all cars)
    getGarage: protectedProcedure.query(async ({ ctx }) => {
      if (!ctx.user) throw new Error("Not authenticated");
      return getPlayerGarage(ctx.user.id);
    }),

    // Get mint costs for all rarities
    getMintCosts: publicProcedure.query(() => {
      const rarities = ["Comum", "Incomum", "Raro", "Épico", "Lendário", "Mítico"] as const;
      return rarities.map((rarity) => ({
        rarity,
        costSOL: getMintCostSOL(rarity),
        costRCN: getMintCostRCN(rarity),
      }));
    }),
  }),
});

export type AppRouter = typeof appRouter;
