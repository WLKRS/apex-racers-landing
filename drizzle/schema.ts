import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Game-related tables
export const playerGarage = mysqlTable("playerGarage", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  carName: varchar("carName", { length: 255 }).notNull(),
  rarity: mysqlEnum("rarity", ["Comum", "Incomum", "Raro", "Épico", "Lendário", "Mítico", "Divino"]).notNull(),
  level: int("level").default(1).notNull(),
  fuel: int("fuel").default(100).notNull(),
  maxFuel: int("maxFuel").default(100).notNull(),
  speed: int("speed").notNull(),
  acceleration: int("acceleration").notNull(),
  handling: int("handling").notNull(),
  trunk: int("trunk").notNull(),
  wins: int("wins").default(0).notNull(),
  losses: int("losses").default(0).notNull(),
  totalRaces: int("totalRaces").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PlayerGarage = typeof playerGarage.$inferSelect;
export type InsertPlayerGarage = typeof playerGarage.$inferInsert;

export const races = mysqlTable("races", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  carId: int("carId").notNull(),
  mode: mysqlEnum("mode", ["Arrancada", "Circuito de Rua", "Exploração"]).notNull(),
  difficulty: mysqlEnum("difficulty", ["Fácil", "Normal", "Difícil", "Extremo"]).notNull(),
  result: mysqlEnum("result", ["vitória", "derrota"]).notNull(),
  rcnEarned: int("rcnEarned").default(0).notNull(),
  xpEarned: int("xpEarned").default(0).notNull(),
  fuelUsed: int("fuelUsed").default(0).notNull(),
  duration: int("duration").default(0).notNull(), // in seconds
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Race = typeof races.$inferSelect;
export type InsertRace = typeof races.$inferInsert;

export const playerStats = mysqlTable("playerStats", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  level: int("level").default(1).notNull(),
  experience: int("experience").default(0).notNull(),
  totalRaces: int("totalRaces").default(0).notNull(),
  totalWins: int("totalWins").default(0).notNull(),
  totalLosses: int("totalLosses").default(0).notNull(),
  rcnBalance: int("rcnBalance").default(0).notNull(),
  solBalance: int("solBalance").default(0).notNull(),
  currentStreak: int("currentStreak").default(0).notNull(),
  bestStreak: int("bestStreak").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PlayerStats = typeof playerStats.$inferSelect;
export type InsertPlayerStats = typeof playerStats.$inferInsert;

export const refuelTransactions = mysqlTable("refuelTransactions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  carId: int("carId").notNull(),
  fuelAmount: int("fuelAmount").notNull(),
  costRCN: int("costRCN").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type RefuelTransaction = typeof refuelTransactions.$inferSelect;
export type InsertRefuelTransaction = typeof refuelTransactions.$inferInsert;