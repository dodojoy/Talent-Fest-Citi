

export default () => {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'modal');
  
    modal.innerHTML = ` 
        
      <section class="modal-content">
        <form class="input-post"> 
        <img id="img-card" src='${product.img}'></img>
        <ul>
          <li>${product.nome}</li>
          <li>R$ ${product.preco}</li>
          <li>${product.descricao}</li>
        </ul>
      </div>
    `.join('');
    modal.style.display = 'block';

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    return modal;
};
 


    //       <input type=text class="inputTitle" placeholder="Título da sua receita">
    //       <div class="input-smaller">
    //         <select class="inputDifficult" name="difficult">
    //           <option name="difficult" value= "difficult" selected>Dificuldade</option>
    //           <option name="easy" value="easy">Fácil</option>
    //           <option name="medium" value="medium">Médio</option>
    //           <option name="hard" value="hard">Difícil</option>
    //         </select>
    //         <input type=number class="inputTime" placeholder="Duração em minutos">
    //       </div>
    //         <textarea class="inputIngredients" 
    //         placeholder="Ingredientes separados por vírgula e espaço. (ex: 1 xícara de farinha, 2 ovos)"></textarea>
    //       <textarea type=text class="inputPrepare" placeholder="Modo de preparo"></textarea>
    //     </form> 
    //     <p class="fill-all-inputs"></p>
    //     <div class="btns">
    //       <input type="submit" value="Voltar" class="btn-back">
    //       <input type="submit" value="Publicar" class="btn-publish">
    //     </div>
    //   </section>
