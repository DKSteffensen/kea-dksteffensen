-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2015 at 11:50 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_airport`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `customer_login`(IN `parEmail` VARCHAR(80), IN `parPassword` VARCHAR(255))
    NO SQL
SELECT id, firstname, lastname, email, cpr
FROM customers
WHERE parEmail = email
AND parPassword = password
AND deleted = 0$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `customer_signup`(IN `parFirstname` VARCHAR(50), IN `parLastname` VARCHAR(50), IN `parEmail` VARCHAR(80), IN `parCPR` VARCHAR(10), IN `parPassword` VARCHAR(255))
    NO SQL
INSERT INTO customers (firstname, lastname, email, cpr, password)
VALUES (parFirstname, parLastname, parEmail, parCPR, parPassword)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `new_travel`(IN `airplaneID` INT(11), IN `airportDepartureID` INT(11), IN `airportArrivalID` INT(11), IN `flightNumber` VARCHAR(50), IN `departureTime` TIMESTAMP, IN `arrivalTime` TIMESTAMP)
    NO SQL
INSERT INTO travel_information (id, airplanes_id, airport_departures_id, airport_arrival_id, pilot_id, flight_number, departure_datetime, arrival_datetime, updated_datetime, deleted)
VALUES ('', airplaneID, airportDepartureID, airportArrivalID, 0, flightNumber, departureTime, arrivalTime, '', 0)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `airplanes`
--

CREATE TABLE IF NOT EXISTS `airplanes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` int(11) NOT NULL,
  `reg_number` varchar(50) NOT NULL,
  `passengers_capacity` int(11) NOT NULL,
  `classes` tinyint(4) NOT NULL,
  `updated_datetime` timestamp NOT NULL,
  `deleted` tinyint(1) unsigned zerofill NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `airplanes`
--

INSERT INTO `airplanes` (`id`, `model`, `reg_number`, `passengers_capacity`, `classes`, `updated_datetime`, `deleted`) VALUES
(1, 1, 'OY-WXS', 853, 1, '2015-11-04 13:14:17', 0),
(2, 1, 'OY-UCT', 644, 2, '2015-11-04 13:14:17', 0),
(3, 3, 'OY-HEF', 419, 2, '2015-11-04 13:15:40', 0),
(4, 3, 'OY-EXL', 380, 3, '2015-11-04 13:15:40', 0),
(5, 4, 'OY-VGM', 335, 2, '2015-11-04 13:16:53', 0),
(6, 4, 'OY-JDE', 295, 3, '2015-11-04 13:16:53', 0),
(7, 5, 'OY-IOY', 605, 1, '2015-11-04 13:18:19', 0),
(8, 5, 'OY-RRS', 410, 3, '2015-11-04 13:18:19', 0),
(9, 6, 'OY-DKS', 330, 2, '2015-11-04 13:21:20', 0),
(10, 6, 'OY-YCQ', 330, 2, '2015-11-04 13:21:20', 0),
(11, 6, 'OY-JAG', 330, 2, '2015-11-04 13:21:20', 0),
(12, 7, 'OY-XFH', 220, 1, '2015-11-04 13:22:07', 0),
(13, 7, 'OY-KSN', 177, 2, '2015-11-04 13:22:07', 0),
(14, 8, 'OY-PYI', 134, 1, '2015-11-04 13:23:11', 0),
(15, 8, 'OY-UJQ', 124, 2, '2015-11-04 13:23:11', 0),
(16, 8, 'OY-YQL', 156, 1, '2015-11-04 13:23:11', 0);

-- --------------------------------------------------------

--
-- Table structure for table `airplane_brand`
--

CREATE TABLE IF NOT EXISTS `airplane_brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `airplane_brand`
--

INSERT INTO `airplane_brand` (`id`, `name`) VALUES
(1, 'Boeing'),
(2, 'Airbus');

-- --------------------------------------------------------

--
-- Table structure for table `airplane_model`
--

