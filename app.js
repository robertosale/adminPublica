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
    database: 'Administracion',
   

});

mysqlConnection.connect((err)=>{
    if(!err)console.log("The connection to the DataBase was succesfull");
    else console.log("Error in the DataBase connection: \n" + JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>{
    console.log("Express is running at port 3000");
})


app.get('/request',(req,res)=> {
    var result;
    
    mysqlConnection.query(`SELECT nombre, anio FROM Pelicula
                        WHERE LOWER(nombre) LIKE \'%${req.query.peli.toLowerCase()}%\'`,(err,result,fields)=>{
        
        res.send(result);
        console.log(result);

    });


});

app.post('/empleado/',urlencodedParser,(req,res)=>{
    console.log(req.body);
    
    
    res.redirect('/empleados.html');

});