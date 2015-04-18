DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  username varchar(20),
  PRIMARY KEY (username)
);

CREATE TABLE messages (
  id int,
  text varchar(255),
  username varchar(20),
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES users (username)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

