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
                                
                                <td>${row.nombreReparticion} </td>
                                <td>${row.nombreDepartamento} </td>
                                <td>${row.apellidoJefe}, ${row.nombreJefe}</td>
                                <td>${row.telefono}</td>
                                <td><a class="delete" href="javascript:borrar(${row.idReparticion})" aria-haspopup="true"
                                aria-expanded="false"><i class="material-icons" title="Borrar">delete_forever</i></a></td>
                                
                                
                            </tr>`;
                   
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/busquedareparticiones');  //armo la url, esta tes la base
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
    


    let url = new URL(`http://localhost:3000/deletereparticion/${clicked_id}`);  //armo la url, esta es la base
    

    console.log(url);
    console.log(clicked_id);
    xhttp.open("DELETE",url,true);
    xhttp.withCredentials=true;
    xhttp.send();
    buscar();


    
}


