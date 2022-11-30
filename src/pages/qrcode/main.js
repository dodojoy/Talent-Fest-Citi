export default () => {
    const Container = document.createElement('div');
    Container.setAttribute('class', 'container');

    const template = `
        <body>
            <div class='wrapper'>
                <header>
                    <nav class='nav-bar-qrcode'>
                        <img class='img-logo-nav' src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
                                um arco vermelho em cima da palavra'>
                        <a href='#homepage' class='btn-homepage'><img src='assets/homepage.png' alt='Botão branco de redirecionamento à página inicial'>Página Inicial</a>
                    </nav>
                </header>

                <main>
                    <div id='payMsg' class='pay-msg'>
                        <img src='assets/pagamento.png' alt='imagem preta de uma mão de perfil com o simbolo de cifrão dentro de circulo em cima'>
                        <p id='txtMsg'>Mensagem de pagamento</p>
                    </div>
                    <div id='divQrCode' class='div-qr-code'>
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
            </div>
        </body>
    
    `;
    Container.innerHTML = template;

    const containerQrCode = Container.querySelector('#divQrCode')
    const qrCode = `
        <div id='QrCode'>
            <img src='http://api.qrserver.com/v1/create-qr-code/?data=exemplo&size=150x150'/>
        </div>
    `;
    containerQrCode.innerHTML = qrCode;

    return Container;
}
