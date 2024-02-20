
# Sistema de Ranqueamento de Jogadores


Pequeno sistema de ranqueamento de jogadores que define a qual cada um pertence;



## 🗿 Funcionalidade

O programa consiste em uma função, que recebe a qauntidade de vitórias e derrotas de um jogador e define seu rank. O resulado aparecerá no console;

## 🖇️ Como Usar

- Clone o repositório ou copie o código para o seu ambiente de desenvolvimento.
- Certifique-se de ter um ambiente JavaScript adequado para executar o código, como um navegador da web ou até mesmo Node.js.
- Abra o arquivo JavaScript em um editor de código.
- Altere os valores das variáveis **matchesWinners** e **matchesDefeat** para refletir o número de vitórias e derrotas do jogador.
- Execute o script.
- Verifique o console para ver o rank do jogador com base nas estatísticas fornecidas.


## 🌐 Estrutura do Código
- matchesWinners: Variável que armazena o número de vitórias do jogador.
- matchesDefeat: Variável que armazena o número de derrotas do jogador.
- match(winner, defeat): Função principal que determina o rank do jogador com base nas vitórias e derrotas fornecidas.
- O código segue uma série de condições if...else if para determinar o rank do jogador com base no número de vitórias.

## ✏️ Resultados Possíveis


- **Ferro** [Valor <= 10]
- **Bronze** [Valor > 10 e <= 20]
- **Prata** [Valor > 20 e <= 50]
- **Ouro** [Valor > 50 e <= 80]
- **Diamante** [Valor > 80 e <= 90]
- **Lendário** [Valor > 90 e <= 100]
- **Imortal** [Valor > 100]

## 🔓 Outras formas que encontrei de fazer o desafio

- **Usando Switch/Case**: É possível mesclar a função com o switch/case, da mesma forma que é feito com if/else. E ao invés de escrever várias vezes `console.log()` basta criar uma variavel que vai armazenar a mensagem e concatenar o resultado nela mesmo. Dessa foma: `let message = "Agora você é rank: " + rank"` E em seguida criar um switch que tenha como condição o valor _true_, sendo cada case o algoritmo que define o rank. Os cases terão um `console.log` que será a variável que guardou a mensagem + rank. Dessa forma: `console.log(message + "Diamante")`

- **Usando if/else**: Não era preciso colocar repetidas vezes o `console.log` como eu fiz, bastava, assim como feito no switch/case, criar uma variavel e armazenar um rank e colocar a mensagem no `return` e concatena-la com o rank.

## Considerações Finais
Este e outros desafios você encontra na DIO ([Digital Innovation One](https://digitalinnovation.one/)). 

