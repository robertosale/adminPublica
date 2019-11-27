create schema Administracion;

use Administracion;

CREATE TABLE Agente (
    idAgente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CUIL DOUBLE NOT NULL,
    DNI INT NOT NULL,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    direccion VARCHAR(70),
    telefono DOUBLE,
    antiguedad INT
);

drop table Agente;

/*
create table HoraExtra(
fecha DATE NOT NULL,
idAgente INT,
cantidadHorasExtras INT,
PRIMARY KEY(fecha),
FOREIGN KEY(idAgente) REFERENCES Agente(idAgente)
);

create table Titulo(
idTitulo int not null auto_increment,
tipoTitulo varchar(45),
idAgente INT,
primary key(idTitulo),
foreign key(idAgente) references Agente(idAgente)
);

create table Puesto(
idpuesto int not null auto_increment,
fechaDecreto Date,
numeroDecreto int,
nombrePuesto varchar(45),
fechaInicio DATE,
fechaFin DATE,
idCategoria INT
);
*/

insert into Agente values(1,20341324417,'Roberto','Sale','Corrientes 689',4219210,7);

insert into Agente(cuil,dni,nombre,apellido,direccion,telefono,antiguedad) values(20341324417,34132441,'Roberto','Sale','Corrientes 689',4219210,7);

select * from Agente;

