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
})