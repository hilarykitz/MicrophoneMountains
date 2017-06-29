-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 25, 2014 at 11:22 PM
-- Server version: 5.5.33
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Cab_Fare`
--

-- --------------------------------------------------------

--
-- Table structure for table `home`
--

CREATE TABLE `home` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `lat` int(30) NOT NULL,
  `long` int(30) NOT NULL,
  `loc` varchar(100) COLLATE utf32_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf32 COLLATE=utf32_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `home`
--

INSERT INTO `home` (`id`, `lat`, `long`, `loc`) VALUES
(1, 44, -79, '131 Lansdowne Ave, Toronto, ON');

-- --------------------------------------------------------

--
-- Table structure for table `saves`
--

CREATE TABLE `saves` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lat` int(40) NOT NULL,
  `long` int(40) NOT NULL,
  `loc` varchar(100) COLLATE utf32_bin NOT NULL,
  `title` varchar(20) COLLATE utf32_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) COLLATE utf32_bin NOT NULL,
  `fname` varchar(30) COLLATE utf32_bin NOT NULL,
  `lname` varchar(30) COLLATE utf32_bin NOT NULL,
  `since` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `city` varchar(40) COLLATE utf32_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf32 COLLATE=utf32_bin AUTO_INCREMENT=5 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `fname`, `lname`, `since`, `city`) VALUES
(1, 'hilkitz', 'hilary', 'kitz', '2014-03-25 21:47:32', 'Toronto'),
(2, 'deadzone', 'Allie', 'Murphy', '2014-03-25 21:47:48', 'Halifax'),
(3, 'Duffy', 'Matthew', 'Duffy', '2014-03-25 21:48:00', 'Montreal'),
(4, 'dog', 'Denis', 'Kierans', '2014-03-25 21:48:19', 'Toronto');

-- --------------------------------------------------------

--
-- Table structure for table `work`
--

CREATE TABLE `work` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `lat` varchar(40) COLLATE utf32_bin NOT NULL,
  `long` varchar(40) COLLATE utf32_bin NOT NULL,
  `loc` varchar(100) COLLATE utf32_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf32 COLLATE=utf32_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `work`
--

INSERT INTO `work` (`id`, `lat`, `long`, `loc`) VALUES
(1, '43.651939', '-79.365022', '341 King St East, Toronto, ON');
