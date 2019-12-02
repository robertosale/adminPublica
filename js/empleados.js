window.onload=()=>{
        
        
    buscar();
       
        
    
}


function buscar(criterio = document.getElementById('buscador').value){
    console.log("Entro a buscar");
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){

                document.getElementById('resultados').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    console.log(row.nombre);
    
                    document.getElementById('resultados').innerHTML += `

                            <tr>
                            
                                
                                <td><a href="/getlegajo/${row.idAgente}">${row.empleadoApellido}, ${row.empleadoNombre} </a> </td>
                                <td>${row.DNI}</td>
                                <td>${row.nombreReparticion}</td>
                                <td>${row.interno}</td>
                                <td>
                                  <div class="iconos">
                                  

                                    <div class="dropdown">
                                      <a href="#" class="delete" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                      aria-expanded="false"><i class="material-icons" title="Mas...">&#xE896;</i></a> 

                                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                          <a class="dropdown-item" href="javascript:abrirModalLlegadaTarde(${row.idAgente})">Agregar Falta</a>
                                          <a class="dropdown-item" href="javascript:abrirFamiliar(${row.idAgente})" >Agregar Familiar</a>
                                          <a class="dropdown-item" href="javascript:abrirHorasExtra(${row.idAgente})" >Agregar Horas Extra</a>
                                          <a class="dropdown-item" href="javascript:abrirLicencia(${row.idAgente})" >Agregar Licencia</a>
                                          <a class="dropdown-item" href="javascript:abrirAntiguedad(${row.idAgente})" >Antiguedad</a>
                                          <a class="dropdown-item" href="javascript:abrirEstado(${row.idAgente})" >Estado</a>
                                          <a class="dropdown-item" href="#">Boleta de Sueldo</a>
                                          <div class="dropdown-divider"></div>
                                          <a class="dropdown-item" href="javascript:borrar(${row.idAgente})">Borrar</a>
                                          
                                      </div>

                                    </div>
                                  </div>
                                </td>
                            </tr>`;
                   
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/busquedaempleados');  //armo la url, esta tes la base
        url.searchParams.set('busqueda',criterio); //sigo armando la url de busqueda
    
        console.log(url);
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}

function borrar(clicked_id){

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/deleteempleado/${clicked_id}`);  //armo la url, esta es la base
    

    console.log(url);
    console.log(clicked_id);
    xhttp.open("DELETE",url,true);
    xhttp.withCredentials=true;
    xhttp.send();
    buscar();


    
}

function abrirModalLlegadaTarde(clicked_id){
    $("#addFaltaModal").modal("show");
    document.getElementById('idEmpleado').value=clicked_id;

}


function enviarLlegadaTarde(){

   

    let tipo = document.getElementById('tipoLlegadaTarde').value;
    let fecha = document.getElementById('fecha').value;
    let idEmpleado = document.getElementById('idEmpleado').value;

    console.log(tipo + "Tipo y fecha:" +fecha )

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/llegadatarde/`);  //armo la url, esta es la base
    


    console.log(url);
    
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials=true;
    xhttp.send(`idEmpleado=${idEmpleado}&tipo=${tipo}&fecha=${fecha}`);

    $("#addFaltaModal").modal("hide");

    
}

function abrirFamiliar(clicked_id){
    $("#agregarFamiliarModal").modal("show");
    document.getElementById('idEmpleado').value=clicked_id;

}

function abrirHorasExtra(clicked_id){
    $("#agregarHorasExtraModal").modal("show");
    document.getElementById('idEmpleado').value=clicked_id;

}

function abrirLicencia(clicked_id){
    $("#agregarLicenciaModal").modal("show");
    document.getElementById('idEmpleado').value=clicked_id;

}

function abrirAntiguedad(clicked_id){
    $("#antiguedadModal").modal("show");
    document.getElementById('idEmpleado').value=clicked_id;

}

function abrirEstado(clicked_id){
    $("#estadoModal").modal("show");
    document.getElementById('idEmpleado').value=clicked_id;

}

function enviarFamiliar(){

   

    let nombre = document.getElementById('familiarNombre').value;
    let apellido = document.getElementById('familiarApellido').value;
    let dni = document.getElementById('familiarDNI').value;
    let idEmpleado = document.getElementById('idEmpleado').value;
    let esConyuge = function(){
        if(document.getElementById("conyugeCheck").checked) return 1;
        else return 0;
        }

    

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/familiar/`);  //armo la url, esta es la base
    


    console.log(url);
    
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials=true;
    xhttp.send(`idEmpleado=${idEmpleado}&nombre=${nombre}&apellido=${apellido}&dni=${dni}&conyuge=${esConyuge()}`);

    $("#agregarFamiliarModal").modal("hide");

    
}





function enviarHorasExtra(){

   

    let fecha = document.getElementById('fechaExtra').value;
    let cantidad = document.getElementById('cantidadExtra').value;
    let idEmpleado = document.getElementById('idEmpleado').value;

    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/horasextra/`);  //armo la url, esta es la base
    


    console.log(url);
    
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials=true;
    xhttp.send(`idEmpleado=${idEmpleado}&fecha=${fecha}&cantidad=${cantidad}`);

    $("#agregarHorasExtraModal").modal("hide");

    
}





function enviarLicencia(){

   

    
    let fecha = document.getElementById('fechaLicencia').value;
    let razon = document.getElementById('razonLicencia').value;
    let cantidad = document.getElementById('cantidadLicencia').value;
    let idEmpleado = document.getElementById('idEmpleado').value;

    

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/licencia/`);  //armo la url, esta es la base
    


    console.log(url);
    
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials=true;
    xhttp.send(`idEmpleado=${idEmpleado}&razon=${razon}&fecha=${fecha}&cantidad=${cantidad}`);

    $("#agregarLicenciaModal").modal("hide");

    
}


function enviarEstado(){

   

    
    let estado = document.getElementById('estadoEmpleado').value;
    let idEmpleado = document.getElementById('idEmpleado').value;

    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/estadoempleado/`);  //armo la url, esta es la base
    


    console.log(url);
    
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials=true;
    xhttp.send(`idEmpleado=${idEmpleado}&estado=${estado}`);

    $("#estadoModal").modal("hide");

    
}



function enviarAntiguedad(){

   

    
    let antiguedad = document.getElementById('antiguedadEmpleado').value;
    let idEmpleado = document.getElementById('idEmpleado').value;

    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/antiguedadempleado/`);  //armo la url, esta es la base
    


    console.log(url);
    
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials=true;
    xhttp.send(`idEmpleado=${idEmpleado}&antiguedad=${antiguedad}`);

    $("#antiguedadModal").modal("hide");

    
}