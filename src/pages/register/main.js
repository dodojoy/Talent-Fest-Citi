export default () => {
    const resetContainer = document.createElement('div');
    resetContainer.setAttribute('class', 'container');

    const template = `
    <img class="logo" src="assets/logoazul.png">
    <h1 class="start">Bem vindo ao Citi Shop</h1>
    <form class="form-input">
      <input class="input-name" type="password" id="password" placeholder="NOME">
      <input class="input-email" type="email" id="email" placeholder="E-MAIL">
      <input class="input-password" type="password" id="password" placeholder="SENHA">
      <input class="input-password-confirm" type="password" id="password" placeholder="CONFIRME SUA SENHA">
      <input id="btn-register" type="submit" value="CADASTRAR" />
    </form>
    <p class="msg-error"></p>
    <footer class="footer">
      <h4 class="account">Já possui uma conta?</h4>
      <a id="btn-pag-login" href="#register">Faça login!</a>
    </footer>
            `;
    resetContainer.innerHTML = template;
    return resetContainer;
};