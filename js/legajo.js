console.log(window.location.href)

let urlString = window.location.href;
var url = new URL(urlString);
var idUrl =url.searchParams.get("id");

var arrayContador = [0,0,0,0];

var tieneConyuge = 0;

console.log(arrayContador);


window.onload=()=>{

    cargarLegajo(idUrl);
    
}

function cargarLegajo(criterio){
    console.log("Entro a buscar");
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){
                
                document.getElementById('contenedor').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    arrayContador[3] = row.antiguedad;
                    console.log('El empleado es' + row.empleadoNombre);
                    document.getElementById('nombreEmpleado').innerText=`${row.empleadoApellido}, ${row.empleadoNombre}`
                    document.getElementById('contenedor').innerHTML=`
                    

                    <div class="sideby" style="margin-top:10px">
                    <h5 >DNI: ${row.DNI}</h5>
                    <h5 >CUIL: ${row.CUIL}</h5>
                    </div>

                    <hr>

                    <div class="sideby">
                    <h5 >Dirección: ${row.direccion}</h5>
                    <h5 >Teléfono: ${row.telefono}</h5>
                    </div>

                    <hr>

                    
                    <div class="sideby">
                    <h5>Puesto: ${row.puestoNombre}</h5>
                    
                    <h5>Repartición: ${row.nombreReparticion}</h5>

                    </div>

                    <hr>

                    <div class="sideby">
                    <h5>Estado: ${row.estado}</h5>
                    
                    <h5>Antiguedad: ${row.antiguedad} años</h5>

                    </div>

                    <hr>

                    

                    `
                    ;
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/legajoempleado');  //armo la url, esta tes la base
        url.searchParams.set('busqueda',criterio);
    
        console.log(url);
        xhttp.open("GET",url,false);
        xhttp.withCredentials=true;
        xhttp.send();
}




function cargarLicencias(criterio){
    console.log("Entro a buscar");
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){

                document.getElementById('contenedor').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    
                    let arrayFecha = row.fecha.split("-");
                    let fecha = `${arrayFecha[2]}-${arrayFecha[1]}-${arrayFecha[0]}`;
                    document.getElementById('contenedor').innerHTML+=`
                    

                    <div class="sideby" style="margin-top:10px">
                    <h5 >Fecha: ${fecha}</h5>
                    <h5 >Tiempo: ${row.cantidad} días</h5>
                    </div>

                    

                    <div class="sideby">
                    <h5 >Razón: ${row.razon}</h5>
                    
                    </div>

                    <hr>

                    `
                    ;
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/licenciasempleado');  //armo la url, esta tes la base
        url.searchParams.set('busqueda',criterio);
    
        console.log(url);
        xhttp.open("GET",url,false);
        xhttp.withCredentials=true;
        xhttp.send();
}

function conyuge(con){
    if(con == "1"){
        arrayContador[2]-=1;
        return "<h5>Cónyuge </h5>"
    }
    else{
        
        return "<h5>Hijo</h5>";
    }
}

function cargarFamiliares(criterio,inyectar){
    console.log("Entro a buscar");
    
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){

                document.getElementById('contenedor').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    console.log(row);
                    
                    
                    document.getElementById('contenedor').innerHTML+=`
                    

                    <div class="sideby" style="margin-top:10px">
                    <h5 >${row.apellido}, ${row.nombre}</h5>
                    ${conyuge(row.esConyuge)}
                    
                    </div>

                    

                    <div class="sideby">
                    <h5 >DNI: ${row.DNI} </h5>
                    <h5 >Edad: ${row.edad} años</h5>
                    
                    </div>


                    <hr>

                    `
                    ;
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/familiaresempleado');  //armo la url, esta tes la base
        url.searchParams.set('busqueda',criterio);
    
        console.log(url);
        xhttp.open("GET",url,false);
        xhttp.withCredentials=true;
        xhttp.send();

        
}



function cargarTitulos(criterio,inyectar){
    console.log("Entro a buscar");
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){

                document.getElementById('contenedor').innerHTML='';

                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    
                    document.getElementById('contenedor').innerHTML+=`
                    

                    
                    
                    <div class="sideby" style="margin-top:10px">
                    <h5> ${row.nombreTitulo} </h5>
                    </div>
                    

                    <hr>

                                    

                    `
                    ;
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/titulosempleado');  //armo la url, esta tes la base
        url.searchParams.set('busqueda',criterio);
    
        console.log(url);
        xhttp.open("GET",url,false);
        xhttp.withCredentials=true;
        xhttp.send();
}


function cargarInasistencias(criterio,inyectar){
    
    console.log("Entro a buscar");
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){
                console.log(xhttp.responseText);
                document.getElementById('contenedor').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    
                    let arrayFecha = row.fecha.split("-");
                    let fecha = `${arrayFecha[2]}-${arrayFecha[1]}-${arrayFecha[0]}`;
                    document.getElementById('contenedor').innerHTML+=`
                    

                    <div class="sideby" style="margin-top:10px">
                    <h5 >Fecha: ${fecha}</h5>
                    <h5 >Tipo: ${row.tipo}</h5>
                    </div>

                    <hr>

                              

                    `
                    ;
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/inasistenciasempleado');  //armo la url, esta tes la base
        url.searchParams.set('busqueda',criterio);
    
        console.log(url);
        xhttp.open("GET",url,false);
        xhttp.withCredentials=true;
        xhttp.send();
}



