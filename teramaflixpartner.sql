-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 14 nov. 2024 à 22:48
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `teramaflixpartner`
--

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(36) NOT NULL,
  `userId` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `typeMail` varchar(50) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `userId`, `email`, `name`, `message`, `typeMail`, `creationDate`) VALUES
(1, 4, 'kambireboureima3@gmail.com', '', 'kambireboureima3@gmail.com', 'development', '2024-05-20 18:25:28'),
(3, 4, 'kambireboureima3@gmail.com', '', 'kambireboureima3@gmail.com', 'development', '2024-05-20 18:35:22'),
(4, 4, 'kambireboureima3@gmail.com', '', 'kambireboureima3@gmail.com', 'development', '2024-05-21 08:23:46'),
(5, 4, 'kambireboureima3@gmail.com', '', 'kambireboureima3@gmail.com', 'development', '2024-05-21 08:41:21'),
(6, 4, 'kambireboureima3@gmail.com', 'lmd', 'kambireboureima3@gmail.com', 'development', '2024-05-21 14:04:50'),
(7, 2, 'kambireboureima3@gmail.com', 'lmd', 'kambireboureima3@gmail.com', 'development', '2024-05-21 21:47:20'),
(8, 2, 'kambireboureima3@gmail.com', 'lmd', 'kambireboureima3@gmail.com', 'development', '2024-05-21 21:48:41'),
(9, 2, 'kambireboureima3@gmail.com', 'lmd', 'kambireboureima3@gmail.com', 'development', '2024-05-21 21:51:58'),
(10, 4, 'kambireboureima3@gmail.com', 'lmd', 'kambireboureima3@gmail.com', 'development', '2024-05-22 13:16:25'),
(11, 4, 'kambireboureima3@gmail.com', '', 'The pub of Mine', 'development', '2024-05-22 19:43:49'),
(12, 4, 'kambireboureima3@gmail.com', 'lmd', 'fderfgvb', 'development', '2024-05-22 19:46:56'),
(13, 4, 'kambireboureima3@gmail.com', '', 'dncjsdjn', 'development', '2024-05-22 19:48:40'),
(14, 4, 'kambireboureima3@gmail.com', '', 'huuhjnj', 'development', '2024-05-22 19:54:02'),
(15, 4, 'kambireboureima3@gmail.com', '', 'cdjnx', 'development', '2024-05-22 19:54:57'),
(16, 4, 'kambireboureima3@gmail.com', 'Test', 'hyh', 'development', '2024-05-23 09:54:51'),
(17, 2, 'ishimwegraciella@gmail.com', 'NDAYIRAGIJE', 'white', 'development', '2024-10-09 07:50:23'),
(18, 2, 'arakaza@gmail.com', 'HELE', 'Hello tea', 'development', '2024-10-09 09:29:10');

-- --------------------------------------------------------

--
-- Structure de la table `developpement`
--

