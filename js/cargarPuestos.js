window.onload=()=>{
        
        
    cargarPuestos();
    cargarReparticiones();
       
        
    
}

function cargarPuestos(){
    console.log("Entro a buscar");
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){

                document.getElementById('empleadoPuesto').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    console.log(row.nombre);
    
                    document.getElementById('empleadoPuesto').innerHTML += `
                                <option value='${row.idPuesto}'>${row.nombre}</option>
                            `;
                   
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/busquedapuestos');  //armo la url, esta tes la base
    
        console.log(url);
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}

function cargarReparticiones(criterio=""){
    console.log("Entro a buscar");
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){

                document.getElementById('empleadoReparticion').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    console.log(row.nombre);
    
                    document.getElementById('empleadoReparticion').innerHTML += `
                                <option value='${row.idReparticion}'>${row.nombreReparticion}</option>
                            `;
                   
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/busquedareparticiones');  //armo la url, esta tes la base
        url.searchParams.set('busqueda',criterio);
    
        console.log(url);
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}


function enviarPuesto(){

   

    let fecha = document.getElementById('fechaPuesto').value;
    let decreto = document.getElementById('decreto').value;
    let nombrePuesto = document.getElementById('nombrePuesto').value;

    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/agregarpuesto/`);  //armo la url, esta es la base
    


    console.log(url);
    
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials=true;
    xhttp.send(`nombrePuesto=${nombrePuesto}&fecha=${fecha}&decreto=${decreto}`);


    cargarPuestos();

    $("#modalPuesto").modal("hide");

    
}