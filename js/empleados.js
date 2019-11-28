window.onload=()=>{
        
        
    
       
        
    
}

function buscar(){
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
                                          <a class="dropdown-item" href="#">Borrar</a>
                                          
                                      </div>

                                    </div>
                                  </div>
                                </td>
                            </tr>`;
                   
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://127.0.0.1:3000/busquedaempleados');  //armo la url, esta tes la base
        url.searchParams.set('busqueda',document.getElementById('buscador').value); //sigo armando la url de busqueda
    
        console.log(url);
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}