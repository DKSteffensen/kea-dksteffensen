-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2015 at 12:50 AM
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
AND parPassword = password$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `customer_signup`(IN `parFirstname` VARCHAR(50), IN `parLastname` VARCHAR(50), IN `parEmail` VARCHAR(80), IN `parCPR` VARCHAR(10), IN `parPassword` VARCHAR(255))
    NO SQL
INSERT INTO customers (firstname, lastname, email, cpr, password)
VALUES (parFirstname, parLastname, parEmail, parCPR, parPassword)$$

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
(1, 'Hartsfield–Jackson Atlanta International Airport', 'ATL', 'Atlanta', 'United States', '33.636667', '-84.428056'),
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `firstname`, `lastname`, `email`, `cpr`, `password`, `updated_datetime`, `deleted`) VALUES
(4, 'Random', 'Person', 'test', '12345678', '123', '2015-11-09 23:37:23', 0),
(5, 'Daniel', 'Steffensen', 'd_kristian_s@hotmail.com', '160487xxxx', 'test123', '2015-11-09 19:14:07', 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `customers_id`, `tickets_type_id`, `ticket_number`, `firstname`, `lastname`, `gender`, `passport`, `order_date`, `updated_datetime`, `deleted`) VALUES
(4, 5, 1, 'CABH1BL', 'Daniel', 'Steffensen', 'Mr', '5436722111', '2015-11-09 23:45:26', '2015-11-09 23:45:26', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tickets_type`
--

CREATE TABLE IF NOT EXISTS `tickets_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `travel_information_id` int(10) unsigned NOT NULL,
  `class` varchar(20) NOT NULL,
  `price` smallint(6) NOT NULL,
  `updated_datetime` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tickets_type`
--

INSERT INTO `tickets_type` (`id`, `travel_information_id`, `class`, `price`, `updated_datetime`, `deleted`) VALUES
(1, 1, 'Business', 14900, '2015-11-04 14:03:06', 0),
(2, 1, 'Economy', 9800, '2015-11-04 14:03:06', 0),
(3, 2, 'Business', 2400, '2015-11-04 14:08:11', 0),
(4, 2, 'Economy', 1300, '2015-11-04 14:08:11', 0),
(5, 3, 'Economy', 1100, '2015-11-04 14:08:11', 0),
(6, 4, 'Business', 2200, '2015-11-04 14:08:11', 0),
(7, 4, 'Economy', 1300, '2015-11-04 14:08:11', 0);

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
  `updated_datetime` timestamp NOT NULL,
  `deleted` tinyint(1) unsigned zerofill NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `travel_information`
--

INSERT INTO `travel_information` (`id`, `airplanes_id`, `airport_departures_id`, `airport_arrival_id`, `pilot_id`, `flight_number`, `departure_datetime`, `updated_datetime`, `deleted`) VALUES
(1, 9, 10, 1, 1, 'DS7561', '2015-11-04 13:55:07', '2015-11-04 13:55:07', 0),
(2, 15, 10, 6, 2, 'DS7486', '2015-11-04 13:55:07', '2015-11-04 13:55:07', 0),
(3, 16, 10, 9, 3, 'DS7451', '2015-11-04 13:55:07', '2015-11-04 13:55:07', 0),
(4, 10, 10, 5, 4, 'DS6921', '2015-11-04 13:55:07', '2015-11-04 13:55:07', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
