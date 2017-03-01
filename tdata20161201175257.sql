-- MySQL dump 10.13  Distrib 5.5.40, for Win32 (x86)
--
-- Host: localhost    Database: tdata
-- ------------------------------------------------------
-- Server version	5.5.40

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
-- Table structure for table `info`
--

DROP TABLE IF EXISTS `info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `info` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `coupon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info`
--

LOCK TABLES `info` WRITE;
/*!40000 ALTER TABLE `info` DISABLE KEYS */;
INSERT INTO `info` VALUES (1,'100.webp','优惠券￥30'),(2,'101.webp','关注人数276'),(3,'102.webp','关注人数21.5万'),(4,'103.webp','关注人数2.2万'),(5,'104.webp','优惠券￥50'),(6,'105.webp','关注人数9.9万'),(7,'106.webp','优惠券￥50'),(8,'107.webp','优惠券￥100'),(9,'108.webp','优惠券￥50'),(10,'109.webp','优惠券￥40'),(11,'110.webp','关注人数133.9万'),(12,'111.webp','优惠券￥50'),(13,'112.webp','优惠券￥50'),(14,'113.webp','优惠券￥50'),(15,'114.webp','优惠券￥200'),(16,'115.webp','关注人数17.8万'),(17,'116.webp','关注人数9.4万'),(18,'117.webp','优惠券50'),(19,'118.webp','优惠券￥50'),(20,'119.webp','关注人数6.5万'),(21,'120.webp','关注人数8.6万'),(22,'121.webp','关注人数81.6万'),(23,'122.webp','关注人数2315'),(24,'123.webp','优惠群￥10'),(25,'124.webp','关注人数4.7万'),(26,'125.webp','关注人数81.1万'),(27,'126.webp','关注人数6257'),(28,'127.webp','关注人数6.7万'),(29,'128.webp','优惠券￥20'),(30,'129.webp','关注人数9518'),(31,'130.webp','关注人数9.0万'),(32,'131.webp','关注人数29.3万'),(33,'132.webp','优惠券￥5'),(34,'133.webp','关注人数12.1万'),(35,'134.webp','优惠券￥10'),(36,'135.webp','优惠券￥100'),(37,'136.webp','优惠券￥100'),(38,'137.webp','优惠券￥50'),(39,'138.webp','优惠券￥200'),(40,'139.webp','优惠券￥10'),(41,'140.webp','优惠券￥50'),(42,'141.webp','关注人数18.3万'),(43,'142.webp','关注人数3.9万'),(44,'143.webp','关注人数274.1万'),(45,'144.webp','优惠券￥40'),(46,'145.webp','优惠券￥15'),(47,'146.webp','优惠券￥30'),(48,'147.webp','优惠券￥100'),(49,'148.webp','关注人数27.7万'),(50,'149.webp','优惠券￥100'),(51,'150.webp','关注人数15.1万'),(52,'151.webp','关注人数1.6万'),(53,'152.webp','关注人数693'),(54,'153.webp','关注人数34.0万'),(55,'154.webp','关注人数37.2万'),(56,'155.webp','关注人数13.8万'),(57,'156.webp','优惠券￥100'),(58,'157.webp','关注人数21.6万'),(59,'158.webp','关注人数73.7万'),(60,'159.webp','关注人数92.7万'),(61,'160.webp','优惠券￥100'),(62,'161.webp','优惠券￥80'),(63,'162.webp','优惠券￥100'),(64,'163.webp','关注人数1.2万'),(65,'164.webp','关注人数1.2万'),(66,'165.webp','优惠券￥50'),(67,'166.webp','关注人数1.2万'),(68,'167.webp','关注人数8240'),(69,'168.webp','优惠券￥150');
/*!40000 ALTER TABLE `info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-01 17:52:59
