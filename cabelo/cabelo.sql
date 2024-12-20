-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/12/2024 às 04:30
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cabelo`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cabeleiro`
--

CREATE TABLE `cabeleiro` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cabeleiro`
--

INSERT INTO `cabeleiro` (`ID`, `NOME`) VALUES
(13, 'Dorte'),
(14, 'Lucas'),
(15, 'Pedro'),
(16, 'Binicius'),
(17, 'Youtube'),
(19, 'Thomas');

-- --------------------------------------------------------

--
-- Estrutura para tabela `reserva`
--

CREATE TABLE `reserva` (
  `ID` int(11) NOT NULL,
  `USER` varchar(255) NOT NULL,
  `ID_CABELEIRO` int(11) NOT NULL,
  `DATA` varchar(10) NOT NULL,
  `HORA` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `reserva`
--

INSERT INTO `reserva` (`ID`, `USER`, `ID_CABELEIRO`, `DATA`, `HORA`) VALUES
(70, 'Durte', 13, '2024-12-03', '06:56:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(100) NOT NULL,
  `TELEFONE` varchar(15) NOT NULL,
  `EMAIL` varchar(250) NOT NULL,
  `SENHA` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user`
--

INSERT INTO `user` (`ID`, `NOME`, `TELEFONE`, `EMAIL`, `SENHA`) VALUES
(1, 'Vinícius Duarte Alexandre', '(14) 99786-5460', 'cacetapintomaster@gmail.com', 'cacetapintomaster'),
(2, 'Vinícius Oliveira Santana', '(14) 99786-5460', 'oliveirasantanavinicius@gmail.com', 'vini9000'),
(3, 'Ana Carolina dos Santos Ferraz', '(14) 99999-9999', 'anacarol@gmail.com', '123456'),
(4, 'Márcio Marroco Meliodaz', '(14) 00000-0000', 'mmm@gmail.com', '1m2m3m4m');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cabeleiro`
--
ALTER TABLE `cabeleiro`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CABELEIRO` (`ID_CABELEIRO`);

--
-- Índices de tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cabeleiro`
--
ALTER TABLE `cabeleiro`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de tabela `reserva`
--
ALTER TABLE `reserva`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `CABELEIRO` FOREIGN KEY (`ID_CABELEIRO`) REFERENCES `cabeleiro` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
