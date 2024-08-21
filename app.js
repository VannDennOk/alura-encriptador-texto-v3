// VARIABLES
const caracteresEsp = /[\u0022-\u002B\u002F\u0030-\u0039\u003C-\u003E\u0040-\u0060\u007B-\u007E\u00A2-\u00BF\u00C0-\u00FF\u0100-\u017F\u0180-\u024F]/g;
          // caracteresEsp: excluye elementos del latín básico, latín suplemento, latín extendido A y B (uso UNICODE). Sí se permite: !¡,.:;-¿?

// ESTADO DE LA PAGINA AL INICIO
function condicionesIniciales(){
  document.getElementById("mensajeDesencriptado").value = "";
  document.getElementById("mensajeEncriptado").value = "";
}

// FUNCION PARA ENCRIPTAR TEXTO
function encriptar(){
  let texto = document.getElementById("mensajeDesencriptado").value;
  let textoCifrado = texto
   .replaceAll("e", "enter")
   .replaceAll("i", "imes")
   .replaceAll("a", "ai")
   .replaceAll("o", "ober")
   .replaceAll("u", "ufat");

    if (texto.match(caracteresEsp)){     //Valida que no haya caracteres especiales
      mensajeError();
    } else if (texto.length != "" && !texto.match(caracteresEsp)) {     //solo encripta si no hay caracteres especiales
      document.getElementById("mensajeEncriptado").value = textoCifrado;
      document.getElementById("mensajeDesencriptado").value = "";
      } else {
        mensajeCampoVacio();
      }
  }

// FUNCION PARA DESENCRIPTAR TEXTO
function desencriptar(){
  let textoCifrado = document.getElementById("mensajeEncriptado").value;
  let texto = textoCifrado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    if (textoCifrado.match(caracteresEsp)){     //Valida que no haya caracteres especiales
      mensajeError();
    } else if (textoCifrado.length != "" && !texto.match(caracteresEsp)) {     //solo desencripta si no hay caracteres especiales
      document.getElementById("mensajeDesencriptado").value = texto;
      document.getElementById("mensajeEncriptado").value = "";
      } else {
        mensajeCampoVacio();
      }
  }

// FUNCIÓN PARA CAMBIAR DATOS ENTRE CAMPOS
function swap(){
  let textoDerecha = document.getElementById("mensajeEncriptado").value;
  let textoIzquierda = document.getElementById("mensajeDesencriptado").value;
  let textoSwapIzquierda = textoDerecha;
  let textoSwapDerecha = textoIzquierda;

  if (textoDerecha.length != "" || textoIzquierda != "") {
    document.getElementById("mensajeDesencriptado").value = textoSwapIzquierda;
    document.getElementById("mensajeEncriptado").value = textoSwapDerecha;
  } else {
    mensajeCampoVacioSwap();
  }
}

// COPIA EL TEXTO ENCRIPTADO/DESENCRIPTADO EN EL PORTAPAPELES
function copiarTextoDesencriptado(){
  var resultadoDesencriptado = document.getElementById("mensajeDesencriptado").value;
  if (resultadoDesencriptado.length != 0) {
    navigator.clipboard.writeText(resultadoDesencriptado);
    mensajeExitoCopiar();
  } else {
      mensajeCampoVacioCopiar();
  }
}

function copiarTextoEncriptado(){
  var resultadoEncriptado = document.getElementById("mensajeEncriptado").value;
  if (resultadoEncriptado.length != 0) {
    navigator.clipboard.writeText(resultadoEncriptado);
    mensajeExitoCopiar();
  } else {
      mensajeCampoVacioCopiar();
  }
}

function cleanMensajeDesencriptado(){
  document.getElementById("mensajeDesencriptado").value = "";
}

function cleanMensajeEncriptado(){
  document.getElementById("mensajeEncriptado").value = "";
}


