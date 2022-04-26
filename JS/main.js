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
};

//contacto.html

function enviarForm(){
    let pregunta =confirm("Estás seguro de querer enviar este mensaje?");
    if (pregunta) {
        let nombre = document.getElementById("nombre").value;
        let mensaje = `Gracias por tu mensaje, ${nombre}`;
        alert(mensaje);
    }
};

//nosotros.html
//Dark Mode

function switchSheet() {
    let theme = document.getElementById("theme");
  
    if (theme.getAttribute("href") == "css/mododia.css") {
      theme.href = "css/modonoche.css";
    } else {
      theme.href = "css/mododia.css";
    }
  };




