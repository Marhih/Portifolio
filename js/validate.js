function validarNome(){
  var nome = document.getElementById('nome');
  if (nome.value == '') {
    alert('Nome não informado!');
    return false;
    nome.focus();
  } return true;
}

function validarEmail(){
  var email = document.getElementById('email');
  if (email.value == '') {
    alert('Por favor, informe seu email.');
    return false;
    email.focus();
  } return true;
}

function checarEmail(){
  var email = document.getElementById('email');
  if (email.value == '' || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1) {
    alert( "Por favor, informe um E-MAIL válido!" );
	  return false;
  }return true;
}

function validarAssunto(){
  var assunto = document.getElementById('assunto');
  if (assunto.value == '') {
    alert('Assunto não informado.');
    return false;
    assunto.focus();
  } return true;
}

function validarMensagem(){
  var mensagem = document.getElementById('mensagem');
  if (mensagem.value == '') {
    alert('Campo de mensagem está vazio.');
    return false;
    mensagem.focus();
  } return true;
}

function validar(){
   validarNome();
   validarEmail();
   checarEmail();
   validarAssunto();
   validarMensagem();
 }
