-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2025 at 08:14 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `details` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `details`) VALUES
(1, 'Getting Started with Web Development', 'An introduction to HTML, CSS, and JavaScript for beginners.'),
(2, 'Understanding Databases', 'Learn the basics of databases, tables, and SQL queries.'),
(3, 'Why Learn Programming?', 'Programming helps you solve problems and build useful applications.'),
(4, 'Introduction to PHP', 'A beginner-friendly overview of PHP and how it works with servers.'),
(5, 'What is an API?', 'APIs allow different applications to communicate with each other.'),
(6, 'Tips for Clean Code', 'Best practices to write readable and maintainable code.'),
(7, 'Frontend vs Backend Development', 'A comparison of frontend and backend roles in web development.'),
(8, 'Learning JavaScript Basics', 'Variables, functions, and loops explained simply.'),
(9, 'Importance of Version Control', 'Why developers use Git to manage and track code changes.'),
(10, 'How the Internet Works', 'A simple explanation of servers, browsers, and HTTP requests.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
