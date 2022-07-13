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

-- Dumping structure for table piivt_app.ad
DROP TABLE IF EXISTS `ad`;
CREATE TABLE IF NOT EXISTS `ad` (
  `ad_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(10) unsigned NOT NULL,
  `brand_id` int(10) unsigned NOT NULL,
  `model_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `photo_id` int(10) unsigned NOT NULL,
  `car_body_id` int(10) unsigned NOT NULL,
  `fuel_type_id` int(10) unsigned NOT NULL,
  `drive_id` int(10) unsigned NOT NULL,
  `transmission_id` int(10) unsigned NOT NULL,
  `doors_id` int(10) unsigned NOT NULL,
  `seats_id` int(10) unsigned NOT NULL,
  `steering_wheel_side_id` int(10) unsigned NOT NULL,
  `air_condition_id` int(10) unsigned NOT NULL,
  `damage_id` int(10) unsigned NOT NULL,
  `origin_id` int(10) unsigned NOT NULL,
  `safety_id` int(10) unsigned NOT NULL,
  `equipment_id` int(10) unsigned NOT NULL,
  `vehicle_condition_id` int(10) unsigned NOT NULL,
  `title` varchar(64) NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `fixed_price` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `year` year(4) NOT NULL,
  `mark` varchar(64) NOT NULL,
  `cm3` varchar(64) NOT NULL,
  `kw` varchar(12) NOT NULL,
  `ks` varchar(12) NOT NULL,
  `mileage` varchar(25) NOT NULL,
  `color` varchar(25) NOT NULL,
  `interior_color` varchar(25) NOT NULL,
  `registration_until` varchar(12) NOT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`ad_id`),
  UNIQUE KEY `uq_ad_category_id_brand_id_model_id_user_id_photo_id_car_body_id` (`category_id`,`brand_id`,`model_id`,`user_id`,`photo_id`,`car_body_id`) USING BTREE,
  UNIQUE KEY `uq_ad_fuel_type_id_drive_id_transmission_id_doors_id_seats_id` (`fuel_type_id`,`drive_id`,`transmission_id`,`doors_id`,`seats_id`) USING BTREE,
  UNIQUE KEY `uq_ad_safety_id_equipment_id_vehicle_condition_id` (`safety_id`,`equipment_id`,`vehicle_condition_id`) USING BTREE,
  UNIQUE KEY `uq_ad_steering_wheel_side_id_air_condition_id_damge_id_origin_id` (`steering_wheel_side_id`,`air_condition_id`,`origin_id`,`damage_id`) USING BTREE,
  KEY `fk_ad_brand_id` (`brand_id`),
  KEY `fk_ad_model_id` (`model_id`),
  KEY `fk_ad_user_id` (`user_id`),
  KEY `fk_ad_photo_id` (`photo_id`),
  KEY `fk_ad_car_body_id` (`car_body_id`),
  KEY `fk_ad_drive_id` (`drive_id`),
  KEY `fk_ad_transmission_id` (`transmission_id`),
  KEY `fk_ad_fuel_type_id` (`fuel_type_id`),
  KEY `fk_ad_doors_id` (`doors_id`),
  KEY `fk_ad_seats_id` (`seats_id`),
  KEY `fk_ad_steering_wheel_side_id` (`steering_wheel_side_id`) USING BTREE,
  KEY `fk_ad_air_condition_id` (`air_condition_id`),
  KEY `fk_ad_origin_id` (`origin_id`),
  KEY `fk_ad_safety_id` (`safety_id`),
  KEY `fk_ad_equipment_id` (`equipment_id`),
  KEY `fk_ad_vehicle_condition_id` (`vehicle_condition_id`),
  KEY `fk_ad_damage_id` (`damage_id`),
  KEY `fk_ad_category_id` (`category_id`),
  CONSTRAINT `fk_ad_air_condition_id` FOREIGN KEY (`air_condition_id`) REFERENCES `air_condition` (`air_condition_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_car_body_id` FOREIGN KEY (`car_body_id`) REFERENCES `car_body` (`car_body_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_damage_id` FOREIGN KEY (`damage_id`) REFERENCES `damage` (`damage_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_doors_id` FOREIGN KEY (`doors_id`) REFERENCES `doors` (`doors_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_drive_id` FOREIGN KEY (`drive_id`) REFERENCES `drive` (`drive_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_equipment_id` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`equipment_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_fuel_type_id` FOREIGN KEY (`fuel_type_id`) REFERENCES `fuel_type` (`fuel_type_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_model_id` FOREIGN KEY (`model_id`) REFERENCES `model` (`model_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_origin_id` FOREIGN KEY (`origin_id`) REFERENCES `origin` (`origin_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_photo_id` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`photo_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_safety_id` FOREIGN KEY (`safety_id`) REFERENCES `safety` (`safety_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_seats_id` FOREIGN KEY (`seats_id`) REFERENCES `seats` (`seats_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_steering_wheel_side_id` FOREIGN KEY (`steering_wheel_side_id`) REFERENCES `steering_wheel_side` (`steering_wheel_side_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_transmission_id` FOREIGN KEY (`transmission_id`) REFERENCES `transmission` (`transmission_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ad_vehicle_condition_id` FOREIGN KEY (`vehicle_condition_id`) REFERENCES `vehicle_condition` (`vehicle_condition_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.ad: ~0 rows (approximately)

-- Dumping structure for table piivt_app.air_condition
DROP TABLE IF EXISTS `air_condition`;
CREATE TABLE IF NOT EXISTS `air_condition` (
  `air_condition_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `no` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `manual` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `automatic` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`air_condition_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.air_condition: ~0 rows (approximately)

-- Dumping structure for table piivt_app.brand
DROP TABLE IF EXISTS `brand`;
CREATE TABLE IF NOT EXISTS `brand` (
  `brand_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`brand_id`),
  UNIQUE KEY `uq_brand_name_category_id` (`name`,`category_id`) USING BTREE,
  KEY `fk_brand_category_id` (`category_id`) USING BTREE,
  CONSTRAINT `fk_brand_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.brand: ~3 rows (approximately)
INSERT IGNORE INTO `brand` (`brand_id`, `name`, `category_id`) VALUES
	(16, 'Audi', 10),
	(18, 'Citroen', 10),
	(17, 'Volkswagen', 10);

-- Dumping structure for table piivt_app.car_body
DROP TABLE IF EXISTS `car_body`;
CREATE TABLE IF NOT EXISTS `car_body` (
  `car_body_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sedan` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `hatchback` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `cupe` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `station_wagon` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `convertible` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `minivan` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `suv` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `pickup` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`car_body_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.car_body: ~0 rows (approximately)

-- Dumping structure for table piivt_app.category
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `category_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `uq_category_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.category: ~2 rows (approximately)
INSERT IGNORE INTO `category` (`category_id`, `name`) VALUES
	(10, 'Automobili'),
	(11, 'Motori');

-- Dumping structure for table piivt_app.damage
DROP TABLE IF EXISTS `damage`;
CREATE TABLE IF NOT EXISTS `damage` (
  `damage_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `not_damaged` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `damaged_running` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `damaged_not_running` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`damage_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.damage: ~0 rows (approximately)

-- Dumping structure for table piivt_app.doors
DROP TABLE IF EXISTS `doors`;
CREATE TABLE IF NOT EXISTS `doors` (
  `doors_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `two_three` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `four_five` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`doors_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.doors: ~0 rows (approximately)

-- Dumping structure for table piivt_app.drive
DROP TABLE IF EXISTS `drive`;
CREATE TABLE IF NOT EXISTS `drive` (
  `drive_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fwd` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `rwd` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `awd` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `awd_reduction` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`drive_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.drive: ~0 rows (approximately)

-- Dumping structure for table piivt_app.emission_calss
DROP TABLE IF EXISTS `emission_calss`;
CREATE TABLE IF NOT EXISTS `emission_calss` (
  `emission_calss_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `euro1` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `euro2` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `euro3` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `euro4` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `euro5` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `euro6` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`emission_calss_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.emission_calss: ~0 rows (approximately)

-- Dumping structure for table piivt_app.equipment
DROP TABLE IF EXISTS `equipment`;
CREATE TABLE IF NOT EXISTS `equipment` (
  `equipment_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `metallic` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `cruise_control` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `panorama` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `mirror_heaters` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `fog_lights` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `parking_sensor` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `aluminium_wheels` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `radio_cd` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `windshield_heaters` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `auto_parking` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `head_up_display` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `multimedia` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `seat_memory` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `thresixty_camera` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `mp3` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `differential_lock` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `cup_holders` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `spare_tire` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `assistance_for_moving_uphills` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `apple_carplay` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `matrix_headlights` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `bumpers_in_the_color_of_the_car` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `remote_lock` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `tinted_glass` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `height_adjustable_seats` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `xenon_lights` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `webasto` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `navigation` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `camera` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `isofix` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `keyless_ignition` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `start_stop_sistem` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`equipment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.equipment: ~0 rows (approximately)

-- Dumping structure for table piivt_app.fuel_type
DROP TABLE IF EXISTS `fuel_type`;
CREATE TABLE IF NOT EXISTS `fuel_type` (
  `fuel_type_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `petrol` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `diesel` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `petrol_tng` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `petrol_cng` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `electric` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `hybrid` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`fuel_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.fuel_type: ~0 rows (approximately)

-- Dumping structure for table piivt_app.interior_material
DROP TABLE IF EXISTS `interior_material`;
CREATE TABLE IF NOT EXISTS `interior_material` (
  `interior_material_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fabric` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `leather` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `combination` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `velor` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `other` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`interior_material_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.interior_material: ~0 rows (approximately)

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.model: ~1 rows (approximately)
INSERT IGNORE INTO `model` (`model_id`, `name`, `brand_id`) VALUES
	(4, 'Polo', 17);

-- Dumping structure for table piivt_app.origin
DROP TABLE IF EXISTS `origin`;
CREATE TABLE IF NOT EXISTS `origin` (
  `origin_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `domestic_tag` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `on_customer` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `foregin_tag` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`origin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.origin: ~0 rows (approximately)

-- Dumping structure for table piivt_app.photo
DROP TABLE IF EXISTS `photo`;
CREATE TABLE IF NOT EXISTS `photo` (
  `photo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `file_path` text NOT NULL,
  PRIMARY KEY (`photo_id`),
  UNIQUE KEY `uq_photo_file_path` (`file_path`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.photo: ~0 rows (approximately)

-- Dumping structure for table piivt_app.replacement
DROP TABLE IF EXISTS `replacement`;
CREATE TABLE IF NOT EXISTS `replacement` (
  `replacement_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `no` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `for_cheaper` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `same_price` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `for_expensive` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `no_preference` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`replacement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.replacement: ~0 rows (approximately)

-- Dumping structure for table piivt_app.safety
DROP TABLE IF EXISTS `safety`;
CREATE TABLE IF NOT EXISTS `safety` (
  `safety_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (`safety_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.safety: ~0 rows (approximately)

-- Dumping structure for table piivt_app.seats
DROP TABLE IF EXISTS `seats`;
CREATE TABLE IF NOT EXISTS `seats` (
  `seats_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `two` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `three` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `four` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `five` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `six` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `seven` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `eight` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `nine` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`seats_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.seats: ~0 rows (approximately)

-- Dumping structure for table piivt_app.steering_wheel_side
DROP TABLE IF EXISTS `steering_wheel_side`;
CREATE TABLE IF NOT EXISTS `steering_wheel_side` (
  `steering_wheel_side_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `left` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `right` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`steering_wheel_side_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.steering_wheel_side: ~0 rows (approximately)

-- Dumping structure for table piivt_app.transmission
DROP TABLE IF EXISTS `transmission`;
CREATE TABLE IF NOT EXISTS `transmission` (
  `transmission_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `manual_4_speed` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `manual_5_speed` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `manual_6_speed` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `automatic_semiauto` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`transmission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.transmission: ~0 rows (approximately)

-- Dumping structure for table piivt_app.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(64) NOT NULL,
  `password_hash` varchar(128) NOT NULL,
  `forename` varchar(64) NOT NULL,
  `surname` varchar(64) NOT NULL,
  `city` varchar(64) NOT NULL,
  `phone_number` varchar(24) NOT NULL,
  `is_active` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `activation_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `uq_user_email` (`email`),
  UNIQUE KEY `uq_user_activation_code` (`activation_code`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.user: ~1 rows (approximately)
INSERT IGNORE INTO `user` (`user_id`, `email`, `password_hash`, `forename`, `surname`, `city`, `phone_number`, `is_active`, `activation_code`) VALUES
	(17, 'igor.crnogorcevic.18@singimail.rs', '$2b$10$3wqcwfmhS8Hpg/Lc/5Y8PeiVVrNjzxmYw5nUAD9k1XyRItijv7VKC', 'Igor', 'Crnogorcevic', 'Beograd', '0615384975', 1, NULL);

-- Dumping structure for table piivt_app.vehicle_condition
DROP TABLE IF EXISTS `vehicle_condition`;
CREATE TABLE IF NOT EXISTS `vehicle_condition` (
  `vehicle_condition_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_owner` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `servis_book` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `adapted_for_the_disabled` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `driving_school_vehicle` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `spare_key` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `taxi` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `restored` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `test_vehicle` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `garaged` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `oldtimer` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `tuning` tinyint(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`vehicle_condition_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table piivt_app.vehicle_condition: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
