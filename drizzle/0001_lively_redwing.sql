CREATE TABLE `playerGarage` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`carName` varchar(255) NOT NULL,
	`rarity` enum('Comum','Incomum','Raro','Épico','Lendário','Mítico','Divino') NOT NULL,
	`level` int NOT NULL DEFAULT 1,
	`fuel` int NOT NULL DEFAULT 100,
	`maxFuel` int NOT NULL DEFAULT 100,
	`speed` int NOT NULL,
	`acceleration` int NOT NULL,
	`handling` int NOT NULL,
	`trunk` int NOT NULL,
	`wins` int NOT NULL DEFAULT 0,
	`losses` int NOT NULL DEFAULT 0,
	`totalRaces` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `playerGarage_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerStats` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`level` int NOT NULL DEFAULT 1,
	`experience` int NOT NULL DEFAULT 0,
	`totalRaces` int NOT NULL DEFAULT 0,
	`totalWins` int NOT NULL DEFAULT 0,
	`totalLosses` int NOT NULL DEFAULT 0,
	`rcnBalance` int NOT NULL DEFAULT 0,
	`solBalance` int NOT NULL DEFAULT 0,
	`currentStreak` int NOT NULL DEFAULT 0,
	`bestStreak` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `playerStats_id` PRIMARY KEY(`id`),
	CONSTRAINT `playerStats_userId_unique` UNIQUE(`userId`)
);
--> statement-breakpoint
CREATE TABLE `races` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`carId` int NOT NULL,
	`mode` enum('Arrancada','Circuito de Rua','Exploração') NOT NULL,
	`difficulty` enum('Fácil','Normal','Difícil','Extremo') NOT NULL,
	`result` enum('vitória','derrota') NOT NULL,
	`rcnEarned` int NOT NULL DEFAULT 0,
	`xpEarned` int NOT NULL DEFAULT 0,
	`fuelUsed` int NOT NULL DEFAULT 0,
	`duration` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `races_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `refuelTransactions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`carId` int NOT NULL,
	`fuelAmount` int NOT NULL,
	`costRCN` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `refuelTransactions_id` PRIMARY KEY(`id`)
);
