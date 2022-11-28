export default () => {
    const container = document.createElement('div');
  
    const templateProducts = `
        <header>
            <nav>
                <img src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
                    um arco vermelho em cima da palavra'>
                <a href='#login'><img src='assets/login.png' alt='Botão branco de redirecionamento à página de login'>Faça login ou cadastre-se</a>
                <a href='#cart'><img src='assets/carrinho.png' alt='Botão branco de redirecionamento ao carrinho'></a>
            </nav>
        </header>
        <body>
            <main>
                <nav>
                    <ul>
                        <li>Todos os Produtos</li>
                        <li>Mouse</li>
                        <li>Teclado</li>
                        <li>Headset</li>
                        <li>Webcam</li>
                        <li>Mousepad</li>
                    </ul>    
                </nav>
                
                <div class=cards-products>
                </div>

            </main>
        </body>
        <footer>
            <img src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
            um arco vermelho em cima da palavra'>
            <p>© 20xx Citigroup Inc. Todos os direitos reservados.</p>
            
        </footer>

  `;

  container.innerHTML = templateProducts;
  return container;

}

