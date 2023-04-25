CREATE TABLE products
(
  codigo int NOT NULL,
  nombre varchar (150) NOT NULL,
  sabor varchar (150) NOT NULL,
  tamano varchar (150) NOT NULL,
  adicional varchar (150) NOT NULL,
  precio double NOT NULL,
  createdAt date,
  updatedAt date,
  PRIMARY KEY (codigo)
);	