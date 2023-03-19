-- language: MySQL

CREATE TABLE `account` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `account_id` VARCHAR(255) NOT NULL,
    `last_login` DATETIME NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`account_id`)
);

CREATE TABLE `applications` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `account_id` VARCHAR(255) NOT NULL,
    `application_id` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT  'incomplete',
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`account_id`) REFERENCES `Account`(`account_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `general` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `service_years` INT NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `license_info` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `license_number` VARCHAR(255) NOT NULL,
    `vat_number` VARCHAR(255) NOT NULL,
    `license_expiration` DATE NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `contacts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `nationality` VARCHAR(255) NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`, `id`)
);

CREATE TABLE `bank_info` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `bank_name` VARCHAR(255) NOT NULL,
    `bank_city` VARCHAR(255) NOT NULL,
    `bank_account_number` VARCHAR(255) NOT NULL,
    `bank_iban` VARCHAR(255) NOT NULL,
    `bank_swift` VARCHAR(255) NOT NULL,
    `bank_account_type` VARCHAR(255) NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `documents` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `destination` VARCHAR(255) NOT NULL,
    `encoding` VARCHAR(255) NOT NULL,
    `fieldname` VARCHAR(255) NOT NULL,
    `filename` VARCHAR(255) NOT NULL,
    `originalname` VARCHAR(255) NOT NULL,
    `mimetype` VARCHAR(255) NOT NULL,
    `path` VARCHAR(255) NOT NULL,
    `size` INT NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`, `filename`)
);

CREATE TABLE `suppliers` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `contact` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`, `id`)
);

CREATE TABLE `requests` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `credit_period` VARCHAR(255) NOT NULL,
    `credit_limit` VARCHAR(255) NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `application_time` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `general` INT NULL,
    `license` INT NULL,
    `contacts` INT NULL,
    `bank` INT NULL,
    `suppliers` INT NULL,
    `uploads` INT NULL,
    `requests` INT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `submission_date` DATETIME NULL,
    `total_time` INT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TRIGGER `application_time_insert` AFTER INSERT ON `applications` FOR EACH ROW
BEGIN
    INSERT INTO `application_time` (`application_id`) VALUES (NEW.application_id);
END

CREATE TRIGGER `application_time_update` AFTER UPDATE ON `applications` FOR EACH ROW
BEGIN
    IF NEW.status = 'submitted' THEN
        UPDATE `application_time` SET `submission_date` = now() WHERE `application_id` = NEW.application_id;
    END IF;
END

CREATE TRIGGER `application_time_update_total` AFTER UPDATE ON `application_time` FOR EACH ROW
BEGIN
    UPDATE `application_time` SET `total_time` = `general` + `license` + `contacts` + `bank_info` + `documents` + `suppliers` + `requests` WHERE `application_id` = NEW.application_id;
END