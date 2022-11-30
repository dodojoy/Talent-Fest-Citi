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
                <section id='cards-products' class='cards-products'> </section>

                <section class="cards-andrea">
                    <div class="filtro">
                        <h3>Andrea dos Santos</h3>
                        <p>Aluna da 8º geração da Laboratória</p>
                        <a href="https://github.com/Canzua" target="_blank"><img src="assets/github.png"
                                alt="github"></a>
                        <a href="https://www.linkedin.com/in/andreasiqueiradossantos/" target="_blank"><img
                                src="assets/linkedin.png" alt="linkedin"></a>
                    </div>
                </section>

                <section class="cards-anna">
                    <div class="filtro">
                        <h3>Anna Clara Andrade</h3>
                        <p>Aluna da 8º geração da Laboratória</p>
                        <a href="https://github.com/andradeannac" target="_blank"><img src="assets/github.png"
                                alt="github"></a>
                        <a href="https://www.linkedin.com/in/andradeannac/" target="_blank"><img
                                src="assets/linkedin.png" alt="linkedin"></a>
                    </div>
                </section>
                
                <section class="cards-joyce">
                    <div class="filtro">
                        <h3>Joyce Teodoro</h3>
                        <p>Aluna da 8º geração da Laboratória</p>
                        <a href="https://github.com/dodojoy" target="_blank"><img src="assets/github.png"
                                alt="github"></a>
                        <a href="https://www.linkedin.com/in/joyce-teodoro/" target="_blank"><img
                                src="assets/linkedin.png" alt="linkedin"></a>
                    </div>
                </section>

                <section class="cards-michele">
                    <div class="filtro">
                        <h3>Michele Araujo</h3>
                        <p>Aluna da 8º geração da Laboratória</p>
                        <a href="https://github.com/asmih" target="_blank"><img src="assets/github.png"
                                alt="github"></a>
                        <a href="https://www.linkedin.com/in/michelle-de-araujo-santana/" target="_blank"><img
                                src="assets/linkedin.png" alt="linkedin"></a>
                    </div>
                </section>
        
                <section class="cards-poly">
                    <div class="filtro">
                        <h3>Polyana Magalhães</h3>
                        <p>Aluna da 8º geração da Laboratória</p>
                        <a href="https://github.com/polyanagm" target="_blank"><img src="assets/github.png" alt="github"></a>
                        <a href="https://www.linkedin.com/in/polyanagm/" target="_blank"><img
                                src="assets/linkedin.png" alt="linkedin"></a>
                    </div>
                </section>
        
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
            </div>
        </body>
    
    `;
    Container.innerHTML = template;

    return Container;
}
