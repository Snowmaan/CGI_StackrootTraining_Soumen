CREATE TABLE Product (
    ID INT AUTO_INCREMENT PRIMARY KEY,
	Product_Name VARCHAR(50),
    Price INT(4),
    ManuFact_Date DATE,
    Expiry_Date DATE,
    Brand VARCHAR(50)
);

INSERT INTO Product (Product_Name,Price,ManuFact_Date,Expiry_Date,Brand)
VALUES ('CornFlakes','100','2023-08-23','2024-08-23','Kellogs'),
 ('Cake','400','2023-08-23','2023-08-25','MioAmore'),
  ('Chips','20','2023-08-23','2023-10-25','Lays'),
  ('SoftDrink','40','2023-08-23','2023-12-15','CocaCola'),
 ('Notebook','100','2023-08-23','2026-08-25','Classmate');
 
 SELECT * FROM product;
 
UPDATE product
SET Price = ' 470'
where id = 2;

SELECT * FROM product;
 
DELETE FROM product
WHERE id = 5;

SELECT * FROM product;
 