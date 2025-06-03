/* Collapsible*/
const collapsibles = document.querySelectorAll( '.collapsible' );
if( collapsibles ){
  collapsibles.forEach( ( btn ) => {
    btn.addEventListener( 'click', () => {
      btn.classList.toggle( 'open' );
      const content = btn.nextElementSibling;
      content.classList.toggle( 'open' );
    } );
  } );
}

/*Send Form*/

const form = document.querySelector( '#formContact' );
const alert = document.querySelector( '.alert' );

function sendForm( e ){
  e.preventDefault();
  if( form && alert ){
    form.style.display = 'none';
    alert.classList.remove( 'hidden' );
  }
}

if( form ){
  form.addEventListener( 'submit', sendForm );
}
