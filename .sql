-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2022 at 01:01 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sevima`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `role`) VALUES
(3, 'bayu.zip', '$2b$09$UxPtsNVR.rXLRQTM86eVlupxRKPNyXztdkPvElx2zVLsXq9SA3r9.', 1),
(16, 'wildan', '$2b$09$Kzw4JNfz6lHxMlYtQQ0RaO/RXbSVTKDF0bk4de3vcI1rrXKMzOOT.', 1),
(17, 'cinta', '$2b$09$2llSlZnKKcAYXdr86DjtXetSiRL1YT1XNcFs508vkOZxXWFtlYVU6', 1);

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `kategori` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `title`, `kategori`) VALUES
(12, 'Quiz Luar Angkasa Bagian 1', 1),
(13, 'Quiz Lautan Bagian 1', 2),
(14, 'Quiz Hutan Bagian 1', 3),
(15, 'Quiz Luar Angkasa Bagian 2', 1),
(16, 'Quiz Lautan Bagian 2', 2),
(17, 'Quiz Hutan Bagian 2', 3);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('9gPEU5_WFHur4XkEOoJoX_g3BeyZZ42q', 1658826053, '{\"cookie\":{\"originalMaxAge\":2628000000,\"expires\":\"2022-07-26T07:24:38.143Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":3,\"flash_message\":null}');

-- --------------------------------------------------------

--
-- Table structure for table `soal_quiz`
--

CREATE TABLE `soal_quiz` (
  `id` int(11) NOT NULL,
  `id_quiz` int(4) NOT NULL,
  `image` varchar(256) NOT NULL,
  `answer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `soal_quiz`
--

