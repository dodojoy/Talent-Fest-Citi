import { getAllProducts } from '../../lib/firebase-firestore';

export default () => {
  const container = document.createElement('div');

  const templateProducts = `
      <body>
          <header>
            <nav class='nav-bar-homepage'>
                <img class='img-logo-nav' src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
                        um arco vermelho em cima da palavra'>
                <div>
                    <a href='#login' class='btn-login'><img src='assets/login.png' alt='Botão branco de redirecionamento à página de login'>Faça login ou cadastre-se</a>
                    <a href='#cart' class='btn-cart'><img src='assets/carrinho.png' alt='Botão branco de redirecionamento ao carrinho'></a>
                </div>
            </nav>
          </header>

          <main>
              <nav class='nav-filter-homepage'>
                  <ul>
                      <li data-product='allProducts' class='list-allproducts tag-products'>Todos os Produtos</li>
                      <li data-product='mouse' class='tag-products'>Mouse</li>
                      <li data-product='keyboard' class='tag-products'>Teclado</li>
                      <li data-product='headset' class='tag-products'>Headset</li>
                      <li data-product='webcam' class='tag-products'>Webcam</li>
                      <li data-product='mousepad' class='tag-products'>Mousepad</li>
                  </ul>    
              </nav>
              
              <div id='cards-products' class='cards-products'>
              </div>
          </main>

          <footer class='footer-homepage'>
            <div class='footer-logo-copyright'>
                <img src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
                um arco vermelho em cima da palavra'>
                <p>© 2022 Citigroup Inc. <br> Todos os direitos reservados.</p>
            </div>
            <a href='#developers'>Desenvolvedoras</a>
            <a href='https://corporateportal.brazil.citibank.com/quem-somos.htm' target='_blank'>Sobre o Cit</a>
          </footer>
      </body>


`;

  const menuProducts = Array.from(container.querySelectorAll('.tag-products'));

  container.innerHTML = templateProducts;

  const printProducts = async (category) => {
    let productsArr = await getAllProducts();

    if (category !== 'allProducts') {
      productsArr = productsArr.filter((product) => product.categoria.includes(category));
    }

    const productsTemplate = productsArr.map((product) => `
      <div id="product-card" class="product-card">
        <img src='${product.img}'></img>
        <ul>
          <li>${product.nome}</li>
          <li>R$ ${product.preco}</li>
        </ul>
      </div>
    `).join('');

    container.querySelector('#cards-products').innerHTML = productsTemplate;

    menuProducts.forEach((prod) => {
      prod.addEventListener('click', () => {
        printProducts(prod.dataset.product);
      });
    });
  };

  printProducts('allProducts');

  return container;
};
