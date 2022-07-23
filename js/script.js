const championImage = document.querySelector('.img-champion')
const btn = document.querySelector('.send')
const nameChampion = document.querySelector('.span')

// Váriavel definida para previnir que tenha sempre uma imagem padrão //
var img = championImage.src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg';

// Evento de click //
btn.addEventListener('click', function(e) {
    // Previnir que o form seja enviado //
    e.preventDefault();

    const name = document.querySelector('.nome')
    var value = name.value;
    // Se o campo onde o nome e inputado estiver vázio o seguinte código é disparado //
    if(value == '') {
        nameChampion.innerHTML = 'Digite o nome do campeão'
        var img = championImage.src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg';
    } 
    // Se a primeira condição não for atendida executa esse bloco de código, que pega o nome inputado trata a forma que foi escrita e colocar
    //o valor numa váriavel que será usada na url que busca a imagem.
    // Exibe na tela o nome do campeão e limpa o campo de input. 
    else {
        var value = name.value; 
        value = value.toLowerCase();
        value = value[0].toUpperCase() + value.substring(1);
        var img  = championImage.src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+ value +'_0.jpg';
        nameChampion.innerHTML = value
        name.value = ''
    }
})

// Trata o seguinte erro: caso não receba o nome de um campeão ele irá definir uma foto padrão e exibir uma mensagem de erro//
function tratarErro() {
    nameChampion.innerHTML = 'Campeão inválido!'
    championImage.src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg';
}