CREATE TABLE `developpement` (
  `iddev` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `typeapplication` varchar(50) NOT NULL,
  `descriptionapp` text NOT NULL,
  `periodedevparmois` int(11) NOT NULL,
  `datecreation` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `developpement`
--

INSERT INTO `developpement` (`iddev`, `iduser`, `typeapplication`, `descriptionapp`, `periodedevparmois`, `datecreation`) VALUES
(1, 2, 'Mobile', 'Application teramaflix', 5, '2024-04-29 11:42:23'),
(2, 4, 'Application Mobile', 'TRF', 6, '2024-05-19 17:30:59'),
(3, 4, 'Application Mobile', 'TRF', 6, '2024-05-19 17:34:24'),
(4, 4, 'Application Web', 'REZ', 4, '2024-05-19 17:35:33'),
(5, 4, 'Application Web', 'REZ', 4, '2024-05-19 17:36:23'),
(6, 4, 'Application Web', 'csfv', 4, '2024-05-19 17:38:41'),
(7, 4, 'Application Web', 'rRZRJ', 5, '2024-05-20 12:07:50'),
(8, 2, 'Application Mobile', 'jnjjijij', 7, '2024-05-21 11:07:46'),
(9, 4, 'Application Mobile', 'cnhucb', 7, '2024-05-22 13:17:23'),
(10, 4, 'Application Mobile', 'Juhniuytrfdswxdcfvgbn', 5, '2024-05-23 09:06:53'),
(11, 4, 'Application Mobile', 'tdsy', 5, '2024-05-23 09:18:38'),
(12, 4, '', 'vcrdfvgbn,klo', 5, '2024-05-23 09:20:54'),
(13, 4, '', 'vcrdfvgbn,klo', 5, '2024-05-23 09:20:54'),
(14, 4, 'Application Web', ' C?KDCK', 4, '2024-05-23 09:35:43'),
(15, 2, 'Application Mobile', 'application blackbely', 5, '2024-06-12 09:42:42'),
(16, 2, 'Application Web', 'real test1', 5, '2024-10-09 07:21:46'),
(17, 2, 'Application Web', 'payement sys', 5, '2024-10-09 07:48:26');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `idmessage` int(11) NOT NULL,
  `contenu` text NOT NULL,
  `iduser` int(11) NOT NULL,
  `envoi` int(11) NOT NULL,
  `liremessage` int(11) NOT NULL,
  `datecreation` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE `paiement` (
  `idpaiement` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `modepaiement` varchar(20) NOT NULL,
  `montant` varchar(20) NOT NULL,
  `number` varchar(50) NOT NULL,
  `transactioncode` int(30) NOT NULL,
  `datepaiement` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `paiement`
--

INSERT INTO `paiement` (`idpaiement`, `iduser`, `modepaiement`, `montant`, `number`, `transactioncode`, `datepaiement`) VALUES
(1, 1, 'Lumicash', '9600', '62559966', 0, '2024-11-07 14:17:20'),
(2, 1, 'Ecocash', '120000', '78999865', 59567, '2024-11-09 17:35:31'),
(3, 1, 'Lumicash', '7000', '69852314', 7845162, '2024-11-09 18:19:41'),
(4, 1, 'Lumicash', '6500', '455555', 4341747, '2024-11-09 19:07:58'),
(5, 1, 'Lumicash', '600', '566666', 8092153, '2024-11-09 19:35:09'),
(6, 1, 'Ecocash', '125000', '78963322', 5562195, '2024-11-14 18:06:29'),
(7, 1, 'Ecocash', '125000', '78963322', 7060114, '2024-11-14 18:07:28'),
(8, 1, 'Lumicash', '75000', '65892233', 5223031, '2024-11-14 18:10:29');

-- --------------------------------------------------------

--
-- Structure de la table `paiementdev`
--

CREATE TABLE `paiementdev` (
  `idpaiement` int(11) NOT NULL,
  `iddev` int(11) NOT NULL,
  `modepaiement` varchar(20) NOT NULL,
  `montant` int(11) NOT NULL,
  `datepaiement` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

CREATE TABLE `promotion` (
  `idpromo` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `codepromo` varchar(20) NOT NULL,
  `nombreaffilier` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `promotion`
--

INSERT INTO `promotion` (`idpromo`, `iduser`, `email`, `codepromo`, `nombreaffilier`) VALUES
(1, 4, 'davidkima06@gmail.com', '38700', 0),
(2, 4, 'davidkima06@gmail.com', '20145', 0),
(3, 4, 'davidkima06@gmail.com', '90300', 0),
(4, 4, 'davidkima06@gmail.com', '76478', 0),
(5, 4, 'davidkima06@gmail.com', '67779', 0),
(6, 4, 'davidkima06@gmail.com', '16251', 0),
(7, 1, 'ndayiragijejmv1@gmail.com', '77486', 0),
(8, 1, 'ndayiragijejmv1@gmail.com', '50911', 0),
(9, 4, 'davidkima06@gmail.com', '92431', 0),
(10, 3, 'david@gmail.com', '85951', 0),
(11, 3, 'david@gmail.com', '23452', 0);

-- --------------------------------------------------------

--
-- Structure de la table `publicite`
--

CREATE TABLE `publicite` (
  `idpublicite` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idpaiement` int(11) NOT NULL,
  `typepublicite` varchar(20) NOT NULL,
  `publicite` varchar(255) NOT NULL,
  `typepaiement` varchar(20) DEFAULT NULL,
  `nombretype` int(11) DEFAULT NULL,
  `nombreclic` int(11) NOT NULL,
  `datefin` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `datedebut` datetime NOT NULL,
  `datecreation` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `publicite`
--

INSERT INTO `publicite` (`idpublicite`, `iduser`, `idpaiement`, `typepublicite`, `publicite`, `typepaiement`, `nombretype`, `nombreclic`, `datefin`, `status`, `datedebut`, `datecreation`) VALUES
(1, 1, 0, 'Video', 'Auth_Terama.mp4', 'PAR DURRE', 0, 0, '2024-04-10 00:00:00', 1, '2024-04-11 00:00:00', '2024-04-09 13:06:47'),
(2, 1, 0, 'Video', 'Auth_Terama.mp4', 'PAR DURRE', 0, 0, '2024-04-10 00:00:00', 0, '2024-04-11 00:00:00', '2024-05-09 13:06:47'),
(3, 1, 0, 'Video', 'Auth_Terama.mp4', 'PAR DURRE', 0, 0, '2024-04-04 00:00:00', 0, '2024-04-10 00:00:00', '2024-05-09 13:06:47'),
(4, 1, 0, 'Video', 'Auth_Terama.mp4', 'PAR DURRE', 0, 0, '2024-04-04 00:00:00', 0, '2024-04-10 00:00:00', '2024-05-09 13:06:47'),
(5, 1, 0, 'Photo', 'images (1).png', 'Duree', 0, 0, '2024-05-22 00:00:00', 0, '2024-05-08 00:00:00', '2024-05-09 13:06:47'),
(6, 1, 0, 'Photo', 'Edit Raw Photos & Make Them Pop In Photoshop - Camera Raw Color Grading Tutorial.mp4', 'Click', 3, 0, '2024-05-22 00:00:00', 0, '2024-05-08 00:00:00', '2024-05-09 13:06:47'),
(7, 1, 0, 'Photo', '1718010511624.jpg', 'Views', 6, 0, '0000-00-00 00:00:00', 0, '2024-06-06 00:00:00', '2024-06-10 09:08:31'),
(8, 1, 0, 'Photo', '1718010617574.jpg', 'Views', 6, 0, '0000-00-00 00:00:00', 0, '2024-06-06 00:00:00', '2024-06-10 09:10:17'),
(9, 1, 0, 'Photo', '1718019381713.jpg', 'Views', 6, 0, '0000-00-00 00:00:00', 0, '2024-06-06 00:00:00', '2024-06-10 11:36:21'),
(10, 1, 0, 'Photo', '1718019439917.jpg', 'Views', 6, 0, '0000-00-00 00:00:00', 0, '2024-06-06 00:00:00', '2024-07-01 11:37:19'),
(11, 1, 0, 'Video', '1718823620808.mp4', 'Views', 55, 0, '0000-00-00 00:00:00', 0, '2024-06-12 00:00:00', '2024-07-02 19:00:20'),
(12, 1, 0, 'Photo', '1730582580393', 'undefined', 70, 0, NULL, 0, '2024-11-07 00:00:00', '2024-11-02 21:23:00'),
(13, 1, 0, 'Photo', '1730583609967Terama.webp', 'undefined', 70, 0, NULL, 0, '2024-11-07 00:00:00', '2024-11-02 21:40:09'),
(14, 1, 0, 'Photo', '1730583674367Terama.webp', 'undefined', 70, 0, NULL, 0, '2024-11-07 00:00:00', '2024-11-02 21:41:14'),
(15, 1, 684939, 'Photo', '1731179280760application.JPG', 'undefined', 30, 0, NULL, 0, '2024-11-14 00:00:00', '2024-11-09 19:08:00'),
(16, 1, 8092153, 'Photo', '1731180910128hhhhhhhhh.jpeg', 'undefined', 2, 0, NULL, 0, '2024-11-15 00:00:00', '2024-11-09 19:35:10'),
(17, 1, 1605313, 'Photo', '1731608434637kkkkkkk.jpg', NULL, 500, 500, NULL, 0, '2024-11-22 00:00:00', '2024-11-14 18:20:34'),
(18, 1, 6287315, 'Photo', 'Dance.jpg', NULL, 800, 600, NULL, 0, '2024-11-29 00:00:00', '2024-11-14 18:24:27');

-- --------------------------------------------------------

--
-- Structure de la table `sharevideo`
--

CREATE TABLE `sharevideo` (
  `Id` int(25) NOT NULL,
  `id_user` int(25) NOT NULL,
  `email` varchar(500) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `sharevideo`
--

INSERT INTO `sharevideo` (`Id`, `id_user`, `email`, `message`) VALUES
(1, 4, 'kambireboureima3@gmail.com', 'rjnfr'),
(2, 4, 'kambireboureima3@gmail.com', 'DEZGGHNBVC ');

-- --------------------------------------------------------

--
-- Structure de la table `typefacture`
--

CREATE TABLE `typefacture` (
  `id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `prix` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `typefacture`
--

INSERT INTO `typefacture` (`id`, `type`, `prix`) VALUES
(1, 'views', 50),
(2, 'click', 100),
(3, 'sharingday', 200);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `iduser` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `Telephone` varchar(20) DEFAULT NULL,
  `motdepasse` text NOT NULL,
  `typeuser` varchar(20) NOT NULL,
  `promoCode` varchar(255) NOT NULL DEFAULT '0',
  `nomtypeuser` varchar(50) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`iduser`, `nom`, `prenom`, `email`, `Telephone`, `motdepasse`, `typeuser`, `promoCode`, `nomtypeuser`, `admin`, `active`, `create_at`) VALUES
(1, 'NDAYIRAGIJE', 'JMVianney', 'ndayiragijejmv1@gmail.com', '', '$2a$10$GKq3YIlCRCdOK28CNwhaYem4aRQYe4Th.c3NWFvHzRjX9RWy5NZVu', 'partenaire', '0', NULL, 1, 1, '2024-11-10 08:19:52'),
(2, 'NKURUNZIZA', 'Jean De Dieu', 'nkurunziza@gmail.com', '68335282', '$2a$10$0RzXnA3kn.5cKnlyFKPEiOTX3v724GwWVwdzuYW9a6o/jGdgI3n3.', 'artist', '0', NULL, 0, 1, '2024-10-10 09:58:08'),
(3, 'lmd', 'Emmanuel gahiga', 'david@gmail.com', '+25790785634', '$2a$10$i0XlMbXl4cI8h4B4FAQlueZ3v6//C0y5Mw3DejzkSp18bNic9t31u', 'partenaire', '0', NULL, 0, 1, '2024-10-10 09:58:08'),
(4, 'lmd', 'Emmanuel gahiga', 'davidkima06@gmail.com', '+257095678', '$2a$10$KgeMO8G.zxU0w1hpan4EReZePgLCbTSk4Mft378xB75tOnvZWEOtK', 'partenaire', '0', NULL, 0, 1, '2024-10-10 09:58:08');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `developpement`
--
ALTER TABLE `developpement`
  ADD PRIMARY KEY (`iddev`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`idmessage`);

--
-- Index pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`idpaiement`);

--
-- Index pour la table `paiementdev`
--
ALTER TABLE `paiementdev`
  ADD PRIMARY KEY (`idpaiement`);

--
-- Index pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`idpromo`);

--
-- Index pour la table `publicite`
--
ALTER TABLE `publicite`
  ADD PRIMARY KEY (`idpublicite`);

--
-- Index pour la table `sharevideo`
--
ALTER TABLE `sharevideo`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `typefacture`
--
ALTER TABLE `typefacture`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(36) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `developpement`
--
ALTER TABLE `developpement`
  MODIFY `iddev` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `idmessage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `paiement`
--
ALTER TABLE `paiement`
  MODIFY `idpaiement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `idpromo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `publicite`
--
ALTER TABLE `publicite`
  MODIFY `idpublicite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `sharevideo`
--
ALTER TABLE `sharevideo`
  MODIFY `Id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `typefacture`
--
ALTER TABLE `typefacture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
