export default () => {
  const container = document.createElement('div');

  const templateProducts = `
      <body>
          <header>
            <nav class='nav-bar-homepage'>
                <div class="div-menu">
                    <button id="btnMenu" class="btn-menu"><img src="assets/menu.png"</button>
                </div>
                <img class='img-logo-nav' src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
                        um arco vermelho em cima da palavra'>
                <div>
                    <a href='#login' class='btn-login'><img src='assets/login.png' alt='Botão branco de redirecionamento à página de login'>Faça login ou cadastre-se</a>
                    <a href='#cart' class='btn-cart'><img src='assets/carrinho.png' alt='Botão branco de redirecionamento ao carrinho'></a>
                </div>
            </nav>
          </header>

          <main>
            <nav class='nav-filter-homepage' id='navFilter'>
                <ul id='menu' class='menu'>
                    <li class='list-allproducts'>Todos os Produtos</li>
                    <details>
                        <summary class='categories'>Categorias</summary>
                        <li>Mouse</li>
                        <li>Teclado</li>
                        <li>Headset</li>
                        <li>Webcam</li>
                        <li>Mousepad</li>
                    </details>
                </ul> 
            </nav>
              
            <div class=cards-products>
            </div>
          </main>

          <footer class='footer-homepage'>
          <div class='footer-logo-links'>
            <img src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e um arco vermelho em cima da palavra'>
            <a href='#developers'>Desenvolvedoras</a>
            <a href='https://corporateportal.brazil.citibank.com/quem-somos.htm' target='_blank'>Sobre o Cit</a>
          </div>
          <div class='footer-copyright'>
            <p>© 2022 Citigroup Inc. Todos os direitos reservados.</p>
          </div>
          </footer>
      </body>


`;
container.innerHTML = templateProducts;

const menu = container.querySelector('#btnMenu')

menu.addEventListener('click', () => {
    const navFilter = container.querySelector('#navFilter')
    navFilter.classList.toggle('active');
  });

return container;

}