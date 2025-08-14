//FAZ UMA BUSCA NO BANCO DE DADOS
fetch('http://localhost:4000/results', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
   
    })

.then(response => response.json())
.then(data => {
    console.log('Resposta do servidor:', data);
    console.log(data[0].points)
    playerPointsX.innerHTML = 'pontos x = ' + data[0].points
    pontoX = data[0].points
    
    playerPointsO.innerHTML = 'pontos O = ' + data[1].points
    pontoO = data[1].points
})
.catch(error => {
    console.error('Erro ao enviar dados:', error);
});

// registra o player e o ponto no banco de dados
function regsX() {
    fetch('http://localhost:4000/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            player: 'X',
            points: 1, // Adiciona 1 ponto para o jogador X
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta do servidor:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
    restartJgVelha()

}

function regsO() {
    fetch('http://localhost:4000/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            player: 'O',
            points: 1, // Adiciona 1 ponto para o jogador X
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta do servidor:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
    restartJgVelha()

}

function restartJgVelha() { // função para reiniciar o jogo
    quadrado.forEach(element => {
        element.innerHTML = ""
    });

    for( let l = 0; l < 3 ; l++){
        for( let c = 0; c < 3; c++) {
            jgVelha[l][c] = ""
        }
    }

    deuVelha = 0
    control = 0
}