-- MySQL dump 10.13  Distrib 5.5.40, for Win32 (x86)
--
-- Host: localhost    Database: commend
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
-- Table structure for table `clothes`
--

DROP TABLE IF EXISTS `clothes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clothes` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `cImg` varchar(255) DEFAULT NULL,
  `cName` varchar(255) DEFAULT NULL,
  `nowPrice` float DEFAULT NULL,
  `prevPrice` float DEFAULT NULL,
  `addTime` date DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=115 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clothes`
--

LOCK TABLES `clothes` WRITE;
/*!40000 ALTER TABLE `clothes` DISABLE KEYS */;
INSERT INTO `clothes` VALUES (15,'new1.jpg','Jasonwood坚持我的短款经典纯色百搭女羽绒服442114002',249,799,'2016-11-17'),(14,'new2.jpg','Jasonwood/坚持我的女式闪耀拼接袖棒球服外套352108199',479,799,'2016-11-17'),(13,'new3.jpg','Jasonwood/坚持我的百搭拼接女棒球卫衣外套442108401',229,899,'2016-11-17'),(12,'new4.jpg','Jasonwood/坚持我的女士秋季套头卫衣452106007',199,399,'2016-11-17'),(11,'new5.jpg','JASONWOOD/坚持我的女士百搭拼接棒球卫衣外套442108401',229,899,'2016-11-17'),(10,'new6.jpg','Jasonwood短款加厚棉服百搭纯色装饰口袋女羽绒服442114302',499,999,'2016-11-17'),(9,'new7.jpg','JASONWOOD/坚持我的女士时尚衬衣面料拼接卫衣152106001',139,349,'2016-11-17'),(8,'new8.jpg','【自营】DOLCE&GABBANA JUNIOR杜嘉班纳灰色混合材质编织元素女童外套，GIRL，COAT，L5EK62，LK100，S9000,6',2233,7422,'2016-11-17'),(7,'new9.jpg','【自营】MONNALISA蒙娜丽莎粉色涤纶材质车缝线元素甜美女童外套 198102F1 8013 0091 9',1885,2356,'2016-11-17'),(6,'new10.jpg','【自营】MONNALISA蒙娜丽莎灰色混合材质甜美女童立领外套 198110 8060 0032 10',970,2654,'2016-11-17'),(5,'new11.jpg','【自营】DOLCE&GABBANA JUNIOR杜嘉班纳黑色混合材质花朵装饰女童外套，GIRL，COAT，L5EK30，LK098，N0000,6',2796,9292,'2016-11-17'),(4,'new12.jpg','I LOVE CHOC穿绳卫衣-10263113664M-粉色06-M102631136',500.7,569,'2016-11-17'),(3,'new13.jpg','初语 2016冬季新款格纹拼接卫衣套头涂鸦宽松卫衣8630521011',168,449,'2016-11-17'),(2,'new14.jpg','海贝 蕾丝拼接PU短装皮衣E4T01B266302',49,369,'2016-11-17'),(1,'new15.jpg','海贝 立体提花纯色长袖风衣E4R01A101345',69,499,'2016-11-17');
/*!40000 ALTER TABLE `clothes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-18 12:27:03
