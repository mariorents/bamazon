CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock INT default 0,
  PRIMARY KEY (id)
);  

INSERT INTO products (item_name, department, price, stock)
values ("White T-Shirt", "Clothing", 2.50, 10), ("Levi's Jeans", "Clothing", 18.75, 5), ("Nike Ball Cap", "Headwear", 5.50, 0),
("Air Force 1's - Size 10.5", "Shoes", 55.00, 15), ("Black T-Shirt", "Clothing", 5.00, 1), ("Socks", "Clothing", 2.75, 3), 
("Tang-Top", "Clothing", 1.50, 12), ("Bandana", "Clothing", 2.00, 5), ("Men's Belt - 32in Waist", 15.00, 20),
("Mens Boxer Briefs - 3 Pack", "Clothing", 15.75, 15);


