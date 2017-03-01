# Host: localhost  (Version: 5.5.40)
# Date: 2016-11-21 01:49:12
# Generator: MySQL-Front 5.3  (Build 4.120)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "clothes"
#

DROP TABLE IF EXISTS `clothes`;
CREATE TABLE `clothes` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `cImg` varchar(255) DEFAULT NULL,
  `cName` varchar(255) DEFAULT NULL,
  `nowPrice` float DEFAULT NULL,
  `prevPrice` float DEFAULT NULL,
  `addTime` date DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=34433 DEFAULT CHARSET=utf8;

#
# Data for table "clothes"
#

/*!40000 ALTER TABLE `clothes` DISABLE KEYS */;
INSERT INTO `clothes` VALUES (1,'1.jpg','Jasonwood坚持我的短款经典纯色百搭女羽绒服442114002',249,799,'2016-11-17'),(2,'2.jpg','Jasonwood/坚持我的女式闪耀拼接袖棒球服外套352108199',479,799,'2016-11-17'),(3,'3.jpg','Jasonwood/坚持我的百搭拼接女棒球卫衣外套442108401',229,899,'2016-11-17'),(4,'4.jpg','Jasonwood/坚持我的女士秋季套头卫衣452106007',199,399,'2016-11-17'),(5,'5.jpg','JASONWOOD/坚持我的女士百搭拼接棒球卫衣外套442108401',229,899,'2016-11-17'),(6,'6.jpg','Jasonwood短款加厚棉服百搭纯色装饰口袋女羽绒服442114302',499,999,'2016-11-17'),(7,'7.jpg','JASONWOOD/坚持我的女士时尚衬衣面料拼接卫衣152106001',139,349,'2016-11-17'),(8,'8.jpg','【自营】DOLCE&GABBANA JUNIOR杜嘉班纳灰色混合材质编织元素女童外套，GIRL，COAT，L5EK62，LK100，S9000,6',2233,7422,'2016-11-17'),(9,'9.jpg','【自营】MONNALISA蒙娜丽莎粉色涤纶材质车缝线元素甜美女童外套 198102F1 8013 0091 9',1885,2356,'2016-11-17'),(10,'10.jpg','【自营】MONNALISA蒙娜丽莎灰色混合材质甜美女童立领外套 198110 8060 0032 10',970,2654,'2016-11-17'),(11,'11.jpg','【自营】DOLCE&GABBANA JUNIOR杜嘉班纳黑色混合材质花朵装饰女童外套，GIRL，COAT，L5EK30，LK098，N0000,6',2796,9292,'2016-11-17'),(12,'12.jpg','I LOVE CHOC穿绳卫衣-10263113664M-粉色06-M102631136',500.7,569,'2016-11-17'),(13,'13.jpg','初语 2016冬季新款格纹拼接卫衣套头涂鸦宽松卫衣8630521011',168,449,'2016-11-17'),(14,'14.jpg','海贝 蕾丝拼接PU短装皮衣E4T01B266302',49,369,'2016-11-17'),(15,'15.jpg','海贝 立体提花纯色长袖风衣E4R01A101345',69,499,'2016-11-17'),(16,'16.jpg','CRZ羽绒外套CDJ4R291',850,1699,'2016-11-21'),(17,'17.jpg','2016冬季新品大码女装欧美高端短款羽绒服女式加厚外套',778,1888,'2016-11-21'),(18,'18.jpg','HiPanda 你好熊猫 女衬衫0151322074',698,698,'2016-11-21'),(19,'19.jpg','HiPanda 你好熊猫 女衬衫0153322332',698,698,'2016-11-21'),(20,'20.jpg','HIPANDA女衬衫0163322694',1080,1080,'2016-11-21'),(21,'21.jpg','ANDREWMARC2016秋冬女士中长款双门襟保暖羽绒服外套TW6CH538',719,2900,'2016-11-21'),(22,'22.jpg','希梵仕冬日里的阳光黑色羽绒服XY15C1906H',239,499,'2016-11-21'),(23,'23.jpg','Girlline格子廊 2016冬季新款百搭狐狸毛领保暖羽绒服',1999,3990,'2016-11-21'),(24,'24.jpg','古木夕羊/GMXY2016秋冬女装点绣收腰羽绒服X257108',679,1699,'2016-11-21'),(25,'25.jpg','Girlline格子廊 2016冬装新款翻领长袖中长款毛呢外套',199,1760,'2016-11-21');
/*!40000 ALTER TABLE `clothes` ENABLE KEYS */;
