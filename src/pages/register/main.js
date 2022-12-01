import {
  registerWithEmailAndPassword,
} from '../../lib/firebase-auth.js';

import {
  validateRegisterForm, handleFirebaseErrors,
} from '../../lib/validation.js';

export default () => {
  const resetContainer = document.createElement('div');
  resetContainer.setAttribute('class', 'container');

  const template = `
    <img class='logo' src='assets/logoazul.png'>
    <h1 class='start'>Bem vindo ao Citi Shop</h1>
    <form class='form-input'>
      <input class='input-name' type='text' id='input-name' placeholder='NOME'>
      <input class='input-email' type='email' id='input-email' placeholder='E-MAIL'>
      <input class='input-password' type='password' id='input-password' placeholder='SENHA'>
      <input class='input-password-confirm' type='password' id='input-password-confirm' placeholder='CONFIRME SUA SENHA'>
      <input id='btn-register' type='submit' value='CADASTRAR' />
    </form>
    <p id="firebase-warning-messages" class="form-warning-messages hide"></p>
    <p id="form-validation-messages" class='msg-error hide'></p>
    <footer class='footer'>
      <h4 class='account'>Já possui uma conta?</h4>
      <a id='btn-pag-login' href='#login'>Faça login!</a>
    </footer>
     `;
  resetContainer.innerHTML = template;

  const name = resetContainer.querySelector('#input-name');
  const email = resetContainer.querySelector('#input-email');
  const password = resetContainer.querySelector('#input-password');
  const confirmPassword = resetContainer.querySelector('#input-password-confirm');
  const form = resetContainer.querySelector('.form-input');
  const loginBtn = resetContainer.querySelector('#btn-pag-login');
  const formValidationMessages = resetContainer.querySelector('#form-validation-messages');
  const firebaseWarningMessages = resetContainer.querySelector('#firebase-warning-messages');

  function handleErrors(error) {
    const userFriendlyMessage = handleFirebaseErrors(error.code);
    firebaseWarningMessages.classList.remove('hide');
    formValidationMessages.classList.add('hide');
    firebaseWarningMessages.innerHTML = userFriendlyMessage;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formValidation = validateRegisterForm(
      name.value,
      email.value,
      password.value,
      confirmPassword.value,
    );
    if (formValidation) {
      formValidationMessages.classList.remove('hide');
      formValidationMessages.innerHTML = formValidation;
    } else {
      registerWithEmailAndPassword(name.value, email.value, password.value)
        .then(() => {
          window.location.hash = '#homepage';
          localStorage.setItem('username', name.value);
        })
        .catch((error) => {
          handleErrors(error);
        });
    }
  });

  loginBtn.addEventListener('click', () => {
    window.location.hash = '#homepage';

  });

  return resetContainer;
};