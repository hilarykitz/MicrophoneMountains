-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 02, 2014 at 09:20 PM
-- Server version: 5.5.25
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `saves`
--
/*CREATE DATABASE `infinkj6_hill` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;*/
USE `infinkj6_hill`;

-- --------------------------------------------------------

--
-- Table structure for table `saves`
--

CREATE TABLE `saves` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(201) COLLATE utf8_bin NOT NULL,
  `userid` varchar(11) COLLATE utf8_bin NOT NULL,
  `class` varchar(8) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=28 ;


--
-- Dumping data for table `saves`
--

INSERT INTO `saves` (`address`, `userid`, `class`) VALUES
(1, '460 Spadina Ave Toronto ON', 1, 'home'),
(2, '321 King Street East Toronto ON', 1, 'work'),
(3, '433 Montrose Ave Toronto ON', 2, 'misc');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  `first` varchar(20) COLLATE utf8_bin NOT NULL,
  `last` varchar(20) COLLATE utf8_bin NOT NULL,
  `email` varchar(40) COLLATE utf8_bin NOT NULL,
  `password` varchar(20) COLLATE utf8_bin NOT NULL,
  `image` varchar(255) COLLATE utf8_bin NOT NULL,
  `level` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `created`, `first`, `last`, `email`, `password`, `image`, `level`, `status`) VALUES
(1, '2014-03-05 18:47:00', 'Rocco', 'Panacci', 'rpanacci@georgebrown.ca', '12345', 'rocco2.jpg', 1, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;