# Host: localhost  (Version: 5.5.40)
# Date: 2016-12-12 17:22:53
# Generator: MySQL-Front 5.3  (Build 4.120)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(15) NOT NULL,
  `password` char(32) NOT NULL,
  `sex` char(4) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Tina','123456',NULL),(3,'Amy','156',NULL),(4,'Tom','321','男'),(5,'Alice','950108','女'),(6,'Andy','963258741','男'),(7,'xiaoming','e10adc3949ba59abbe56e057f20f883e',NULL),(8,'Cindy','e10adc3949ba59abbe56e057f20f883e',NULL),(9,'Bob','e10adc3949ba59abbe56e057f20f883e',NULL),(10,'Dive','e10adc3949ba59abbe56e057f20f883e',NULL),(11,'Ed','e10adc3949ba59abbe56e057f20f883e',NULL),(12,'Gin','502e4a16930e414107ee22b6198c578f','男'),(13,'Abc','202cb962ac59075b964b07152d234b70','女'),(14,'sss','698d51a19d8a121ce581499d7b701668','男'),(15,'123456','202cb962ac59075b964b07152d234b70','男'),(16,'p','83878c91171338902e0fe0fb97a8c47a','女'),(17,'111','698d51a19d8a121ce581499d7b701668','女');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
