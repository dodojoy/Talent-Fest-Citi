export default () => {
    const Container = document.createElement('div');
    Container.setAttribute('class', 'container');

    const template = `
        <body>
            <div class='wrapper'>
                <header>
                    <nav class='nav-bar-homepage'>
                        <img class='img-logo-nav' src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e 
                                um arco vermelho em cima da palavra'>
                        <a href='#homepage' class='btn-homepage'><img src='assets/homepage.png' alt='Botão branco de redirecionamento à página inicial'>Página Inicial</a>
                    </nav>
                </header>

                <main>
                <section id='cards-products' class='cards-products developers'>

                    <div class='product-card'>
                        <div class='filtro'>
                            <img src='./assets/foto-andrea.png' alt='Foto da desenvolvedora Andrea,
                            mulher de cabelos castanhos e ondulados e soltos usando uma blusa verde. 
                            Ela está levemente sorridente e também usa brincos aamrelos.'>
                            <h3>Andrea dos Santos</h3>
                            <p>Aluna da 8º geração da Laboratória</p>
                            <a href='https://github.com/Canzua' target='_blank'><img src='assets/github.png'
                                    alt='github'></a>
                            <a href='https://www.linkedin.com/in/andreasiqueiradossantos/' target='_blank'><img
                                    src='assets/linkedin.png' alt='linkedin'></a>
                        </div>
                    </div>

                    <div class='product-card'>
                        <div class='filtro'>
                            <img src='./assets/foto-anna.png' alt='Foto da desenvolvedora Anna Clara,
                            uma mulher com cabelos escuros lisos e com franja, usando um colar vermelho e blusa branca.
                            Ela está sorrindo'>
                            <h3>Anna Clara Andrade</h3>
                            <p>Aluna da 8º geração da Laboratória</p>
                            <a href='https://github.com/andradeannac' target='_blank'><img src='assets/github.png'
                                    alt='github'></a>
                            <a href='https://www.linkedin.com/in/andradeannac/' target='_blank'><img
                                    src='assets/linkedin.png' alt='linkedin'></a>
                        </div>
                    </div>
                    
                    <div class='product-card'>
                        <div class='filtro'>
                            <img src='./assets/foto-joy.png' alt='Foto da desenvolvedora Joyce, uma mulher de cabelos ruivos
                            e cacheados preso em um rabo de cavalo, ela usa um colar dourado, blazer branco
                            e oculos com armação redonda'>
                            <h3>Joyce Teodoro</h3>
                            <p>Aluna da 8º geração da Laboratória</p>
                            <a href='https://github.com/dodojoy' target='_blank'><img src='assets/github.png'
                                    alt='github'></a>
                            <a href='https://www.linkedin.com/in/joyce-teodoro/' target='_blank'><img
                                    src='assets/linkedin.png' alt='linkedin'></a>
                        </div>
                    </div>

                    <div class='product-card'>
                        <div class='filtro'>
                            <img src='./assets/foto-mi.png' alt='Foto da desenvolvedora Michelle, ela usa uma blusa azul
                            índigo, brincos de aros redondos dourados, cabelo castanho escuro e cacheado, ela está
                            sorrindo'>
                            <h3>Michelle Araujo</h3>
                            <p>Aluna da 8º geração da Laboratória</p>
                            <a href='https://github.com/asmih' target='_blank'><img src='assets/github.png'
                                    alt='github'></a>
                            <a href='https://www.linkedin.com/in/michelle-de-araujo-santana/' target='_blank'><img
                                    src='assets/linkedin.png' alt='linkedin'></a>
                        </div>
                    </div>
            
                    <div class='product-card'>
                        <div class='filtro'>
                            <img src='./assets/foto-poly.png' alt='Foto da desenvolvedora Polyana, uma mulher com cabelos castanhos escuros lisos e soltos,
                            ela usa óculos de armação levemente arrendodada com a cor bordô, brincos vermelhos, um colar prata
                            e blusa rosa claro com uma blazer rosa choque Ela está sorrindo'>
                            <h3>Polyana Magalhães</h3>
                            <p>Aluna da 8º geração da Laboratória</p>
                            <a href='https://github.com/polyanagm' target='_blank'><img src='assets/github.png' alt='github'></a>
                            <a href='https://www.linkedin.com/in/polyanagm/' target='_blank'><img
                                    src='assets/linkedin.png' alt='linkedin'></a>
                        </div>
                    </div>
                </section>
                </main>

                <footer class='footer-homepage'>
                    <div class='footer-logo-links'>
                        <img src='assets/logo-citi.png' alt='Logo do CitiBank, com a palavra Citi escrito em letras brancas e um arco vermelho em cima da palavra'>
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
