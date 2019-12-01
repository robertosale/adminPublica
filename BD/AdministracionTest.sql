create schema AdministracionTest;

use AdministracionTest;


drop table Agente;
CREATE TABLE Agente (
    idAgente INT NOT NULL AUTO_INCREMENT,
    idPuesto int,
    idReparticion int,
    CUIL DOUBLE NOT NULL,
    DNI INT NOT NULL,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    direccion VARCHAR(70),
    antiguedad INT,
    estado VARCHAR(20),
    primary key(idAgente,idPuesto,idReparticion),
    foreign key(idPuesto) references Puesto(idPuesto),
    foreign key(idReparticion) references Reparticion(idReparticion)
    
);



drop table Inasistencia;

create table Inasistencia(
	idInasistencia int not null auto_increment ,
    fecha varchar(10),
    tipo varchar(15),
    idAgente int,
    primary key (idInasistencia,idAgente),
    foreign key(idAgente) references Agente(idAgente) ON DELETE CASCADE

);



create table Familiar(
	idFamiliar int not null auto_increment,
    idAgente int,
    nombre varchar(45),
    apellido varchar(45),
    DNI int,
    esConyuge bool,
    primary key(idFamiliar,idAgente),
    foreign key(idAgente) references Agente(idAgente) ON DELETE CASCADE
);

drop table Familiar;

create table Horasextra(
	idHorasextra int not null auto_increment,
    idAgente int,
    fecha varchar(10),
    cantidad int,
    primary key(idHorasextra, idAgente),
    foreign key(idAgente) references Agente(idAgente) ON DELETE CASCADE
    );
    
    drop table Horasextra;
    
create table Licencia(
	idLicencia int not null auto_increment,
    idAgente int,
    fecha varchar(10),
    cantidad int,
    razon varchar(40),
    primary key(idLicencia, idAgente),
    foreign key(idAgente) references Agente(idAgente) ON DELETE CASCADE
    );
    
    drop table Licencia;
    
create table Puesto(
	idPuesto int not null auto_increment,    
    nombre varchar(50),
    numeroDecreto int,
    fecha varchar(20),
    primary key(idPuesto)
    );
    
    drop table Puesto;
    
create table Reparticion(
	idReparticion int not null auto_increment,
    idDepartamento int,
    nombre varchar(80),
    primary key(idReparticion, idDepartamento),
    foreign key(idDepartamento) references Departamento(idDepartamento) ON DELETE CASCADE
    );
    
create table Departamento(
	idDepartamento int not null auto_increment,
    nombre varchar(80),
    interno int,
    primary key(idDepartamento)
    
    );
    
    

select * from Agente;



create view vistaReparticion as
	select Reparticion.idReparticion idReparticion, Reparticion.nombre nombreReparticion, Departamento.nombre nombreDepartamento
    from Reparticion join Departamento on Departamento.idDepartamento = Reparticion.idDepartamento;
                
create view vistaEmpleado as
	select idAgente, Agente.apellido empleadoApellido, Agente.nombre empleadoNombre, DNI, Reparticion.nombre nombreReparticion,
    interno
    from Agente join Reparticion on Agente.idReparticion = Reparticion.idReparticion
				join Departamento on Departamento.idDepartamento = Reparticion.idDepartamento;

INSERT INTO Agente(nombre, apellido, DNI, CUIL, direccion) values('Adrian','Perea',34134444,2093939412,'Malvinas 22');