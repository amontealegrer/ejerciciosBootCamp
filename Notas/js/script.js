document.getElementById('notaForm').addEventListener('submit', function (event) {
    event.preventDefault(); //Evita que el formulario se envíe

    //obtener valores desde el formulario
    let nombreAlumno = document.getElementById('nombre').value;
    let notaUno = parseFloat(document.getElementById('nota1').value);
    let notaDos = parseFloat(document.getElementById('nota2').value);
    let notaTres = parseFloat(document.getElementById('nota3').value);
    let notaCuatro = parseFloat(document.getElementById('nota4').value);

    //calcular la nota final ponderada
    let notaFinal = (notaUno * 0.10) + (notaDos * 0.30) + (notaTres * 0.40) + (notaCuatro * 0.20);

    //Determinar si el estudiante aprueba o reprueba
    let novedad = notaFinal >= 3.0 ? "APROBADO" : "REPROBADO";
    let claseResultado = notaFinal >= 3.0 ? "aprobado" : "reprobado";

    // Mostrar el resultado
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Estudiante: ${nombreAlumno}<br>Nota Final: ${notaFinal.toFixed(2)}<br>Estado: <span class="${claseResultado}">${novedad}</span>`;
});



