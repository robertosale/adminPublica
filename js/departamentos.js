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

