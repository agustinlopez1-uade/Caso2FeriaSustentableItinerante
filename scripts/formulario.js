document.getElementById('formulario').addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert("Gracias, " + nombre + "! En breve nos estaremos contactando.");
    console.log("Gracias, " + nombre + "! En breve nos estaremos contactando.");
    
});