INSERT INTO `soal_quiz` (`id`, `id_quiz`, `image`, `answer`) VALUES
(1, 8, 'image-1656170662346.png', '[{\"answer_a\":\"Babi\",\"value_a\":\"1\"},{\"answer_b\":\"Kambing\",\"value_b\":\"0\"},{\"answer_c\":\"Kuda\",\"value_c\":\"0\"},{\"answer_d\":\"Ubur - Ubur\",\"value_d\":\"0\"}]'),
(2, 8, 'image-1656170900103.png', '[{\"answer_a\":\"Anjing\",\"value_a\":\"0\"},{\"answer_b\":\"Sapi\",\"value_b\":\"0\"},{\"answer_c\":\"Gajah\",\"value_c\":\"1\"},{\"answer_d\":\"Kangguru\",\"value_d\":\"0\"}]'),
(3, 9, 'image-1656177939168.png', '[{\"answer_a\":\"Buaya\",\"value_a\":\"0\"},{\"answer_b\":\"Sapi\",\"value_b\":\"0\"},{\"answer_c\":\"Gorila\",\"value_c\":\"0\"},{\"answer_d\":\"Kambing\",\"value_d\":\"1\"}]'),
(4, 9, 'image-1656178050491.jfif', '[{\"answer_a\":\"A\",\"value_a\":\"1\"},{\"answer_b\":\"B\",\"value_b\":\"0\"},{\"answer_c\":\"C\",\"value_c\":\"0\"},{\"answer_d\":\"D\",\"value_d\":\"0\"}]'),
(5, 12, 'image-1656180682307.png', '[{\"answer_a\":\"Merkurius\",\"value_a\":\"0\"},{\"answer_b\":\"Venus\",\"value_b\":\"0\"},{\"answer_c\":\"Bumi\",\"value_c\":\"1\"},{\"answer_d\":\"Mars\",\"value_d\":\"0\"}]'),
(6, 12, 'image-1656180714329.png', '[{\"answer_a\":\"Roket\",\"value_a\":\"1\"},{\"answer_b\":\"Meteor\",\"value_b\":\"0\"},{\"answer_c\":\"Ufo\",\"value_c\":\"0\"},{\"answer_d\":\"Pesawat\",\"value_d\":\"0\"}]'),
(7, 14, 'image-1656184998726.png', '[{\"answer_a\":\"PANDA\",\"value_a\":\"1\"},{\"answer_b\":\"MUSANG\",\"value_b\":\"0\"},{\"answer_c\":\"SINGA\",\"value_c\":\"0\"},{\"answer_d\":\"KANGGURU\",\"value_d\":\"0\"}]'),
(8, 14, 'image-1656185026982.png', '[{\"answer_a\":\"HARIMAU\",\"value_a\":\"0\"},{\"answer_b\":\"SINGA\",\"value_b\":\"1\"},{\"answer_c\":\"GORILA\",\"value_c\":\"0\"},{\"answer_d\":\"KAMBING\",\"value_d\":\"0\"}]'),
(9, 17, 'image-1656185255771.png', '[{\"answer_a\":\"ELANG\",\"value_a\":\"0\"},{\"answer_b\":\"KELINCI\",\"value_b\":\"0\"},{\"answer_c\":\"KUDA\",\"value_c\":\"0\"},{\"answer_d\":\"ZEBRA\",\"value_d\":\"1\"}]'),
(10, 17, 'image-1656185298177.png', '[{\"answer_a\":\"BUAYA\",\"value_a\":\"0\"},{\"answer_b\":\"JERAPAH\",\"value_b\":\"1\"},{\"answer_c\":\"MONYET\",\"value_c\":\"0\"},{\"answer_d\":\"BADAK\",\"value_d\":\"0\"}]'),
(11, 13, 'image-1656185845398.png', '[{\"answer_a\":\"LUMBA - LUMBA\",\"value_a\":\"1\"},{\"answer_b\":\"IKAN PARI\",\"value_b\":\"0\"},{\"answer_c\":\"IKAN PAUS\",\"value_c\":\"0\"},{\"answer_d\":\"IKAN HIU\",\"value_d\":\"0\"}]'),
(12, 13, 'image-1656185878268.png', '[{\"answer_a\":\"TERUMBU KARANG\",\"value_a\":\"0\"},{\"answer_b\":\"CUMI - CUMI\",\"value_b\":\"0\"},{\"answer_c\":\"KERANG\",\"value_c\":\"0\"},{\"answer_d\":\"GURITA\",\"value_d\":\"1\"}]'),
(13, 16, 'image-1656186161262.png', '[{\"answer_a\":\"PUTRI DUYUNG\",\"value_a\":\"1\"},{\"answer_b\":\"NYI RORO KIDUL\",\"value_b\":\"0\"},{\"answer_c\":\"PUTRI SALJU\",\"value_c\":\"0\"},{\"answer_d\":\"PUTRI MALU\",\"value_d\":\"0\"}]'),
(14, 16, 'image-1656186194500.png', '[{\"answer_a\":\"TERUMBU KARANG\",\"value_a\":\"0\"},{\"answer_b\":\"KERANG\",\"value_b\":\"0\"},{\"answer_c\":\"BINTANG LAUT\",\"value_c\":\"1\"},{\"answer_d\":\"RUMPUT LAUT\",\"value_d\":\"0\"}]'),
(15, 15, 'image-1656186569822.png', '[{\"answer_a\":\"ALIEN\",\"value_a\":\"1\"},{\"answer_b\":\"ASTEROID\",\"value_b\":\"0\"},{\"answer_c\":\"BINTANG\",\"value_c\":\"0\"},{\"answer_d\":\"BULAN\",\"value_d\":\"0\"}]'),
(16, 15, 'image-1656186596417.png', '[{\"answer_a\":\"SATELIT\",\"value_a\":\"1\"},{\"answer_b\":\"MATAHARI\",\"value_b\":\"0\"},{\"answer_c\":\"METEOR\",\"value_c\":\"0\"},{\"answer_d\":\"BULAN\",\"value_d\":\"0\"}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `soal_quiz`
--
ALTER TABLE `soal_quiz`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `soal_quiz`
--
ALTER TABLE `soal_quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
