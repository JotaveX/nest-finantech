-- CreateTable
CREATE TABLE `revenue` (
    `idRevenue` INTEGER NOT NULL AUTO_INCREMENT,
    `value` FLOAT NOT NULL,
    `isWaste` TINYINT NOT NULL,
    `reason` VARCHAR(66) NOT NULL,
    `description` VARCHAR(132) NULL,

    UNIQUE INDEX `idRevenue_UNIQUE`(`idRevenue`),
    PRIMARY KEY (`idRevenue`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scheduled-revenue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` INTEGER NOT NULL,
    `period` INTEGER NOT NULL,
    `Revenue_idRevenue` INTEGER NOT NULL,

    INDEX `fk_scheduled-revenue_Revenue1_idx`(`Revenue_idRevenue`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(132) NOT NULL,
    `password` VARCHAR(60) NOT NULL,
    `birth` DATE NOT NULL,
    `Wallet_id` INTEGER NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    INDEX `fk_User_Wallet_idx`(`Wallet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Revenue_id` INTEGER NULL,
    `scheduled-revenue_idScheduled-revenue` INTEGER NULL,
    `total` FLOAT NOT NULL DEFAULT 0,

    UNIQUE INDEX `wallet_id_key`(`id`),
    INDEX `fk_Wallet_Revenue1_idx`(`Revenue_id`),
    INDEX `fk_Wallet_scheduled-revenue1_idx`(`scheduled-revenue_idScheduled-revenue`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `scheduled-revenue` ADD CONSTRAINT `fk_scheduled-revenue_Revenue1` FOREIGN KEY (`Revenue_idRevenue`) REFERENCES `revenue`(`idRevenue`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_User_Wallet` FOREIGN KEY (`Wallet_id`) REFERENCES `wallet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wallet` ADD CONSTRAINT `fk_Wallet_Revenue1` FOREIGN KEY (`Revenue_id`) REFERENCES `revenue`(`idRevenue`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wallet` ADD CONSTRAINT `fk_Wallet_scheduled-revenue1` FOREIGN KEY (`scheduled-revenue_idScheduled-revenue`) REFERENCES `scheduled-revenue`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
