navegador=navigator.userAgent; //busco el "userAgent" del usuario.
//lista de palabras del "userAgent" en los móviles
moviles=["Mobile","iPhone X","iPod","BlackBerry","Opera Mini","Sony","MOT","Nokia","samsung"];
detector=0; //Variable que detectará si se usa un móvil
for (i in moviles) { //comprobar en la lista ...
   //si el método "indexOf" no devuelve -1, indica que la palabra está en el "userAgent"
   compruebo=navegador.indexOf(moviles[i]); 
   if (compruebo>-1) { 
      detector=1; //Si es un móvil, cambio el valor del detector
      }
   }
if (detector==1) { //si es un móvil redirecciono la página.
   location.href="movil/index.html"; //Se redirecciona hacia la versión móvil.
   }