// MENSAJES POPUP
// Ahora son funcionales pero faltaría revisar cómo acortar el código.
function mensajeCampoVacio(){
  var textareaDesencriptado = document.getElementById("mensajeDesencriptado").value;
  var textareaEncriptado = document.getElementById("mensajeEncriptado").value;
  if (textareaDesencriptado === "" || textareaEncriptado === "") {
    Swal.fire({
      html: '<p class="popup__texto">Ingresa el texto que desees encriptar o desencriptar</p>',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup:'popup__box',
        closeButton:'popup__closeButton',
        confirmButton:'popup__button',
      },
      confirmButtonAriaLabel: 'Aceptar',
      buttonsStyling: false,
      showCloseButton: true,
      closeButtonArialLabel: 'cerrar alerta',
      imageUrl: 'assets/Exclamation.png',
      imageWidth: '80px',
      imageAlt: 'icono de exclamación o alerta',
    });
  }
}

function mensajeError(){
  Swal.fire({
    html: '<p class="popup__texto">No acepta mayúsculas, acentos o carácteres especiales.<br>Sí se pueden usar signos de puntuación como: , . : ; - ¿? !¡</p>',
    confirmButtonText: 'Aceptar',
    customClass: {
      popup:'popup__box',
      closeButton:'popup__closeButton',
      confirmButton:'popup__button',
    },
    confirmButtonAriaLabel: 'Aceptar',
    buttonsStyling: false,
    showCloseButton: true,
    closeButtonArialLabel: 'cerrar alerta',
    imageUrl: 'assets/Exclamation.png',
    imageWidth: '80px',
    imageAlt: 'icono de exclamación o alerta',
  });
}

function mensajeCampoVacioCopiar(){
  var resultadoDesencriptadoValue = document.getElementById("mensajeDesencriptado").value;
  var resultadoEncriptadoValue = document.getElementById("mensajeEncriptado").value;
  if ((resultadoDesencriptadoValue.trim() === "") || (resultadoEncriptadoValue.trim() === "")) {
    Swal.fire({
      html: '<p class="popup__texto">No hay mensaje para copiar</p>',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup:'popup__box',
        closeButton:'popup__closeButton',
        confirmButton:'popup__button',
      },
      confirmButtonAriaLabel: 'Aceptar',
      buttonsStyling: false,
      showCloseButton: true,
      closeButtonArialLabel: 'cerrar alerta',
      imageUrl: 'assets/Exclamation.png',
      imageWidth: '80px',
      imageAlt: 'icono de exclamación o alerta',
    });
  }
}

  function mensajeCampoVacioSwap(){
    var resultadoDesencriptadoValue = document.getElementById("mensajeDesencriptado").value;
    var resultadoEncriptadoValue = document.getElementById("mensajeEncriptado").value;
    if ((resultadoDesencriptadoValue.trim() === "") || (resultadoEncriptadoValue.trim() === "")) {
      Swal.fire({
        html: '<p class="popup__texto">No hay texto para intercambiar</p>',
        confirmButtonText: 'Aceptar',
        customClass: {
          popup:'popup__box',
          closeButton:'popup__closeButton',
          confirmButton:'popup__button',
        },
        confirmButtonAriaLabel: 'Aceptar',
        buttonsStyling: false,
        showCloseButton: true,
        closeButtonArialLabel: 'cerrar alerta',
        imageUrl: 'assets/Exclamation.png',
        imageWidth: '80px',
        imageAlt: 'icono de exclamación o alerta',
      });
    }
}
   
function mensajeExitoCopiar(){
  Swal.fire({
    html: '<p class="popup__texto">El mensaje encriptado se ha copiado en el portapapeles</p>',
    confirmButtonText: 'Aceptar',
    customClass: {
      popup:'popup__box',
      closeButton:'popup__closeButton',
      confirmButton:'popup__button',
    },
    confirmButtonAriaLabel: 'Aceptar',
    buttonsStyling: false,
    showCloseButton: true,
    closeButtonArialLabel: 'cerrar alerta',
    imageUrl: 'assets/Check.png',
    imageWidth: '80px',
    imageAlt: 'icono de check o éxito',
  });
}

condicionesIniciales();