function cargarSueldo(criterio){
    
    arrayContador[0]=0;
    arrayContador[1]=0;
    arrayContador[2]=0;

    cargarFamiliares(idUrl,1);
    document.getElementById('contenedor').innerHTML='';

    console.log("Entro a CargarSueldo");
    console.log("tiene conyuge?  " + tieneConyuge);

    auxiliarSueldo(idUrl,'inasistenciasempleado',0);
    console.log(arrayContador);
    
    auxiliarSueldo(idUrl,'titulosempleado',1);
    auxiliarSueldo(idUrl,'familiaresempleado',2);

    let cantidadInasistencias = arrayContador[0];
    let cantidadTitulos = arrayContador[1];
    let cantidadFamiliaresMenores = arrayContador[2];
    let cantidadAntiguedad = arrayContador[3];

    let sueldoBasico = 20000;

    let montoAntiguedad = sueldoBasico*(0.02*cantidadAntiguedad);
    console.log("El sueldo es: "+montoAntiguedad);

    let montoTitulos = sueldoBasico*0.175*cantidadTitulos;
    console.log("tenes titulos "+cantidadTitulos);
    console.log("El sueldo es: "+montoTitulos);

    let montoFamiliares = 2196*cantidadFamiliaresMenores;
    console.log("tenes Familiares "+montoFamiliares);

    let presentismo = 2000;
    let montoInasistencia = 0;

    if(cantidadInasistencias){
        presentismo = 0;
        montoInasistencia = -(2000/20)*cantidadInasistencias;
    }

    let sueldoTotal = sueldoBasico + presentismo+ montoInasistencia + montoAntiguedad + montoTitulos
                        + montoFamiliares;

    let montoJubilacion = -sueldoTotal*0.11;

    let montoSubsidio = -sueldoTotal*0.045;

    let montoNoRemunerativa = sueldoTotal*0.19;

    sueldoTotal = sueldoTotal + montoJubilacion + montoSubsidio+ montoNoRemunerativa;

    console.log("El sueldo final es dse " + sueldoTotal);

    document.getElementById('contenedor').innerHTML=`
    <div class="sideby" style="margin-top:10px">
    <h5 >Sueldo Básico:</h5>
    <h5 >${sueldoBasico}</h5>
    
    </div>

    <hr>

    <div class="sideby" style="margin-top:10px">
    <h5 >Asignacion Universal por Hijo:</h5>
    <h5 >${montoFamiliares}</h5>
    </div>

    <hr>

    <div class="sideby" style="margin-top:10px">
    <h5 >Adicional Titulos: </h5>
    <h5 >${montoTitulos}</h5>
    </div>

    <hr>

    <div class="sideby" style="margin-top:10px">
    <h5 >Presentismo: </h5>
    <h5 >${presentismo}</h5>
    </div>

    <hr>

    <div class="sideby" style="margin-top:10px">
    <h5 >Descuento Inasistencias: </h5>
    <h5 >${montoInasistencia}</h5>
    </div>

    <hr>

    <div class="sideby" style="margin-top:10px">
    <h5 >Aporte Jubilatorio: </h5>
    <h5 >${montoJubilacion}</h5>
    </div>

    <hr>
    <div class="sideby" style="margin-top:10px">
    <h5 >Descuento Subsidio Salud: </h5>
    <h5 >${montoSubsidio}</h5>
    </div>

    <hr>

    <div class="sideby" style="margin-top:10px">
    <h5 >Compensación no remunerativa: </h5>
    <h5 >${montoNoRemunerativa}</h5>
    </div>

    <hr>

    <div class="sideby" style="margin-top:10px">
    <h5 ><b>Total: </b></h5>
    <h5 ><b>${sueldoTotal}</b></h5>
    </div>

    <hr>
    
    
    `;


    

    

    

    

    

    
}




function clickLicencias(){
    document.getElementById("navSueldo").className = "nav-item nav-link";
    document.getElementById("navLicencias").className = "nav-item nav-link active";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarLicencias(idUrl);


}

function clickDatos(){
    document.getElementById("navSueldo").className = "nav-item nav-link";
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link  active"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarLegajo(idUrl);


}
function clickFamiliares(){
    document.getElementById("navSueldo").className = "nav-item nav-link";
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link active"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarFamiliares(idUrl,1);


}
function clickTitulos(){
    document.getElementById("navSueldo").className = "nav-item nav-link";
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link  active"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarTitulos(idUrl,1);


}
function clickInasistencias(){
    document.getElementById("navSueldo").className = "nav-item nav-link";
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link active"
    cargarInasistencias(idUrl,1);


}



function clickSueldo(){
    document.getElementById("navSueldo").className = "nav-item nav-link  active";
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarSueldo(idUrl);


}



function auxiliarSueldo(criterio,direccion,indiceArray){
    console.log("Entro a buscar");
    console.log(indiceArray);
    
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){

                document.getElementById('contenedor').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    arrayContador[indiceArray]++;
                    
                    
                });
    
    
                
            }
            
            
        }
    
    
        let url = new URL(`http://localhost:3000/${direccion}`);  //armo la url, esta tes la base
        url.searchParams.set('busqueda',criterio);
    
        console.log(url);
        xhttp.open("GET",url,false);
        xhttp.withCredentials=true;
        xhttp.send();
        
}