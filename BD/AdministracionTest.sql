create schema AdministracionTest;

use AdministracionTest;

CREATE TABLE Agente (
    idAgente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CUIL DOUBLE NOT NULL,
    DNI INT NOT NULL,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    direccion VARCHAR(70),
    antiguedad INT
);