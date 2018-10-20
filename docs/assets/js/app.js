  //Rescato el valor del boton y le doy funcionalidad.
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  //Rescato el mensaje con el botón.
  let comment = document.getElementById('message').value;

  //Posteo el mensaje, donde dejaré los mensajes en HTML.
  const post = document.getElementById('post');

  //Crear un div contenedor.
  const newComments = document.createElement('div');

  //Defino parentesco.
  let textNewComment = document.createTextNode(comment);

  const contenedorElemento = document.createElement('p');

  contenedorElemento.appendChild(textNewComment);

  newComments.appendChild(contenedorElemento);

  post.appendChild(newComments);
});

//Deshabilitar el boton si no hay carácteres escritos.
const disableBtn = () => {
  let commentsBtn = document.getElementById('message').value;  
  
	if(commentsBtn.length > 0){
    document.getElementById('btn').removeAttribute('disabled');  
	}
};

//Contar los carácteres que faltan.
let count = () => { 
  let max = '149'; 
  let str = document.getElementById('message').value; 
  let lngh = str.length; 

      if(lngh <= max) { 
           document.getElementById('contador').value = max - lngh; 
      } else { 
           document.getElementById('message').value = str.substr(0, max);
      } 
}
