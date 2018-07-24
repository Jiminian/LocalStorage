
var estudiantes = [];
var storage = window.localStorage;


window.onload = function aLaCarga() 
{
    if (typeof (storage) !== "undefined") 
    {
        if (storage.length > 0) 
        {
            estudiantes = JSON.parse(storage.getItem("estudiantes"));

            cargarTabla(estudiantes);

        }

    }
    else 
    {
        alert("NO SOPORTADO");
    }

}




function leerEstudiante() {
    var est = new Estudiante();

    est.nombre = document.getElementById("nombre").value;
    est.matricula = document.getElementById("matricula").value;
    est.identificacion = document.getElementById("identificacion").value;

    agregarEstudiante(est);

    limpiarFormulario(["nombre", "matricula", "identificacion"]);

}


function agregarEstudiante(estudiante) {

    estudiantes.push(estudiante);
    storage.setItem("estudiantes", JSON.stringify(estudiantes));
    
    
    var tablaEstudiante = document.getElementById("tabla_estudiante");

    var tr = document.createElement("tr");

    var tdNombre = document.createElement("td");
    var tdMatricula = document.createElement("td");
    var tdIdentificacion = document.createElement("td");

    tdNombre.textContent = estudiante.nombre;
    tdMatricula.textContent = estudiante.matricula;
    tdIdentificacion.textContent = estudiante.identificacion;

    tr.appendChild(tdNombre);
    tr.appendChild(tdMatricula);
    tr.appendChild(tdIdentificacion);

    tablaEstudiante.appendChild(tr);

}


function limpiarFormulario(inputs) {
    inputs.forEach(function (v, i) {
       
        document.getElementById(v).value = "";
    });

}


function cargarTabla(estudiantes) 
{
    
    this.estudiantes = [];

    
    estudiantes.forEach(
        function(v,i)
        {
            agregarEstudiante(v);
        }
    )  

}
