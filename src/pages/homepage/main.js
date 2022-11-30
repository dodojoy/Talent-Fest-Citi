import { statusUser} from '../../lib/firebase-auth.js';
import { getAllProducts } from '../../lib/firebase-firestore.js';

export default () => {
  const container = document.createElement('div');

  const templateProducts = `
      <body>
        <div class="wrapper">
        <header>
          <nav class='nav-bar-homepage'>
              <div class="div-menu">
                  <button id="btnMenu" class="btn-menu"><img src="assets/menu.png"</button>
              </div>
              <img class='img-logo-nav' src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
                      um arco vermelho em cima da palavra'>
              <div>
                  <a href='#login' class='btn-login'><img src='assets/login.png' alt='Botão branco de redirecionamento à página de login'></a>
                  <a href='#cart' class='btn-cart'><img src='assets/carrinho.png' alt='Botão branco de redirecionamento ao carrinho'></a>
              </div>
          </nav>
        </header>
      
        <main class='homepage-main'>
          <section class='nav-filter-side'>
            <nav class='nav-filter-homepage' id='navFilter'>
                <ul id='menu' class='menu'>
                    <li data-product='allProducts' class='list-allproducts tag-products'>Todos os Produtos</li>
                    <li data-product='mouse' class='tag-products'>Mouse</li>
                    <li data-product='keyboard' class='tag-products'>Teclado</li>
                    <li data-product='headset' class='tag-products'>Headset</li>
                    <li data-product='webcam' class='tag-products'>Webcam</li>
                    <li data-product='mousepad' class='tag-products'>Mousepad</li>
                </ul> 
            </nav>
          </section>
    
          <section id='cards-products' class='cards-products'>
            
          </section>
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

  const menuProducts = Array.from(container.querySelectorAll('.tag-products'));
  const menu = container.querySelector('#btnMenu');

  menu.addEventListener('click', () => {
    const navFilter = container.querySelector('#navFilter');
    navFilter.classList.toggle('active');
  });

  const printProducts = async (category) => {
    let productsArr = await getAllProducts();

    if (category !== 'allProducts') {
      productsArr = productsArr.filter((product) => product.categoria.includes(category));
    }

    const productsTemplate = productsArr.map((product) => `
      <div id="product-card" class="product-card" data-product-id=${product.SKU}>
        <img id="img-card" src='${product.img}'></img>
        <ul>
          <li>${product.nome}</li>
          <li>R$ ${product.preco}</li>
        </ul>
        <button data-product-id=${product.SKU} id='open-modal' class="btn-modal">Ver mais</button>
        <div id="fade" class="none"></div>
  
        <div id='modal-product-${product.SKU}' class='none modal-product' >
          <button id='close-modal'>X</button>
          <img class='img-modal-product' src='${product.img}'></img>
          <ul>
            <li class='modal-name-product'>${product.nome}</li>
            <li class='modal-description-product'>${product.descricao}</li>
            <li class='modal-price-product'>R$ ${product.preco}</li>
          </ul>
          <button id='buy-product' data-name-product=${product.nome} data-price-product=${product.preco}>Comprar</button>
        </div>
      </div>
    `).join('');

    container.querySelector('#cards-products').innerHTML = productsTemplate;

    const openModal = Array.from(container.querySelectorAll('.btn-modal'));
    const closeModal = container.querySelector('#close-modal');
    const buyBtn = container.querySelector('#buy-product');

    const fade = container.querySelector('#fade');

    buyBtn.addEventListener('click', (product) => {
      const id = product.currentTarget.dataset.nameProduct;
      const name = container.querySelector(`[data-name-product="${id}"]`);
      statusUser(async (logged) => {
        if (logged) {
          window.location.hash = '#qrcode';
        } else {
          window.location.hash = '#login';
        }
      });
      localStorage.setItem('price-product', name.dataset.priceProduct);
      return localStorage.setItem('name-product', name.dataset.nameProduct);
    });

    function toggle(id) {
      const modal = container.querySelector(`#modal-product-${id}`);
      modal.classList.toggle('none');
      modal.setAttribute('data-idProduct', id);
      fade.classList.toggle('none');
    }

    openModal.forEach((btn) => {
      btn.addEventListener('click', (el) => {
        toggle(el.currentTarget.dataset.productId);
      });
    });

    closeModal.addEventListener('click', () => {
      const closemodal = container.querySelector('.modal-product');
      closemodal.classList.toggle('none');
      fade.classList.toggle('none');
    });

    menuProducts.forEach((prod) => {
      prod.addEventListener('click', () => {
        printProducts(prod.dataset.product);
      });
    });
  };

  printProducts('allProducts');

  return container;
};
