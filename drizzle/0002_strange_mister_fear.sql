CREATE TABLE `activeRentals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`carId` int NOT NULL,
	`rentalListingId` int NOT NULL,
	`renterId` int NOT NULL,
	`ownerId` int NOT NULL,
	`startDate` timestamp NOT NULL,
	`endDate` timestamp NOT NULL,
	`totalCost` int NOT NULL,
	`currency` enum('SOL','RCN') NOT NULL,
	`status` enum('active','completed','cancelled') NOT NULL DEFAULT 'active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `activeRentals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `marketplaceListings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`carId` int NOT NULL,
	`sellerId` int NOT NULL,
	`price` int NOT NULL,
	`currency` enum('SOL','RCN') NOT NULL,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `marketplaceListings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `marketplaceTransactions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`listingId` int NOT NULL,
	`carId` int NOT NULL,
	`sellerId` int NOT NULL,
	`buyerId` int NOT NULL,
	`price` int NOT NULL,
	`currency` enum('SOL','RCN') NOT NULL,
	`transactionHash` varchar(255),
	`status` enum('pending','completed','failed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`completedAt` timestamp,
	CONSTRAINT `marketplaceTransactions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rentalListings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`carId` int NOT NULL,
	`ownerId` int NOT NULL,
	`pricePerDay` int NOT NULL,
	`currency` enum('SOL','RCN') NOT NULL,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `rentalListings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `playerGarage` MODIFY COLUMN `rarity` enum('Comum','Incomum','Raro','Épico','Lendário','Mítico') NOT NULL;