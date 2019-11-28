function addFormHijos(){
    let cantidad = document.getElementById("inputHijos").value;
    console.log(`Tiene ${cantidad} de hijos`);

    document.getElementById("hijos").innerHTML="";
    cantidad = parseInt(cantidad);

    for(let i=0;i<cantidad;i++) {
        document.getElementById("hijos").innerHTML+=
        `<div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputNombreHijo${i}">Nombre Hijo ${i+1}</label>
          <input type="text" class="form-control" name="nombreHijo${i}" placeholder="Nombre">
        </div>
        <div class="form-group col-md-6">
          <label for="inputApellidoHijo${i}">Apellido</label>
          <input type="text" class="form-control" name="apellidoHijo${i}" placeholder="Apellido">
        </div>
      </div>

      <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputDNIHijo${i}">DNI</label>
                <input type="text" class="form-control" name="DNIHijo${i}" placeholder="DNI">
              </div>
              
            </div>`
    }

}

function addConyugeForm(){
    document.getElementById("conyugeDiv").innerHTML='';
    if(document.getElementById("conyugeCheck").checked) {
        document.getElementById("conyugeDiv").innerHTML=
        `<div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputNombreConyuge">Nombre Conyuge</label>
          <input type="text" class="form-control" name="nombreConyuge" placeholder="Nombre">
        </div>
        <div class="form-group col-md-6">
          <label for="inputApellidoConyuge">Apellido</label>
          <input type="text" class="form-control" name="apellidoConyuge" placeholder="Apellido">
        </div>
      </div>

      <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputDNIConyuge">DNI</label>
                <input type="text" class="form-control" name="DNIConyuge" placeholder="DNI">
              </div>
              
            </div>`
    }
}



