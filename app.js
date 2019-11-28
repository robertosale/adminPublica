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


app.get('/busquedaempleados',(req,res)=> {
    var result;
    
    mysqlConnection.query(`SELECT nombre, anio FROM Pelicula
                        WHERE LOWER(nombre) LIKE \'%${req.query.peli.toLowerCase()}%\'`);


});

app.post('/empleado/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    mysqlConnection.query(`INSERT INTO Agente(nombre, apellido, DNI, CUIL, direccion)
    values( '${req.body.empleadoNombre}', 
            '${req.body.empleadoApellido}',
            ${parseInt(req.body.empleadoDNI)},
            ${parseInt(req.body.empleadoCUIL)},
            '${req.body.empleadoDireccion}' )`,(err,result,fields)=>{
                console.log(result);
                console.log(err);
            }
            );
    
    
    res.redirect('/empleados.html');

});