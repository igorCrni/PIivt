-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.7.4-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for piivt_app
DROP DATABASE IF EXISTS `piivt_app`;
CREATE DATABASE IF NOT EXISTS `piivt_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `piivt_app`;

-- Dumping structure for table piivt_app.about
DROP TABLE IF EXISTS `about`;
CREATE TABLE IF NOT EXISTS `about` (
  `about_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`about_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.brand
DROP TABLE IF EXISTS `brand`;
CREATE TABLE IF NOT EXISTS `brand` (
  `brand_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`brand_id`),
  UNIQUE KEY `uq_brand_name_category_id` (`name`,`category_id`),
  KEY `fk_brand_category_id` (`category_id`),
  CONSTRAINT `fk_brand_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.car_body
DROP TABLE IF EXISTS `car_body`;
CREATE TABLE IF NOT EXISTS `car_body` (
  `car_body` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`car_body`),
  UNIQUE KEY `uq_car_body_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.category
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `category_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `uq_category_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.climate
DROP TABLE IF EXISTS `climate`;
CREATE TABLE IF NOT EXISTS `climate` (
  `climate_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`climate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.color
DROP TABLE IF EXISTS `color`;
CREATE TABLE IF NOT EXISTS `color` (
  `color_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`color_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.cubic_capacity
DROP TABLE IF EXISTS `cubic_capacity`;
CREATE TABLE IF NOT EXISTS `cubic_capacity` (
  `cubic_capacity_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `value` int(10) unsigned NOT NULL,
  PRIMARY KEY (`cubic_capacity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.damge
DROP TABLE IF EXISTS `damge`;
CREATE TABLE IF NOT EXISTS `damge` (
  `damge_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`damge_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.doors
DROP TABLE IF EXISTS `doors`;
CREATE TABLE IF NOT EXISTS `doors` (
  `doors_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`doors_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.drive
DROP TABLE IF EXISTS `drive`;
CREATE TABLE IF NOT EXISTS `drive` (
  `drive_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`drive_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.emission_calss
DROP TABLE IF EXISTS `emission_calss`;
CREATE TABLE IF NOT EXISTS `emission_calss` (
  `emission_calss_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`emission_calss_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.equipment
DROP TABLE IF EXISTS `equipment`;
CREATE TABLE IF NOT EXISTS `equipment` (
  `equipment_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`equipment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.first_registration
DROP TABLE IF EXISTS `first_registration`;
CREATE TABLE IF NOT EXISTS `first_registration` (
  `first_registration_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `year` year(4) NOT NULL,
  PRIMARY KEY (`first_registration_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.fuel_type
DROP TABLE IF EXISTS `fuel_type`;
CREATE TABLE IF NOT EXISTS `fuel_type` (
  `fuel_type_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  PRIMARY KEY (`fuel_type_id`),
  UNIQUE KEY `uq_fuel_type_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.mileage
DROP TABLE IF EXISTS `mileage`;
CREATE TABLE IF NOT EXISTS `mileage` (
  `mileage_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mileage` int(10) unsigned NOT NULL,
  PRIMARY KEY (`mileage_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.model
DROP TABLE IF EXISTS `model`;
CREATE TABLE IF NOT EXISTS `model` (
  `model_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `brand_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`model_id`),
  UNIQUE KEY `uq_model_name_brand_id` (`name`,`brand_id`),
  KEY `fk_model_brand_id` (`brand_id`),
  CONSTRAINT `fk_model_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.origin
DROP TABLE IF EXISTS `origin`;
CREATE TABLE IF NOT EXISTS `origin` (
  `origin_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`origin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.photo
DROP TABLE IF EXISTS `photo`;
CREATE TABLE IF NOT EXISTS `photo` (
  `photo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `file_path` text NOT NULL,
  PRIMARY KEY (`photo_id`),
  UNIQUE KEY `uq_photo_file_path` (`file_path`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.power
DROP TABLE IF EXISTS `power`;
CREATE TABLE IF NOT EXISTS `power` (
  `power_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `kw` int(10) unsigned NOT NULL,
  `ks` int(10) unsigned NOT NULL,
  PRIMARY KEY (`power_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.price
DROP TABLE IF EXISTS `price`;
CREATE TABLE IF NOT EXISTS `price` (
  `price_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `price` decimal(10,2) unsigned NOT NULL,
  PRIMARY KEY (`price_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.registered_until
DROP TABLE IF EXISTS `registered_until`;
CREATE TABLE IF NOT EXISTS `registered_until` (
  `registered_until_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`registered_until_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.seats
DROP TABLE IF EXISTS `seats`;
CREATE TABLE IF NOT EXISTS `seats` (
  `seats_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`seats_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.security
DROP TABLE IF EXISTS `security`;
CREATE TABLE IF NOT EXISTS `security` (
  `security_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `airbag_driver` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `airbag_pass` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `side_airbag` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `child_lock` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `abs` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `esp` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `asr` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `alarm` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `coded_key` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `engine_lock` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `central_locking` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `mechanical_protection` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `keyless` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `lane_assist` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `blind_spot` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `obd` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `knee_airbags` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `auto_braking` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`security_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.steering_wheel_side
DROP TABLE IF EXISTS `steering_wheel_side`;
CREATE TABLE IF NOT EXISTS `steering_wheel_side` (
  `steering_wheel_side_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`steering_wheel_side_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.transmission
DROP TABLE IF EXISTS `transmission`;
CREATE TABLE IF NOT EXISTS `transmission` (
  `transmission_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`transmission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table piivt_app.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(64) NOT NULL,
  `password_hash` varchar(128) NOT NULL,
  `is_active` tinyint(1) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `uq_user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
