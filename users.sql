-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-06-2024 a las 21:49:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `users`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'testuser124', '12345'),
(2, 'Ivan', '$2a$08$YhLS8a6FN/kxJpZ.53iGq.v7vIF6BC6OebnWqpM2CiJmyMmicW/I.'),
(3, 'Probando', '$2a$08$BKelSvjyCceLKyNhZvPONu.M0reagRDYIqQqaywKEsJbBuC0kbDui'),
(4, '', '$2a$08$fV/05GGm3PpuzVpqfQ7D/upekEX/grjBWOO19XE7pLZzb4wHZsa/6'),
(5, 'asd', '$2a$08$nYb46djnSaM/GyvEL3QeDuxC8kGsng187snBJoyo2mrXYie39nSh.'),
(6, 'Lua', '$2a$08$OHlC0iQO0Nmyf3/LsGQKnuOG9izgBAfdPjSIBfRHYbfMnotRuaDZu'),
(7, 'Gabi', '$2a$08$RnFflk3haJ5wZqW54gYpAusMHch6XBhm3dZpPAO30ePsqLihSJ8Ii'),
(8, 'probando', '$2a$08$AUbbo59dqnqqSWnASFYqCeCtflgGDuBxSqUqYcu4XFXd8HIX5sbrO'),
(9, 'asda', '$2a$08$fTadh0.WG.4ofuEwLe.h/uTl8cl/tHSwFeN3l0Hj5Bi6y7gd1AJ5S');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
