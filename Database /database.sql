CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(100),
password VARCHAR(100),
role VARCHAR(20)
);

CREATE TABLE products(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
price DECIMAL(10,2)
);

CREATE TABLE orders(
id INT PRIMARY KEY AUTO_INCREMENT,
userId INT,
totalAmount DECIMAL(10,2),
FOREIGN KEY(userId) REFERENCES users(id)
);

INSERT INTO products(name,price)
VALUES
('Laptop',50000),
('Mobile',20000),
('Headphones',3000);
