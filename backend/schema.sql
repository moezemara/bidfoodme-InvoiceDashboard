-- language: MySQL

CREATE TABLE `account` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `account_id` VARCHAR(255) NOT NULL,
    `last_login` DATETIME NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`account_id`)
);

CREATE TABLE `docusign_sessions` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `access_token` TEXT NOT NULL,
    `refresh_token` TEXT NOT NULL,
    `expires_in` INT NOT NULL,
    `token_type` VARCHAR(255) NOT NULL,
    `scope` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),
    `expired` INT NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
)

-- Request credit
CREATE TABLE `requestcredit_applications` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `account_id` VARCHAR(255) NOT NULL,
    `application_id` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT  'incomplete',
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`account_id`) REFERENCES `Account`(`account_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `requestcredit_docusign_envelopes` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `envelope_id` VARCHAR(255) NOT NULL,
    `application_id` VARCHAR(255) NOT NULL,
    `recipient_email` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT 'Created',
    `signing_date` DATETIME NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`envelope_id`)
);

CREATE TABLE `requestcredit_general` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `outlet_legal_name` VARCHAR(255) NOT NULL,
    `outlet_trade_name` VARCHAR(255) NOT NULL,
    `billing_outlet_address` VARCHAR(255) NOT NULL,
    `billing_country` VARCHAR(255) NOT NULL,
    `billing_city` VARCHAR(255) NOT NULL,
    `billing_phone` VARCHAR(255) NOT NULL,
    `billing_po_box` VARCHAR(255) NOT NULL,
    `delivery_outlet_address` VARCHAR(255) NOT NULL,
    `delivery_country` VARCHAR(255) NOT NULL,
    `delivery_city` VARCHAR(255) NOT NULL,
    `delivery_phone` VARCHAR(255) NOT NULL,
    `delivery_po_box` VARCHAR(255) NOT NULL,
    `service_years` INT NOT NULL,
    `website_url` TEXT NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `requestcredit_license_info` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `license_number` VARCHAR(255) NOT NULL,
    `vat_number` VARCHAR(255) NOT NULL,
    `license_expiration` VARCHAR(255) NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `requestcredit_contacts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `shareholder_percentage` VARCHAR(255) NULL,
    `authorised_signature` VARCHAR(255) NULL DEFAULT 'No',
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`, `id`)
);

CREATE TABLE `requestcredit_bank_info` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `bank_name` VARCHAR(255) NOT NULL,
    `bank_branch` VARCHAR(255) NOT NULL,
    `bank_account_number` VARCHAR(255) NOT NULL,
    `bank_iban` VARCHAR(255) NOT NULL,
    `bank_swift` VARCHAR(255) NOT NULL,
    `bank_account_type` VARCHAR(255) NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `requestcredit_suppliers` (
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
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`, `id`)
);

CREATE TABLE `requestcredit_documents` (
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
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`, `filename`)
);


CREATE TABLE `requestcredit_requests` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `credit_limit` VARCHAR(255) NOT NULL,
    `credit_period` VARCHAR(255) NOT NULL DEFAULT '30',
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `requestcredit_application_time` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `general` INT NULL DEFAULT 0,
    `contacts` INT NULL DEFAULT 0,
    `references` INT NULL DEFAULT 0,
    `uploads` INT NULL DEFAULT 0,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `submission_date` DATETIME NULL,
    `total_time` INT NULL DEFAULT 0,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `requestcredit_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TRIGGER `requestcredit_application_time_insert` AFTER INSERT ON `requestcredit_applications` FOR EACH ROW
BEGIN
    INSERT INTO `requestcredit_application_time` (`application_id`) VALUES (NEW.application_id);
END

-- register branch
CREATE TABLE `registerbranch_applications` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `account_id` VARCHAR(255) NOT NULL,
    `application_id` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT  'incomplete',
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`account_id`) REFERENCES `Account`(`account_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `registerbranch_docusign_envelopes` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `envelope_id` VARCHAR(255) NOT NULL,
    `application_id` VARCHAR(255) NOT NULL,
    `recipient_email` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT 'Created',
    `signing_date` DATETIME NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `registerbranch_applications`(`application_id`),
    UNIQUE (`envelope_id`)
);

CREATE TABLE `registerbranch_general` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `outlet_legal_name` VARCHAR(255) NOT NULL,
    `outlet_trade_name` VARCHAR(255) NOT NULL,
    `outlet_group_name` VARCHAR(255) NOT NULL,
    `billing_outlet_address` VARCHAR(255) NOT NULL,
    `billing_country` VARCHAR(255) NOT NULL,
    `billing_city` VARCHAR(255) NOT NULL,
    `billing_phone` VARCHAR(255) NOT NULL,
    `billing_po_box` VARCHAR(255) NOT NULL,
    `delivery_outlet_address` VARCHAR(255) NOT NULL,
    `delivery_country` VARCHAR(255) NOT NULL,
    `delivery_city` VARCHAR(255) NOT NULL,
    `delivery_phone` VARCHAR(255) NOT NULL,
    `delivery_po_box` VARCHAR(255) NOT NULL,
    `service_years` INT NOT NULL,
    `website_url` TEXT NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `registerbranch_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `registerbranch_license_info` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `license_number` VARCHAR(255) NOT NULL,
    `vat_number` VARCHAR(255) NOT NULL,
    `license_expiration` VARCHAR(255) NOT NULL,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `registerbranch_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `registerbranch_contacts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `shareholder_percentage` VARCHAR(255) NULL,
    `authorised_signature` VARCHAR(255) NULL DEFAULT 'No',
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `registerbranch_applications`(`application_id`),
    UNIQUE (`application_id`, `id`)
);

CREATE TABLE `registerbranch_documents` (
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
    FOREIGN KEY (`application_id`) REFERENCES `registerbranch_applications`(`application_id`),
    UNIQUE (`application_id`, `filename`)
);


CREATE TABLE `registerbranch_requests` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `credit_limit` VARCHAR(255) NOT NULL,
    `credit_period` VARCHAR(255) NOT NULL DEFAULT '30',
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `last_update` DATETIME NOT NULL DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `registerbranch_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TABLE `registerbranch_application_time` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NOT NULL,
    `general` INT NULL DEFAULT 0,
    `contacts` INT NULL DEFAULT 0,
    `uploads` INT NULL DEFAULT 0,
    `creation_date` DATETIME NOT NULL DEFAULT now(),
    `submission_date` DATETIME NULL,
    `total_time` INT NULL DEFAULT 0,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`application_id`) REFERENCES `registerbranch_applications`(`application_id`),
    UNIQUE (`application_id`)
);

CREATE TRIGGER `registerbranch_application_time_insert` AFTER INSERT ON `registerbranch_applications` FOR EACH ROW
BEGIN
    INSERT INTO `registerbranch_application_time` (`application_id`) VALUES (NEW.application_id);
END