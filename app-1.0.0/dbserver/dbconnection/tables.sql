CREATE TABLE `db1`.`students` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `RegistrationId` INT NOT NULL,
  `Firstname` VARCHAR(100) NOT NULL,
  `Surname` VARCHAR(100) NOT NULL,
  `Gender` VARCHAR(50) NOT NULL,
  `Dateofbirth` VARCHAR(50) NOT NULL,
  `Guardians` VARCHAR(200) NOT NULL,
  `Contact` VARCHAR(50) NOT NULL,
  `Address` VARCHAR(100) NOT NULL,
  `Email` VARCHAR(100) NULL,
  PRIMARY KEY (`ID`));


INSERT INTO `db1`.`students` (`RegistrationId`, `Firstname`, `Surname`, `Gender`, `Dateofbirth`, `Guardians`, `Contact`, `Address`) VALUES ('10001', 'Ashish', 'Sapkota', 'Male', '2055-12-19', 'Bishnu Kumar Sapkota', '9819276566,9845197071', 'Bharatpur-10');
INSERT INTO `db1`.`students` (`RegistrationId`, `Firstname`, `Surname`, `Gender`, `Dateofbirth`, `Guardians`, `Contact`, `Address`) VALUES ('10002', 'Bijay', 'Gurung', 'Male', '2055-03-28', 'Yogya Bdr. Gurung', '9824277417', 'Bharatpur-2');
INSERT INTO `db1`.`students` (`RegistrationId`, `Firstname`, `Surname`, `Gender`, `Dateofbirth`, `Guardians`, `Contact`, `Address`) VALUES ('10003', 'Rakesh', 'Gyawali', 'Male', '2054-01-01', 'Mr. Gyawali', '1234567890', 'Bharatpur-11');
