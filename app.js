function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

     // se campoPesquisa for uma string sem nada
    if(campoPesquisa == "") {
      section.innerHTML = "<p>Nenhum artista foi encontrado. Precisa digitar nome de um cantor(a) ou um genero musical</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    let generos = "";

    // Itera sobre cada artista nos dados
    for (let dado of dados) {
      nome = dado.nome.toLowerCase()
      descricao= dado.descricao.toLowerCase()
      generos = dado.generos.toLocaleLowerCase()
       // se nome includes campoPesquisa
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || generos.includes(campoPesquisa)){
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p class="genero-meta">${dado.generos}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
      
    }

    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
    
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }