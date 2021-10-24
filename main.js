//Mudando os dados pelo JavaScript
// Variáveis let - A variável do tipo let pode ter o valor alterado sempre que necessário.
// Variáveis const - A variável do tipo const não pode ter o valor alterado pois seu valor é constante.

// Estrutura de uma função com variável pré definida.
/*function showMeSomething(text) {
        alert(text)
      }
      // Chamar função.
      showMeSomething();*/

const userSocialMedia = {
  // Dentro do objeto, usa-se : para atribuir valores a uma propriedade.

  github: 'NathanaKiw',
  youtube: 'UCcRa_R9skEXQXiWYox1TMjg',
  facebook: 'naathanasiiva',
  twitter: 'nathanasilva18',
  instagram: 'nathana_kiwia'
} //Tipo objeto

function changeSocialMedia() {
  // DOM - Document Object Model - Utilizado para mapear os objetos do navegador.

  // Dentro do documento html, vou buscar um elemento do tipo ID nomeado.
  // TextContent permite acesso o conteúdo do elemento.

  document.getElementById('userName').textContent = 'Nathana Kiwia'
  // O código abaixo representa a mesma função da linha de código acima, porque, o JS entende que um comando que acesse o DOM ou faça algum tipo de alteração é um ID já declarado do Documento HTML. Caso seja utilizado classes ou tag's, o código acima se faz necessário.
  //userName.textContent = "NK";

  for (let li of socialLink.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`

    //alert(social + " - " + li.children[0].href);
    //alert(li.children[0].href)
    //alert(social);
  }
}
//li é uma variável de escopo, só existe enquanto o for estiver rodando
//template string, usa crase -> existe uma variável dentro do texto

changeSocialMedia() //Chamando a função changeSocialMedia
/*Para padronizar os nomes das variáveis:
        camelCase
        PascalCase
        snake_case
        */

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name //Acessa no DOM o userName(propriedade HTML) e o define como o data.name (no JSON recebido acessa o atributo "name" do git hub)
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

/*Arrow functions => contrair uma função/função anônima, elimina o function e o nome da função
function nomedafuncao(argumentos, argumentos2){
  //code
}
argumentos ou (argumentos, argumentos2) ou () => {
  //code, caso só tenha uma resposta, não precisa colocar chaves
}
posso ter quantos .then que quiser (resposta da resposta)
*/
