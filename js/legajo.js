console.log(window.location.href)

let urlString = window.location.href;
var url = new URL(urlString);
var idUrl =url.searchParams.get("id");




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
        xhttp.open("GET",url,true);
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
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}

function conyuge(con){
    if(con == "1") return "<h5>Cónyuge </h5>"
    else return "<h5>Hijo</h5>";
}

function cargarFamiliares(criterio){
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
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}



function cargarTitulos(criterio){
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
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}


function cargarInasistencias(criterio){
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
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}




function clickLicencias(){
    document.getElementById("navLicencias").className = "nav-item nav-link active";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarLicencias(idUrl);


}

function clickDatos(){
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link  active"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarLegajo(idUrl);


}
function clickFamiliares(){
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link active"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarFamiliares(idUrl);


}
function clickTitulos(){
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link  active"
    document.getElementById("navInasistencias").className = "nav-item nav-link"
    cargarTitulos(idUrl);


}
function clickInasistencias(){
    document.getElementById("navLicencias").className = "nav-item nav-link";
    document.getElementById("navDatos").className = "nav-item nav-link"
    document.getElementById("navFamiliares").className = "nav-item nav-link"
    document.getElementById("navTitulos").className = "nav-item nav-link"
    document.getElementById("navInasistencias").className = "nav-item nav-link active"
    cargarInasistencias(idUrl);


}



