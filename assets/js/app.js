const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  //Rescato el mensaje con el botón.
  let comment = document.getElementById('message').value;

  //Posteo el mensaje, donde dejaré los mensajes en HTML.
  const post = document.getElementById('post');

  //Crear un div contenedor.
  const newComments = document.createElement('div');

  //Validar que el textarea tenga un comentario.
  /*if(comment.length === 0 || comment === null) {
    ;
    return false;
  }*/

  //Defino parentesco.
  let textNewComment = document.createTextNode(comment);

  const contenedorElemento = document.createElement('p');

  contenedorElemento.appendChild(textNewComment);

  newComments.appendChild(contenedorElemento);

  post.appendChild(newComments);
})

//Contar los carácteres que faltan.
let count = () => { 
  var max = '150'; 
  var str = document.getElementById('message').value; 
  var lngh = str.length; 

      if(lngh <= max) { 
           document.getElementById('contador').value = max - lngh; 
      } else { 
           document.getElementById('message').value = str.substr(0, max);
      } 
}