CREATE TABLE IF NOT EXISTS `airplane_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `airplane_brand_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `max_speed` int(11) NOT NULL,
  `max_distance` int(11) NOT NULL,
  `fuel_capacity` int(11) NOT NULL,
  `fuel_consumption` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `airplane_model`
--

INSERT INTO `airplane_model` (`id`, `airplane_brand_id`, `name`, `max_speed`, `max_distance`, `fuel_capacity`, `fuel_consumption`) VALUES
(1, 2, 'A380-800', 945, 15700, 323546, '20.70'),
(3, 2, 'A340-600', 913, 14350, 195880, '13.70'),
(4, 2, 'A340-300', 913, 13700, 147850, '10.85'),
(5, 1, '747-8I', 956, 14300, 239000, '16.80'),
(6, 1, '787-10', 954, 11900, 126210, '10.70'),
(7, 1, '737-800', 876, 10200, 26020, '2.60'),
(8, 2, 'A319-100', 871, 6700, 24210, '3.70');

-- --------------------------------------------------------

--
-- Table structure for table `airplane_status`
--

CREATE TABLE IF NOT EXISTS `airplane_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `airplane_status_log`
--

CREATE TABLE IF NOT EXISTS `airplane_status_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status_id` int(11) NOT NULL,
  `airplanes_id` int(11) NOT NULL,
  `airports_id` int(11) NOT NULL,
  `datetime` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `airports`
--

CREATE TABLE IF NOT EXISTS `airports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `airport_code` varchar(4) NOT NULL,
  `city` varchar(60) NOT NULL,
  `country` varchar(75) NOT NULL,
  `coordinates_n` varchar(20) NOT NULL,
  `coordinates_w` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `airports`
--

