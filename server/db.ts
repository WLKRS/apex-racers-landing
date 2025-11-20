import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, playerGarage, races, playerStats, refuelTransactions, InsertPlayerGarage, InsertRace, InsertPlayerStats, InsertRefuelTransaction } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Game queries
export async function getPlayerGarage(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(playerGarage).where(eq(playerGarage.userId, userId));
}

export async function getPlayerStats(userId: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(playerStats).where(eq(playerStats.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function createOrUpdatePlayerStats(userId: number, stats: Partial<InsertPlayerStats>) {
  const db = await getDb();
  if (!db) return null;
  
  const existing = await getPlayerStats(userId);
  if (existing) {
    await db.update(playerStats).set(stats).where(eq(playerStats.userId, userId));
    return getPlayerStats(userId);
  } else {
    await db.insert(playerStats).values({ userId, ...stats } as InsertPlayerStats);
    return getPlayerStats(userId);
  }
}

export async function getPlayerRaces(userId: number, limit = 10) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(races).where(eq(races.userId, userId)).limit(limit);
}

export async function createRace(race: InsertRace) {
  const db = await getDb();
  if (!db) return null;
  return db.insert(races).values(race);
}

export async function getCarById(carId: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(playerGarage).where(eq(playerGarage.id, carId)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateCar(carId: number, updates: Partial<InsertPlayerGarage>) {
  const db = await getDb();
  if (!db) return null;
  await db.update(playerGarage).set(updates).where(eq(playerGarage.id, carId));
  return getCarById(carId);
}

export async function createRefuelTransaction(transaction: InsertRefuelTransaction) {
  const db = await getDb();
  if (!db) return null;
  return db.insert(refuelTransactions).values(transaction);
}
