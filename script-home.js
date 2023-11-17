function f() {
  document.getElementsByClassName('menu-suspenso')[0].classList.toggle('baixo');
  document.getElementsByClassName('seta')[0].classList.toggle('sem-seta');
  if (document.getElementsByClassName('menu-suspenso')[0].classList.contains('baixo')) {
    setTimeout(function() {
      document.getElementsByClassName('menu-suspenso')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('menu-suspenso')[0].style.overflow = 'hidden'
  }
}

function Enviar() {

  var nome = document.getElementById("cNome");

  if(nome.value != "") {
      alert("Agradecemos a sua mensagem " + nome.value + ".\nSeus dados foram encaminhados com sucesso e logo logo entraremos em contato!");
  }
}