INSERT INTO `airports` (`id`, `name`, `airport_code`, `city`, `country`, `coordinates_n`, `coordinates_w`) VALUES
(1, 'Hartsfield-Jackson Atlanta International Airport', 'ATL', 'Atlanta', 'United States', '33.636667', '-84.428056'),
(2, 'Beijing Capital International Airport', 'PEK', 'Beijing', 'China', '40.08', '116.584444'),
(3, 'Dubai International Airport', 'DXB', 'Dubai', 'United Arab Emirates', '25.252778', '55.364444'),
(4, 'Tokyo Haneda Airport', 'HND', 'Tokyo', 'Japan', '35.553333', '139.781111'),
(5, 'London Heathrow Airport', 'LHR', 'London', 'United Kingdom', '51.4775', ' -0.461389'),
(6, 'Paris-Charles de Gaulle Airport', 'CDG', 'Paris', 'France', '49.009722', '2.547778'),
(7, 'Singapore Changi Airport', 'SIN', 'Changi', 'Singapore', '1.359167', '103.989444'),
(8, 'Frankfurt Airport', 'FRA', 'Frankfurt', 'Germany', '50.033333', '8.570556'),
(9, 'Amsterdam Airport Schiphol', 'AMS', 'Amsterdam', 'Netherlands', '52.308056', '4.764167'),
(10, 'Copenhagen Airport', 'CPH', 'Copenhagen', 'Denmark', '55.618056', '12.656111');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(80) NOT NULL,
  `cpr` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `updated_datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `firstname`, `lastname`, `email`, `cpr`, `password`, `updated_datetime`, `deleted`) VALUES
(4, 'Daniel', 'Steffensen', 'd_kristian_s@hotmail.com', '160487xxx', 'test123', '2015-11-19 13:02:57', 0),
(5, 'Test', 'Person', 'test@person.dk', '010101xxxx', 'pass123', '2015-11-19 13:04:51', 0),
(24, 'Quick', 'Acces', '1', '010101xxxx', '1', '2015-11-19 22:14:00', 0);

-- --------------------------------------------------------

--
-- Stand-in structure for view `fleet`
--
CREATE TABLE IF NOT EXISTS `fleet` (
`id` int(11)
,`reg_number` varchar(50)
,`passengers_capacity` int(11)
,`classes` tinyint(4)
,`brand` varchar(50)
,`model` varchar(50)
,`max_speed` int(11)
,`max_distance` int(11)
,`fuel_capacity` int(11)
,`fuel_consumption` decimal(5,2)
);
-- --------------------------------------------------------

--
-- Table structure for table `pilots`
--

CREATE TABLE IF NOT EXISTS `pilots` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `pilots`
--

INSERT INTO `pilots` (`id`, `firstname`, `lastname`) VALUES
(1, 'Pete "Maverick"', 'Mitchell'),
(2, 'Tom "Iceman"', 'Kazansky'),
(3, 'Dusty', 'Crophopper'),
(4, 'Han', 'Solo'),
(5, 'Howard', 'Hughes');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `customers_id` int(10) unsigned NOT NULL,
  `tickets_type_id` int(10) unsigned NOT NULL,
  `ticket_number` varchar(25) NOT NULL,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `passport` varchar(20) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `customers_id`, `tickets_type_id`, `ticket_number`, `firstname`, `lastname`, `gender`, `passport`, `order_date`, `updated_datetime`, `deleted`) VALUES
(4, 5, 1, 'CABH1BL', 'Daniel Kristian', 'Steffensen', 'Mr', '5436722123123123', '2015-11-09 23:45:26', '2015-11-18 21:38:35', 0),
(5, 4, 5, 'xxxxxx', 'John', 'Doe', 'Mr', '135878779246', '2015-11-18 13:56:48', '2015-11-19 11:50:28', 0),
(6, 24, 8, 'PAEV8RG', 'Quick', 'Acces', 'Mr', '123', '2015-11-19 21:33:12', '2015-11-19 21:33:12', 0),
(7, 24, 1, 'CA0EH67', 'Quick', 'Acces', 'Mr', '123123', '2015-11-19 22:48:04', '2015-11-19 22:48:04', 0),
(8, 24, 1, 'CAQ4WYA', 'Quick', 'Acces', 'Mr', '123', '2015-11-19 22:48:51', '2015-11-19 22:48:51', 0);

-- --------------------------------------------------------

--
-- Stand-in structure for view `tickets_information`
--
CREATE TABLE IF NOT EXISTS `tickets_information` (
`id` int(10) unsigned
,`customers_id` int(10) unsigned
,`ticket_number` varchar(25)
,`gender` varchar(10)
,`firstname` varchar(80)
,`lastname` varchar(80)
,`passport` varchar(20)
,`deleted` tinyint(4)
,`class` varchar(20)
,`price` int(6) unsigned
,`travel_information` int(10) unsigned
,`departure_datetime` timestamp
,`departure_airport_code` varchar(4)
,`departure_airport_name` varchar(100)
,`arrival_airport_code` varchar(4)
,`arrival_airport_name` varchar(100)
);
-- --------------------------------------------------------

--
-- Table structure for table `tickets_type`
--

CREATE TABLE IF NOT EXISTS `tickets_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `travel_information_id` int(10) unsigned NOT NULL,
  `class` varchar(20) NOT NULL,
  `price` int(6) unsigned NOT NULL,
  `number_of_tickets` smallint(4) NOT NULL,
  `updated_datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `tickets_type`
--

INSERT INTO `tickets_type` (`id`, `travel_information_id`, `class`, `price`, `number_of_tickets`, `updated_datetime`, `deleted`) VALUES
(1, 1, 'Business', 9990, 100, '2015-11-19 12:33:19', 0),
(2, 1, 'Economy', 6990, 220, '2015-11-19 12:02:33', 0),
(3, 2, 'Business', 2400, 0, '2015-11-04 14:08:11', 0),
(4, 2, 'Economy', 1300, 0, '2015-11-04 14:08:11', 0),
(5, 3, 'Economy', 1100, 0, '2015-11-04 14:08:11', 0),
(6, 4, 'Business', 1990, 200, '2015-11-19 12:33:57', 0),
(7, 4, 'Economy', 1290, 100, '2015-11-19 12:33:57', 0),
(8, 21, 'First', 1100, 850, '0000-00-00 00:00:00', 0),
(9, 22, 'Economy', 15000, 230, '2015-11-19 16:03:25', 0),
(10, 22, 'First', 32767, 100, '2015-11-19 16:03:25', 0),
(11, 23, '1', 123, 123, '2015-11-19 16:04:26', 0),
(12, 23, '2', 123, 123, '2015-11-19 16:04:26', 0),
(13, 24, '1', 1212, 43, '2015-11-19 16:06:19', 0),
(14, 24, '2', 1212, 543, '2015-11-19 16:06:19', 0),
(15, 25, '1', 123, 123, '2015-11-19 16:06:56', 0),
(16, 25, '2', 123, 123, '2015-11-19 16:06:56', 0),
(17, 26, '1', 1, 1, '2015-11-19 16:07:45', 0);

-- --------------------------------------------------------

--
-- Stand-in structure for view `travels`
--
CREATE TABLE IF NOT EXISTS `travels` (
`deleted` tinyint(1) unsigned zerofill
,`id` int(11)
,`flight_number` varchar(50)
,`departure_datetime` timestamp
,`arrival_datetime` timestamp
,`departure_airport_code` varchar(4)
,`departure_airport_name` varchar(100)
,`arrival_airport_code` varchar(4)
,`arrival_airport_name` varchar(100)
,`reg_number` varchar(50)
);
-- --------------------------------------------------------

--
-- Table structure for table `travel_information`
--

CREATE TABLE IF NOT EXISTS `travel_information` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `airplanes_id` int(11) NOT NULL,
  `airport_departures_id` int(11) NOT NULL,
  `airport_arrival_id` int(11) NOT NULL,
  `pilot_id` int(11) NOT NULL,
  `flight_number` varchar(50) NOT NULL,
  `departure_datetime` timestamp NOT NULL,
  `arrival_datetime` timestamp NOT NULL,
  `updated_datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint(1) unsigned zerofill NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `travel_information`
