-- CreateTable
CREATE TABLE `Game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` BOOLEAN NOT NULL,
    `wordId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Word` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `civile` VARCHAR(191) NOT NULL,
    `impostor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gameId` INTEGER NOT NULL,
    `role` ENUM('impostor', 'civile') NOT NULL,
    `status` BOOLEAN NOT NULL,
    `token` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Synonymous` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `word` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Game` ADD CONSTRAINT `Game_wordId_fkey` FOREIGN KEY (`wordId`) REFERENCES `Word`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Synonymous` ADD CONSTRAINT `Synonymous_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
