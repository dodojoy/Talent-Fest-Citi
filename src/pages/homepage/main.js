export default () => {
    const container = document.createElement('div');
  
    const templateProducts = `
        <header>
            <nav>
                <img src='' alt='Logo do CitiBank, com as palavras Citi escrito em letras brancas e 
                    um arco vermelho em cima da palavra>
                <a href='#cart'/>
                <a href='#login'> Faça login ou cadastre-se</a>
            </nav>
        </header>
        <body>
            <main>
                <nav>
                    <ol>
                        <li>Todos os Produtos</li>
                        <li>Mouse</li>
                        <li>Teclado</li>
                        <li>Headset</li>
                        <li>Webcam</li>
                        <li>Mousepad</li>
                        
        </body>

  `;

  container.innerHTML = templateProducts;
  return container;

}

