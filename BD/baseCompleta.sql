-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Administracion
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Agente`
--

DROP TABLE IF EXISTS `Agente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Agente` (
  `idAgente` int(11) NOT NULL AUTO_INCREMENT,
  `idPuesto` int(11) NOT NULL,
  `idReparticion` int(11) NOT NULL,
  `CUIL` double NOT NULL,
  `DNI` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `direccion` varchar(70) DEFAULT NULL,
  `antiguedad` int(11) DEFAULT '0',
  `estado` varchar(20) DEFAULT 'Transitorio',
  `telefono` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idAgente`,`idPuesto`,`idReparticion`),
  KEY `idPuesto` (`idPuesto`),
  KEY `idReparticion` (`idReparticion`),
  CONSTRAINT `Agente_ibfk_1` FOREIGN KEY (`idPuesto`) REFERENCES `Puesto` (`idPuesto`),
  CONSTRAINT `Agente_ibfk_2` FOREIGN KEY (`idReparticion`) REFERENCES `Reparticion` (`idReparticion`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Agente`
--

LOCK TABLES `Agente` WRITE;
/*!40000 ALTER TABLE `Agente` DISABLE KEYS */;
INSERT INTO `Agente` VALUES (1,1,1,20341324417,34132441,'Roberto','Sale','03816900076',0,'Transitorio','03816900076'),(2,2,2,93943242352,34132441,'Pierino','Juncos','Laprida 3434',5,'Transitorio','333333333'),(3,4,3,27211393534,21139353,'Claudia','Cabrera','Ej del norte 256',3,'Contratado','4444444');
/*!40000 ALTER TABLE `Agente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Departamento`
--

DROP TABLE IF EXISTS `Departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Departamento` (
  `idDepartamento` int(11) NOT NULL AUTO_INCREMENT,
  `jefe` int(11) DEFAULT NULL,
  `nombre` varchar(80) DEFAULT NULL,
  `interno` int(11) DEFAULT NULL,
  PRIMARY KEY (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departamento`
--

LOCK TABLES `Departamento` WRITE;
/*!40000 ALTER TABLE `Departamento` DISABLE KEYS */;
INSERT INTO `Departamento` VALUES (1,NULL,'Gerencia',777),(2,NULL,'Administracion',777);
/*!40000 ALTER TABLE `Departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Familiar`
--

DROP TABLE IF EXISTS `Familiar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Familiar` (
  `idFamiliar` int(11) NOT NULL AUTO_INCREMENT,
  `idAgente` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `DNI` int(11) DEFAULT NULL,
  `esConyuge` tinyint(1) DEFAULT NULL,
  `edad` int(11) DEFAULT '0',
  PRIMARY KEY (`idFamiliar`,`idAgente`),
  KEY `idAgente` (`idAgente`),
  CONSTRAINT `Familiar_ibfk_1` FOREIGN KEY (`idAgente`) REFERENCES `Agente` (`idAgente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Familiar`
--

LOCK TABLES `Familiar` WRITE;
/*!40000 ALTER TABLE `Familiar` DISABLE KEYS */;
INSERT INTO `Familiar` VALUES (1,2,'Adrian','Juncos',3222222,0,3),(2,2,'AAAA','DDDDD',333333,1,5),(3,3,'Chuli','Flores',94949494,0,16),(4,3,'Roque','Flores',94949494,1,49);
/*!40000 ALTER TABLE `Familiar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Horasextra`
--

DROP TABLE IF EXISTS `Horasextra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Horasextra` (
  `idHorasextra` int(11) NOT NULL AUTO_INCREMENT,
  `idAgente` int(11) NOT NULL,
  `fecha` varchar(10) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`idHorasextra`,`idAgente`),
  KEY `idAgente` (`idAgente`),
  CONSTRAINT `Horasextra_ibfk_1` FOREIGN KEY (`idAgente`) REFERENCES `Agente` (`idAgente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Horasextra`
--

LOCK TABLES `Horasextra` WRITE;
/*!40000 ALTER TABLE `Horasextra` DISABLE KEYS */;
INSERT INTO `Horasextra` VALUES (1,2,'undefined',5);
/*!40000 ALTER TABLE `Horasextra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Inasistencia`
--

DROP TABLE IF EXISTS `Inasistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Inasistencia` (
  `idInasistencia` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` varchar(10) DEFAULT NULL,
  `tipo` varchar(15) DEFAULT NULL,
  `idAgente` int(11) NOT NULL,
  PRIMARY KEY (`idInasistencia`,`idAgente`),
  KEY `idAgente` (`idAgente`),
  CONSTRAINT `Inasistencia_ibfk_1` FOREIGN KEY (`idAgente`) REFERENCES `Agente` (`idAgente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Inasistencia`
--

LOCK TABLES `Inasistencia` WRITE;
/*!40000 ALTER TABLE `Inasistencia` DISABLE KEYS */;
INSERT INTO `Inasistencia` VALUES (1,'2019-12-04','Llegada Tarde',2),(2,'2019-12-07','Llegada Tarde',2),(3,'2019-12-07','Llegada Tarde',2),(4,'2019-12-02','Llegada Tarde',3),(5,'2019-12-02','Llegada Tarde',3);
/*!40000 ALTER TABLE `Inasistencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Licencia`
--

DROP TABLE IF EXISTS `Licencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Licencia` (
  `idLicencia` int(11) NOT NULL AUTO_INCREMENT,
  `idAgente` int(11) NOT NULL,
  `fecha` varchar(10) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `razon` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`idLicencia`,`idAgente`),
  KEY `idAgente` (`idAgente`),
  CONSTRAINT `Licencia_ibfk_1` FOREIGN KEY (`idAgente`) REFERENCES `Agente` (`idAgente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Licencia`
--

LOCK TABLES `Licencia` WRITE;
/*!40000 ALTER TABLE `Licencia` DISABLE KEYS */;
INSERT INTO `Licencia` VALUES (1,3,'2019-12-01',20,'Enfermedad');
/*!40000 ALTER TABLE `Licencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Puesto`
--

DROP TABLE IF EXISTS `Puesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Puesto` (
  `idPuesto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `numeroDecreto` int(11) DEFAULT NULL,
  `fecha` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idPuesto`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Puesto`
--

LOCK TABLES `Puesto` WRITE;
/*!40000 ALTER TABLE `Puesto` DISABLE KEYS */;
INSERT INTO `Puesto` VALUES (1,'Jefe',22456,'2019-12-01'),(2,'Administrador',22456,'2019-12-05'),(3,'Conserje',45151,'2019-12-01'),(4,'Cocinera',5454,'2019-12-03');
/*!40000 ALTER TABLE `Puesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reparticion`
--

DROP TABLE IF EXISTS `Reparticion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reparticion` (
  `idReparticion` int(11) NOT NULL AUTO_INCREMENT,
  `idDepartamento` int(11) NOT NULL,
  `nombre` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`idReparticion`,`idDepartamento`),
  KEY `idDepartamento` (`idDepartamento`),
  CONSTRAINT `Reparticion_ibfk_1` FOREIGN KEY (`idDepartamento`) REFERENCES `Departamento` (`idDepartamento`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reparticion`
--

LOCK TABLES `Reparticion` WRITE;
/*!40000 ALTER TABLE `Reparticion` DISABLE KEYS */;
INSERT INTO `Reparticion` VALUES (1,1,'Direccion de Espacios Publicos'),(2,1,'Celulares'),(3,1,'Los pollos');
/*!40000 ALTER TABLE `Reparticion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Titulo`
--

DROP TABLE IF EXISTS `Titulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Titulo` (
  `idTitulo` int(11) NOT NULL AUTO_INCREMENT,
  `idAgente` int(11) NOT NULL,
  `nombreTitulo` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`idTitulo`,`idAgente`),
  KEY `idAgente` (`idAgente`),
  CONSTRAINT `Titulo_ibfk_1` FOREIGN KEY (`idAgente`) REFERENCES `Agente` (`idAgente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Titulo`
--

LOCK TABLES `Titulo` WRITE;
/*!40000 ALTER TABLE `Titulo` DISABLE KEYS */;
INSERT INTO `Titulo` VALUES (1,2,'Ingeniero en Computación'),(2,3,'Maestra Chacinera');
/*!40000 ALTER TABLE `Titulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `vistaEmpleado`
--

DROP TABLE IF EXISTS `vistaEmpleado`;
/*!50001 DROP VIEW IF EXISTS `vistaEmpleado`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vistaEmpleado` AS SELECT 
 1 AS `idAgente`,
 1 AS `empleadoApellido`,
 1 AS `empleadoNombre`,
 1 AS `DNI`,
 1 AS `CUIL`,
 1 AS `direccion`,
 1 AS `telefono`,
 1 AS `estado`,
 1 AS `antiguedad`,
 1 AS `puestoNombre`,
 1 AS `numeroDecreto`,
 1 AS `puestoFecha`,
 1 AS `nombreReparticion`,
 1 AS `interno`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vistaFinal`
--

DROP TABLE IF EXISTS `vistaFinal`;
/*!50001 DROP VIEW IF EXISTS `vistaFinal`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vistaFinal` AS SELECT 
 1 AS `nombreReparticion`,
 1 AS `nombreDepartamento`,
 1 AS `jefeApellido`,
 1 AS `jefeNombre`,
 1 AS `telefono`,
 1 AS `idReparticion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vistaJefe`
--

DROP TABLE IF EXISTS `vistaJefe`;
/*!50001 DROP VIEW IF EXISTS `vistaJefe`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vistaJefe` AS SELECT 
 1 AS `idDepartamento`,
 1 AS `nombreReparticion`,
 1 AS `nombreDepartamento`,
 1 AS `jefeApellido`,
 1 AS `jefeNombre`,
 1 AS `telefono`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vistaLicencia`
--

DROP TABLE IF EXISTS `vistaLicencia`;
/*!50001 DROP VIEW IF EXISTS `vistaLicencia`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vistaLicencia` AS SELECT 
 1 AS `fecha`,
 1 AS `cantidad`,
 1 AS `razon`,
 1 AS `idAgente`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vistaReparticion`
--

DROP TABLE IF EXISTS `vistaReparticion`;
/*!50001 DROP VIEW IF EXISTS `vistaReparticion`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vistaReparticion` AS SELECT 
 1 AS `idReparticion`,
 1 AS `idDepartamento`,
 1 AS `nombreReparticion`,
 1 AS `nombreDepartamento`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vistaEmpleado`
--

/*!50001 DROP VIEW IF EXISTS `vistaEmpleado`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaEmpleado` AS select `Agente`.`idAgente` AS `idAgente`,`Agente`.`apellido` AS `empleadoApellido`,`Agente`.`nombre` AS `empleadoNombre`,`Agente`.`DNI` AS `DNI`,`Agente`.`CUIL` AS `CUIL`,`Agente`.`direccion` AS `direccion`,`Agente`.`telefono` AS `telefono`,`Agente`.`estado` AS `estado`,`Agente`.`antiguedad` AS `antiguedad`,`Puesto`.`nombre` AS `puestoNombre`,`Puesto`.`numeroDecreto` AS `numeroDecreto`,`Puesto`.`fecha` AS `puestoFecha`,`Reparticion`.`nombre` AS `nombreReparticion`,`Departamento`.`interno` AS `interno` from (((`Agente` join `Reparticion` on((`Agente`.`idReparticion` = `Reparticion`.`idReparticion`))) join `Departamento` on((`Departamento`.`idDepartamento` = `Reparticion`.`idDepartamento`))) join `Puesto` on((`Puesto`.`idPuesto` = `Agente`.`idPuesto`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaFinal`
--

/*!50001 DROP VIEW IF EXISTS `vistaFinal`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaFinal` AS select `vistaReparticion`.`nombreReparticion` AS `nombreReparticion`,`vistaReparticion`.`nombreDepartamento` AS `nombreDepartamento`,`vistaJefe`.`jefeApellido` AS `jefeApellido`,`vistaJefe`.`jefeNombre` AS `jefeNombre`,`vistaJefe`.`telefono` AS `telefono`,`vistaReparticion`.`idReparticion` AS `idReparticion` from (`vistaReparticion` left join `vistaJefe` on((`vistaReparticion`.`idDepartamento` = `vistaJefe`.`idDepartamento`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaJefe`
--

/*!50001 DROP VIEW IF EXISTS `vistaJefe`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaJefe` AS select `Reparticion`.`idDepartamento` AS `idDepartamento`,`Reparticion`.`nombre` AS `nombreReparticion`,`Departamento`.`nombre` AS `nombreDepartamento`,`Agente`.`apellido` AS `jefeApellido`,`Agente`.`nombre` AS `jefeNombre`,`Agente`.`telefono` AS `telefono` from (((`Reparticion` join `Departamento` on((`Departamento`.`idDepartamento` = `Reparticion`.`idDepartamento`))) join `Agente` on((`Agente`.`idReparticion` = `Reparticion`.`idReparticion`))) join `Puesto` on((`Agente`.`idPuesto` = `Puesto`.`idPuesto`))) where (`Puesto`.`nombre` = 'Jefe') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaLicencia`
--

/*!50001 DROP VIEW IF EXISTS `vistaLicencia`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaLicencia` AS select `Licencia`.`fecha` AS `fecha`,`Licencia`.`cantidad` AS `cantidad`,`Licencia`.`razon` AS `razon`,`Licencia`.`idAgente` AS `idAgente` from (`Agente` join `Licencia` on((`Agente`.`idAgente` = `Licencia`.`idAgente`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaReparticion`
--

/*!50001 DROP VIEW IF EXISTS `vistaReparticion`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaReparticion` AS select `Reparticion`.`idReparticion` AS `idReparticion`,`Departamento`.`idDepartamento` AS `idDepartamento`,`Reparticion`.`nombre` AS `nombreReparticion`,`Departamento`.`nombre` AS `nombreDepartamento` from (`Reparticion` join `Departamento` on((`Departamento`.`idDepartamento` = `Reparticion`.`idDepartamento`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-03 11:27:43
