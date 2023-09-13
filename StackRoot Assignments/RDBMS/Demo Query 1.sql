CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
	second_name VARCHAR(50),
    email VARCHAR(100),
    birthdate DATE
);

INSERT INTO employees(first_name,second_name,email,birthdate)
VALUES ('Som','Doe','som78@example.com','1998-07-17');

SELECT * FROM employees;

INSERT INTO employees(first_name,second_name,email,birthdate)
VALUES ('Jack','Long','jacklo@example.com','1999-07-12');

INSERT INTO employees(first_name,second_name,email,birthdate)
VALUES ('ivy','lake','ivylake@example.com','1998-10-10');

SELECT first_name,second_name FROM employees;

UPDATE employees
SET email = ' som9012jake@example.com'
where id = 1;

SELECT email FROM employees;

DELETE FROM employees
WHERE id = 1;
