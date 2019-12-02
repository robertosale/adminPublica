const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');

var urlencodedParser = bodyparser.urlencoded({ extended: true });
const url = require('url');


let app = express();
app.use(bodyparser.json());

app.use(express.static('.'));





let mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Lapicera123!',
    database: 'AdministracionTest',
   

});

mysqlConnection.connect((err)=>{
    if(!err)console.log("The connection to the DataBase was succesfull");
    else console.log("Error in the DataBase connection: \n" + JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>{
    console.log("Express is running at port 3000");
});

app.get('/',(req,res)=> {res.redirect('../empleados.html')});

app.get('/busquedaempleados',(req,res)=> {
    var result;
    console.log("Entro a Busquedaempleados")
    mysqlConnection.query(`SELECT idAgente, empleadoNombre, empleadoApellido, DNI, nombreReparticion, 
                        interno FROM vistaEmpleado
                        WHERE LOWER(empleadoApellido) LIKE \'%${req.query.busqueda.toLowerCase()}%\' OR
                        DNI LIKE \'%${parseInt(req.query.busqueda)}%\'
                        ORDER BY empleadoApellido ASC`,(err,result,fields)=>{
        
                            res.send(result);
                            console.log(result);
                    
                        });
});

app.get('/busquedareparticiones',(req,res)=> {
    var result;
    console.log("Entro a BusquedaReparticiones")
    mysqlConnection.query(`SELECT idReparticion, nombreReparticion, nombreDepartamento FROM vistaReparticion
                        WHERE LOWER(nombreReparticion) LIKE \'%${req.query.busqueda.toLowerCase()}%\' 
                        ORDER BY nombreReparticion ASC`,(err,result,fields)=>{
        
                            res.send(result);
                            console.log(result);
                    
                        });
});


app.get('/busquedapuestos',(req,res)=> {
    var result;
    console.log("Entro a Busquedapuestos")
    mysqlConnection.query(`SELECT idPuesto, nombre FROM Puesto`,(err,result,fields)=>{
        
                            res.send(result);
                            console.log(result);
                    
                        });
});


app.post('/agregarpuesto/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`INSERT INTO Puesto(nombre, numeroDecreto, fecha)
    values( '${req.body.nombrePuesto}', 
             ${parseInt(req.body.decreto)},
            '${req.body.fecha}' )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );
    
    
  

});


app.post('/addempleado/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`INSERT INTO Agente(idPuesto, idReparticion, nombre, apellido, DNI, CUIL, direccion, telefono)
    values( ${parseInt(req.body.empleadoPuesto)},
            ${parseInt(req.body.empleadoReparticion)},
            '${req.body.empleadoNombre}', 
            '${req.body.empleadoApellido}',
            ${parseInt(req.body.empleadoDNI)},
            ${parseInt(req.body.empleadoCUIL)},
            '${req.body.empleadoDireccion}',
            '${req.body.empleadoTelefono}' )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );
    
    
    res.redirect('/empleados.html');

});

app.delete('/deleteempleado/:id',(req,res)=>{
    console.log(req.params.id);
     mysqlConnection.query(`DELETE FROM Agente WHERE idAgente=${req.params.id}`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            ); 
    
            res.redirect('.');
    

});

app.delete('/deletereparticion/:id',(req,res)=>{
    console.log(req.params.id);
     mysqlConnection.query(`DELETE FROM Reparticion WHERE idReparticion=${req.params.id}`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            ); 
    
            res.redirect('.');
    

});

app.post('/llegadatarde/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`INSERT INTO Inasistencia(fecha, tipo, idAgente)
    values( '${req.body.fecha}', 
            '${req.body.tipo}',
            ${parseInt(req.body.idEmpleado)} )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );

    console.log(req.body.idEmpleado);   
    

});


app.post('/familiar/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`INSERT INTO Familiar(idAgente, nombre, apellido, DNI, esConyuge)
    values( '${parseInt(req.body.idEmpleado)}', 
            '${req.body.nombre}',
            '${req.body.apellido}',
            ${parseInt(req.body.dni)},
            ${parseInt(req.body.conyuge)} )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );

    console.log("Familiar");   
    

});


app.post('/horasextra/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`INSERT INTO Horasextra(idAgente, fecha, cantidad)
    values( '${parseInt(req.body.idEmpleado)}', 
            '${req.body.nombre}',
             ${parseInt(req.body.cantidad)} )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );

    console.log(req.body.idEmpleado);   
    

});


app.post('/licencia/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`INSERT INTO Licencia(idAgente, fecha, cantidad, razon)
    values( '${parseInt(req.body.idEmpleado)}', 
            '${req.body.fecha}',
             ${parseInt(req.body.cantidad)},
             '${req.body.razon}' )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );

    console.log(req.body.razon);   
    

});


app.post('/estadoempleado/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`UPDATE Agente SET estado = '${req.body.estado}' 
            WHERE idAgente = ${parseInt(req.body.idEmpleado)}`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );

    console.log(req.body.idEmpleado);   
    

});

app.post('/antiguedadempleado/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`UPDATE Agente SET antiguedad = '${parseInt(req.body.antiguedad)}' 
            WHERE idAgente = ${parseInt(req.body.idEmpleado)}`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );

    console.log(req.body.idEmpleado);   
    

});


app.get('/busquedadepartamentos',(req,res)=> {
    var result;
    console.log("Entro a Busquedadepartamentos")
    mysqlConnection.query(`SELECT idDepartamento, nombre FROM Departamento`,(err,result,fields)=>{
        
                            res.send(result);
                            console.log(result);
                    
                        });
});


app.post('/agregardepartamento/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`INSERT INTO Departamento(nombre, interno)
    values( '${req.body.nombre}', 
             ${parseInt(req.body.interno)} )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );
    
    
  

});

app.post('/addreparticion/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    backURL=req.header('Referer') || '/';
    mysqlConnection.query(`INSERT INTO Reparticion(nombre, idDepartamento)
    values( '${req.body.nombre}', 
             ${parseInt(req.body.departamento)} )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );
            
            res.redirect('../reparticiones.html');
    
  

});

app.post('/addreparticionemp/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    backURL=req.header('Referer') || '/';
    mysqlConnection.query(`INSERT INTO Reparticion(nombre, idDepartamento)
    values( '${req.body.nombre}', 
             ${parseInt(req.body.departamento)} )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );
            
    res.redirect('../addEmpleado.html');
  

});


app.get('/getlegajo/:id',(req,res)=> {
    var result;
    console.log("Entro a Busquedadepartamentos" + req.params.id);
    res.redirect(`../legajo.html?id=${req.params.id}`);
    
});


app.get('/legajoempleado',(req,res)=> {
    var result;
    console.log("Entro a legajoempleado")
    mysqlConnection.query(`SELECT idAgente, empleadoNombre, empleadoApellido, DNI, nombreReparticion, 
                        interno, DNI, CUIL, direccion, telefono, estado, antiguedad, puestoNombre,
                        nombreReparticion
                        FROM vistaEmpleado
                        WHERE idAgente = ${req.query.busqueda}`,(err,result,fields)=>{
        
                            res.send(result);
                            console.log(result);
                    
                        });
});


app.get('/licenciasempleado',(req,res)=> {
    var result;
    console.log("Entro a legajoempleado")
    mysqlConnection.query(`SELECT fecha,cantidad,razon
                        FROM vistaLicencia
                        WHERE idAgente = ${req.query.busqueda}`,(err,result,fields)=>{
        
                            res.send(result);
                            console.log(req.query.busqueda);
                    
                        });
});