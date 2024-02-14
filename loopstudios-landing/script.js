const body = document.querySelector('body'),
    ul = body.querySelector('ul'),
    // para obtener la lista que va a desplegarse
    btn = body.querySelector('.menu'),
    // para obtener el boton que despliega la lista
    icono= body.querySelector('.bx-menu');
    // para obtener el icono del boton

  btn.addEventListener('click', () => {
    // al hacer click en el boton
    ul.classList.toggle('active');
    // se agrega o se quita la clase active a la lista
    icono.classList.toggle('bx-x');
    body.classList.toggle('overflow');
  });