--

INSERT INTO `travel_information` (`id`, `airplanes_id`, `airport_departures_id`, `airport_arrival_id`, `pilot_id`, `flight_number`, `departure_datetime`, `arrival_datetime`, `updated_datetime`, `deleted`) VALUES
(1, 9, 6, 9, 1, 'DS7561', '2015-11-19 14:00:00', '2015-11-19 14:00:00', '2015-11-04 13:55:07', 0),
(2, 15, 10, 6, 2, 'DS7486', '2015-11-04 13:55:07', '0000-00-00 00:00:00', '2015-11-04 13:55:07', 0),
(3, 5, 1, 4, 3, 'DS1234', '2015-11-19 14:00:00', '2015-11-22 14:00:00', '2015-11-04 13:55:07', 0),
(4, 10, 10, 5, 4, 'DS6921', '2015-11-04 13:55:07', '0000-00-00 00:00:00', '2015-11-04 13:55:07', 0),
(5, 1, 1, 1, 0, 'DS1234', '2014-12-31 23:00:00', '2014-12-31 23:00:00', '2015-11-19 21:29:31', 1),
(6, 1, 1, 2, 0, 'DS1234', '2014-12-31 23:00:00', '2014-12-31 23:00:00', '2015-11-19 21:29:10', 1),
(7, 1, 1, 2, 0, 'DS1234', '2014-12-31 23:00:00', '2014-12-31 23:00:00', '2015-11-19 21:29:09', 1),
(8, 2, 3, 4, 0, 'DS0012', '2015-01-01 10:11:11', '2015-01-01 10:11:11', '2015-11-19 21:29:30', 1),
(9, 2, 3, 4, 0, 'DS0012', '2015-01-01 10:11:11', '2015-01-01 10:11:11', '2015-11-19 21:29:20', 1),
(21, 1, 2, 9, 0, 'DS8428', '2015-01-02 04:10:00', '2015-11-02 04:10:00', '0000-00-00 00:00:00', 0),
(22, 5, 2, 10, 0, 'DS4141', '2016-01-01 17:00:00', '2017-01-01 17:00:00', '0000-00-00 00:00:00', 0),
(23, 2, 3, 3, 0, 'DS1465', '2016-01-01 17:00:00', '2016-01-01 17:00:00', '0000-00-00 00:00:00', 0),
(24, 15, 2, 3, 0, 'DS2632', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(25, 3, 4, 4, 0, 'DS5533', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(26, 7, 4, 5, 0, 'DS3820', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(35) NOT NULL,
  `email` varchar(80) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `cpr` varchar(10) NOT NULL,
  `updated_datetime` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `firstname`, `lastname`, `password`, `cpr`, `updated_datetime`, `deleted`) VALUES
(1, 'DKSteffensen', 'd_kristian_s@hotmail.com', 'Daniel Kristian', 'Steffensen', 'test123', '160487xxxx', '0000-00-00 00:00:00', 0),
(2, 'test', '1', 'Quick', 'Acces', '1', '12345678', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Structure for view `fleet`
--
DROP TABLE IF EXISTS `fleet`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `fleet` AS select `ap`.`id` AS `id`,`ap`.`reg_number` AS `reg_number`,`ap`.`passengers_capacity` AS `passengers_capacity`,`ap`.`classes` AS `classes`,`ab`.`name` AS `brand`,`am`.`name` AS `model`,`am`.`max_speed` AS `max_speed`,`am`.`max_distance` AS `max_distance`,`am`.`fuel_capacity` AS `fuel_capacity`,`am`.`fuel_consumption` AS `fuel_consumption` from ((`airplanes` `ap` join `airplane_model` `am` on((`ap`.`model` = `am`.`id`))) join `airplane_brand` `ab` on((`am`.`airplane_brand_id` = `ab`.`id`)));

-- --------------------------------------------------------

--
-- Structure for view `tickets_information`
--
DROP TABLE IF EXISTS `tickets_information`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `tickets_information` AS select `t`.`id` AS `id`,`t`.`customers_id` AS `customers_id`,`t`.`ticket_number` AS `ticket_number`,`t`.`gender` AS `gender`,`t`.`firstname` AS `firstname`,`t`.`lastname` AS `lastname`,`t`.`passport` AS `passport`,`t`.`deleted` AS `deleted`,`tt`.`class` AS `class`,`tt`.`price` AS `price`,`tt`.`travel_information_id` AS `travel_information`,`ti`.`departure_datetime` AS `departure_datetime`,`da`.`airport_code` AS `departure_airport_code`,`da`.`name` AS `departure_airport_name`,`aa`.`airport_code` AS `arrival_airport_code`,`aa`.`name` AS `arrival_airport_name` from ((((`tickets` `t` join `tickets_type` `tt` on((`t`.`tickets_type_id` = `tt`.`id`))) join `travel_information` `ti` on((`tt`.`travel_information_id` = `ti`.`id`))) join `airports` `da` on((`ti`.`airport_departures_id` = `da`.`id`))) join `airports` `aa` on((`ti`.`airport_arrival_id` = `aa`.`id`)));

-- --------------------------------------------------------

--
-- Structure for view `travels`
--
DROP TABLE IF EXISTS `travels`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `travels` AS select `ti`.`deleted` AS `deleted`,`ti`.`id` AS `id`,`ti`.`flight_number` AS `flight_number`,`ti`.`departure_datetime` AS `departure_datetime`,`ti`.`arrival_datetime` AS `arrival_datetime`,`ad`.`airport_code` AS `departure_airport_code`,`ad`.`name` AS `departure_airport_name`,`aa`.`airport_code` AS `arrival_airport_code`,`aa`.`name` AS `arrival_airport_name`,`ap`.`reg_number` AS `reg_number` from (((`travel_information` `ti` join `airports` `ad` on((`ti`.`airport_departures_id` = `ad`.`id`))) join `airports` `aa` on((`ti`.`airport_arrival_id` = `aa`.`id`))) join `airplanes` `ap` on((`ti`.`airplanes_id` = `ap`.`id`)));

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
