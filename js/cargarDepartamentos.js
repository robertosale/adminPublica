window.onload=()=>{
        
        
    cargarDepartamentos();
       
        
    
}

function cargarDepartamentos(){
    console.log("Entro a buscar");
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4 && xhttp.status ==200){

                document.getElementById('reparticionDepartamento').innerHTML='';
                let jackson = JSON.parse(xhttp.responseText);
                Object.keys(jackson).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
                    let row = jackson[key];
                    console.log(row.nombre);
    
                    document.getElementById('reparticionDepartamento').innerHTML += `
                                <option value='${row.idDepartamento}'>${row.nombre}</option>
                            `;
                   
                });
    
    
                
            }
        }
    
    
        let url = new URL('http://localhost:3000/busquedadepartamentos');  //armo la url, esta tes la base
    
        console.log(url);
        xhttp.open("GET",url,true);
        xhttp.withCredentials=true;
        xhttp.send();
}


function enviarDepartamento(){

   

    let interno = document.getElementById('interno').value;
    let nombre = document.getElementById('nombreDepartamento').value;

    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState == 4 && xhttp.status ==200){
            
                           
            };
            
        };
    


    let url = new URL(`http://localhost:3000/agregardepartamento/`);  //armo la url, esta es la base
    


    console.log(url);
    
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials=true;
    xhttp.send(`nombre=${nombre}&interno=${interno}`);


    cargarDepartamentos();

    $("#modalDepartamento").modal("hide");

    
}