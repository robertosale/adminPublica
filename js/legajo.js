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
                    document.getElementById('contenedor').innerHTML=`
                    <h1 id="nombre" style="margin: 5px;">${row.empleadoApellido}, ${row.empleadoNombre}</h1>
                    <hr>

                    <div class="sideby">
                    <h5 >DNI: ${row.DNI}</h5>
                    <h5 >CUIL: ${row.CUIL}</h5>
                    </div>

                    <hr>

                    <div class="sideby">
                    <h5 >Dirección: ${row.direccion}</h5>
                    <h5 >Teléfono: ${row.telefono}</h5>
                    </div>

                    <hr>

                    <div id="familiares" class="familiares sideby">
                    <h5>Conyuge: Claudia Flores</h5>
                    <h5>DNI: 35432534</h5>

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
                    document.getElementById('contenedor').innerHTML=`
                    <h1 id="nombre" style="margin: 5px;">${row.empleadoApellido}, ${row.empleadoNombre}</h1>
                    <hr>

                    <div class="sideby">
                    <h5 >DNI: ${row.DNI}</h5>
                    <h5 >CUIL: ${row.CUIL}</h5>
                    </div>

                    <hr>

                    <div class="sideby">
                    <h5 >Dirección: ${row.direccion}</h5>
                    <h5 >Teléfono: ${row.telefono}</h5>
                    </div>

                    <hr>

                    <div id="familiares" class="familiares sideby">
                    <h5>Conyuge: Claudia Flores</h5>
                    <h5>DNI: 35432534</h5>

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
                    document.getElementById('nombreEmpleado').innerText= `${row.empleadoApellido}, ${row.empleadoNombre}`;

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
                    let fecha = `${arrayFecha[2]} - ${arrayFecha[1]} - ${arrayFecha[0]}`;
                    document.getElementById('contenedor').innerHTML+=`
                    

                    <div class="sideby" style="margin-top:10px">
                    <h5 >Fecha: ${fecha}</h5>
                    <h5 >Tiempo: ${row.cantidad} días</h5>
                    </div>

                    <hr>

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



function clickLicencias(){
    document.getElementById("navLicencias").className = "nav-item nav-link active";
    document.getElementById("navDatos").className = "nav-item nav-link"
    cargarLicencias(idUrl);


}

function clickDatos(){
    document.getElementById("navDatos").className = "nav-item nav-link active";
    document.getElementById("navLicencias").className = "nav-item nav-link";
    cargarLegajo(idUrl);


}