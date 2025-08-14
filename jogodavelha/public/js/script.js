let quadrado = document.querySelectorAll(".quadrado")
let player = document.getElementById("player")
let verifica = document.getElementById("verifica")
let playerPointsX = document.getElementById("player-x")
let playerPointsO = document.getElementById("player-o")
let pontoX = 0
let pontoO = 0
let control = 0 //variavel de controle para alternar entre o jogador X OU O
let deuVelha = 0

let jgVelha = [
    ['','',''],
    ['','',''],
    ['','',''],
]
quadrado.forEach((element, number) => {
    element.addEventListener("click", () => {
        if(element.innerHTML == '') { // SE o elemento estiver vazio ele vai ser preenchido com o jogador X OU O
            if(control % 2 == 0) {
                element.innerHTML = "X"
                player.innerHTML = "sua vez jogador O"
                control++

            }else {
            
                element.innerHTML = 'O'
                player.innerHTML = "sua vez jogador X"
                control++
            }
        }

        switch (number) { // de acordo com o conteudo que estiver dentro do quadrado ele armazena o valor em uma matriz
            case 0 :
                jgVelha[0][0] = element.innerHTML
                break
            case 1 :
                jgVelha[0][1] = element.innerHTML
                break
            case 2 : 
                jgVelha[0][2] = element.innerHTML
                break
            case 3 : 
                jgVelha[1][0] = element.innerHTML
                break
            case 4 : 
                jgVelha[1][1] = element.innerHTML
                break
            case 5 : 
                jgVelha[1][2] = element.innerHTML
                break
            case 6 : 
                jgVelha[2][0] = element.innerHTML
                break
            case 7 : 
                jgVelha[2][1] = element.innerHTML
                break
            case 8 : 
                jgVelha[2][2] = element.innerHTML
                break

        }
        
        // jogador X
        // se os quadrados estiverem preenchidos ele vai verificar se houve um ganhador
        // essa parte verifica do jogador X
        if (jgVelha[0][0] == "X" && jgVelha[0][1] == "X" && jgVelha[0][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
            playerPointsX.innerHTML = `Pontos x = ${pontoX += 1}`
            regsX()
            restartJgVelha()
        }
        
        else if (jgVelha[1][0] == "X" && jgVelha[1][1] == "X" && jgVelha[1][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
            playerPointsX.innerHTML = `Pontos x = ${pontoX += 1}`
             regsX()
            restartJgVelha()
        }
        else if (jgVelha[2][0] == "X" && jgVelha[2][1] == "X" && jgVelha[2][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
            playerPointsX.innerHTML = `Pontos x = ${pontoX += 1}`
             regsX()
            restartJgVelha()
        }


        else if (jgVelha[0][0] == "X" && jgVelha[1][0] == "X" && jgVelha[2][0] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
            playerPointsX.innerHTML = `Pontos x = ${pontoX += 1}`
             regsX()
            restartJgVelha()
        }
        else if (jgVelha[0][1]== "X" && jgVelha[1][1]== "X" && jgVelha[2][1] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
            playerPointsX.innerHTML = `Pontos x = ${pontoX += 1}`
             regsX()
            restartJgVelha()
        }
        else if (jgVelha[0][2]== "X" && jgVelha[1][2]== "X" && jgVelha[2][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
            playerPointsX.innerHTML = `Pontos x = ${pontoX += 1}`
             regsX()
            restartJgVelha()
        }

        else if (jgVelha[0][0] == "X" && jgVelha[1][1] == "X" && jgVelha[2][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
            playerPointsX.innerHTML = `Pontos x = ${pontoX += 1}`
             regsX()
            restartJgVelha()
        }
        else if (jgVelha[0][2] == "X" && jgVelha[1][1] == "X" && jgVelha[2][0] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
            playerPointsX.innerHTML = `Pontos x = ${pontoX += 1}`
             regsX()
            restartJgVelha()
        }

        // jogador O
        // essa parte verifica do jogador O

        else if (jgVelha[0][0] == "O" && jgVelha[0][1] == "O" && jgVelha[0][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
            playerPointsO.innerHTML = `Pontos o = ${pontoO += 1}`
             regsO()
            restartJgVelha()
        }
        else if (jgVelha[1][0] == "O" && jgVelha[1][1] == "O" && jgVelha[1][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
            playerPointsO.innerHTML = `Pontos o = ${pontoO += 1}`
             regsO()
            restartJgVelha()
        }
        else if (jgVelha[2][0] == "O" && jgVelha[2][1] == "O" && jgVelha[2][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
            playerPointsO.innerHTML = `Pontos o = ${pontoO += 1}`
             regsO()
            restartJgVelha()
        }


        else if (jgVelha[0][0] == "O" && jgVelha[1][0] == "O" && jgVelha[2][0] == "O") {
            player.innerHTML = "Jogador O venceu !!"
            playerPointsO.innerHTML = `Pontos o = ${pontoO += 1}`
             regsO()
            restartJgVelha()
        }
        else if (jgVelha[0][1] == "O" && jgVelha[1][1] == "O" && jgVelha[2][1] == "O") {
            player.innerHTML = "Jogador O venceu !!"
            playerPointsO.innerHTML = `Pontos o = ${pontoO += 1}`
             regsO()
            restartJgVelha()
        }
        else if (jgVelha[0][2] == "O" && jgVelha[1][2] == "O" && jgVelha[2][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
             playerPointsO.innerHTML = `Pontos o = ${pontoO += 1}`
              regsO()
            restartJgVelha()
        }

        else if (jgVelha[0][0] == "O" && jgVelha[1][1] == "O" && jgVelha[2][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
            playerPointsO.innerHTML = `Pontos o = ${pontoO += 1}`
             regsO()
            restartJgVelha()
        }
        else if (jgVelha[0][2] == "O" && jgVelha[1][1] == "O" && jgVelha[2][0] == "O") {
            player.innerHTML = "Jogador O venceu !!"
            playerPointsO.innerHTML = `Pontos o = ${pontoO += 1}`
             regsO()
            restartJgVelha()

        } 
        else if(control == 9) {
            verifica.innerHTML = "Deu Velha"
            player.innerHTML = ""
            restartJgVelha()
        }
     
        console.log(jgVelha)
        console.log(element)
        console.log(number)
        console.log("controle: ",control)      
    })
});

