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
                                
                                <td>${row.apellido}, ${row.nombre} </td>
                                <td>${row.DNI}</td>
                                <td>${row.direccion}</td>
                                <td>(171) 555-2222</td>
                                <td>
                                  <div class="iconos">
                                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254;</i></a>
                                  

                                    <div class="dropdown">
                                      <a href="#" class="delete" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                      aria-expanded="false"><i class="material-icons" title="Mas...">&#xE896;</i></a> 

                                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                          <a class="dropdown-item" href="#">Agregar Falta</a>
                                          <a class="dropdown-item" href="#">Agregar Familiar</a>
                                          <a class="dropdown-item" href="#">Agregar Horas Extra</a>
                                          <a class="dropdown-item" href="#">Agregar Licencia</a>
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