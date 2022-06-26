-- MySQL dump --
-- ---------------------------------------------------------

-- CREATE DATABASE "crud_react" ----------------------------
CREATE DATABASE IF NOT EXISTS `crud_react` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `crud_react`;
-- ---------------------------------------------------------


-- CREATE TABLE "games" ----------------------------------------
CREATE TABLE `games`( 
	`id` BigInt( 0 ) UNSIGNED AUTO_INCREMENT NOT NULL,
	`name` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
	`cost` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
	`category` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ENGINE = InnoDB;
-- -------------------------------------------------------------