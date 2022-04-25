//index.html

function displayAlert(){
    let message ="Las suscripciones se habilitaran pronto!"
    alert(message);
    let pregunta = confirm("¿Quire dejarnos alguna consulta?");
    if(pregunta) {
        location = "http://127.0.0.1:5500/contacto.html"
    } else {
        location.href() 
    }
}