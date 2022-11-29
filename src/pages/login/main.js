import {
  loginWithEmailAndPassword,
  loginWithGoogle
} from '../../lib/firebase-auth.js';

import {
  handleFirebaseErrors,
  validateLoginForm,
} from '../../lib/validation.js';

export default () => {
    const resetContainer = document.createElement('div');
    resetContainer.setAttribute('class', 'container');

    const template = `
    <img class='logo' src='assets/logoazul.png'>
    <h1 class='start'>Bem vindo ao Citi Shop</h1>
    <form class='form-input'>
      <input class='input-email' type='email' id='email' placeholder='E-MAIL'>
      <input class='input-password' type='password' id='password' placeholder='SENHA'>
      <input id='btn-login' type='submit' value='ENTRAR' />
      <button id='btn-google'>
        <img id='img-google' src='assets/btn_google_signin_light_normal_web@2x.png' alt='botão de login com conta google'>
      </button>
    </form>
    <p id='reset-password'>Esqueceu sua senha?</p>
    <p class='msg-error'></p>
    <footer class='footer'>
      <h4 class='account'>Não possui uma conta?</h4>
      <a id='btn-pag-register' href='#register'>Cadastre-se!</a>
    </footer>
            `;
    resetContainer.innerHTML = template;

    resetContainer.innerHTML = template;

  const email = resetContainer.querySelector('#email');
  const password = resetContainer.querySelector('#password');
  const btnLogin = resetContainer.querySelector('#btn-login');
  const formValidationMessages = resetContainer.querySelector('#form-validation-messages');
  const firebaseWarningMessages = resetContainer.querySelector('#firebase-warning-messages');
  // const returnBtn = resetContainer.querySelector('#return-btn');

  // returnBtn.addEventListener('click', () => window.history.back());

  function handleErrors(error) {
    const userFriendlyMessage = handleFirebaseErrors(error.code);
    // firebaseWarningMessages.classList.remove('hide');
    // formValidationMessages.classList.add('hide');
    firebaseWarningMessages.innerHTML = userFriendlyMessage;
  }

  btnLogin.addEventListener('click', () => {
    const formValidation = validateLoginForm(email.value, password.value);
    if (formValidation) {
      formValidationMessages.classList.remove('hide');
      firebaseWarningMessages.classList.add('hide');
      formValidationMessages.innerHTML = formValidation;
    } else {
      loginWithEmailAndPassword(email.value, password.value)
        .catch((error) => {
          handleErrors(error);
        });
    }
  });

  const googleBtn = resetContainer.querySelector('#btn-google');

  googleBtn.addEventListener('click', () => {
    loginWithGoogle()
      .catch((error) => {
        handleErrors(error);
      });
  });
  return resetContainer;
};

  
  