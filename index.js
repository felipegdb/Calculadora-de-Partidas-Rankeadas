let matchesWinners = 10
let matchesDefeat = 3


function match(winner, defeat) {
    let result = winner - defeat;

    if (winner > defeat && winner <= 10) { 
        console.log("Olá, heroi você tem o total de: " + result + " vitórias e por isso seu rank é Ferro");
    }  
    else if (winner > defeat && winner <= 20) {
        console.log("Olá, heroi você tem o total de: " + result + " vitórias e por isso seu rank é Bronze");
    }
    else if (winner > defeat && winner <= 50) {
        console.log("Olá, heroi você tem o total de: " + result + " vitórias e por isso seu rank é Prata");
    }  
    else if (winner > defeat && winner <= 80) {
        console.log("Olá, heroi você tem o total de: " + result + " vitórias e por isso seu rank é Ouro");
    }   
    else if (winner > defeat && winner <= 90) {
        console.log("Olá, heroi você tem o total de: " + result + " vitórias e por isso seu rank é Diamante");
    }  
    else if (winner > defeat && winner <= 100) {
        console.log("Olá, heroi você tem o total de: " + result + " vitórias e por isso seu rank é Lendário");
    }    
    else if (winner > defeat && winner > 10) {
        console.log("Olá, heroi você tem o total de: " + result + " vitórias e por isso seu rank é Imortal");
    }    
}



 
let result = matchesWinners - matchesDefeat
match(matchesWinners, matchesDefeat);