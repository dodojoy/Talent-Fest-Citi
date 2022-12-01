export default () => {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const template = `
        <body>
            <div class='wrapper'>
                <header>
                    <nav class='nav-bar-qrcode'>
                        <img class='img-logo-nav' src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
                                um arco vermelho em cima da palavra'>
                        <a href='#homepage' class='btn-homepage'><img src='assets/homepage.png' alt='Botão branco de redirecionamento à página inicial'></a>
                    </nav>
                </header>

                <main class='content-qrcode'>
                    <div id='payMsg' class='pay-msg'>
                        <img src='assets/pagamento.png' alt='imagem preta de uma mão de perfil com o simbolo de cifrão dentro de circulo em cima'>
                        <div>
                            <p>Nome do comprador: ${localStorage.getItem('username')}</p>
                            <p>Produto: ${localStorage.getItem('name-product')}</p>
                            <p>Valor final: R$ ${localStorage.getItem('price-product')}</p>
                        </div>
                    </div>

                    <div id='divQrCode' class='div-qr-code'></div>
                </main>

                <div id='send'><button id='btnSend'>Enviar <img id='iconSend'src='assets/send.png' alt='Botão branco de enviar'></button>
                </div>
                

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
            </div>
        </body>
    
    `;
  container.innerHTML = template;

  function geraQR(name, price) {
    const stringEncoded = name + price;
    return `http://api.qrserver.com/v1/create-qr-code/?data=${stringEncoded}&size=150x150`;
  }

  const name = localStorage.getItem('name-product');
  const priceProduct = localStorage.getItem('price-product');

  const containerQrCode = container.querySelector('#divQrCode');
  const qrCode = `
        <div id='QrCode'>
            <img src='${geraQR(name, priceProduct)}'/>
        </div>
    `;
  containerQrCode.innerHTML = qrCode;
  const btnSend = container.querySelector('#send');

  btnSend.addEventListener ("click", () => {
    alert("Código copiado com sucesso!")
  });

  return container;
};
