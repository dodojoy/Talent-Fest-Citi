export default () => {
    const resetContainer = document.createElement('div');
    const template = `
    <img class="logo" src="assets/logo.jpg">
    <h1 class="bem-vindo">Bem vindo ao Citi Shop</h1>
    <form>
      <input type="email" id="email" placeholder="E-MAIL">
      <input type="password" id="password" placeholder="SENHA">
      <input id="btn-login" type="submit" value="ENTRAR" />
      <button id="btn-google">
        <img id="img-google" src="assets/btn_google_signin_light_normal_web@2x.png" alt="botão de login com conta google">
      </button>
    </form>
    <p class="msg-error"></p>
    <footer>
      <h4>Não possui uma conta?</h4>
      <a id="btn-register" href="#register">Cadastre-se!</a>
    </footer>
            `;
    resetContainer.innerHTML = template;
    return resetContainer;
  };
  