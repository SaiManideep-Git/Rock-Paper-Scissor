const scores={
    wins:0,
    loses : 0,
    tie :0
}
function getComputerMove() {
    const moves=['rock','paper','scissors'];
    const randomIndex=Math.floor(Math.random()*3);
    return moves[randomIndex];
}
function playGame(move){
    const c_choice=getComputerMove();
    let result ='';
    if(move==='rock')
    {
        if(c_choice==='rock')
        {
            result = 'It\'s a tie!';
            scores.tie++;
        }
        else if (c_choice === 'paper') {
            result = 'You lose.';
            scores.loses++;
        } else if (c_choice === 'scissors') {
            result = 'You win!';
            scores.wins++;
        }
    }else if(move==='paper')
    {
        if(c_choice==='paper')
        {
            result = 'It\'s a tie!';
            scores.tie++;
        }else if (c_choice === 'scissors') {
            result = 'You lose.';
            scores.loses++;
        } else if (c_choice === 'rock') {
            result = 'You win!';
            scores.wins++;
        }
    }else if(move==='scissors')
    {
        if(c_choice==='scissors')
        {
            result = 'It\'s a tie!';
            scores.tie++;
        }else if (c_choice === 'rock') {
            result = 'You lose.';
            scores.loses++;
        } else if (c_choice === 'paper') {
            result = 'You win!';
            scores.wins++;
        }
    }
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You picked **${move}**. The computer picked **${c_choice}**.`;
    updateScore();
}
function updateScore()
{
    document.querySelector('.js-score').innerHTML = `Wins: ${scores.wins}, Losses: ${scores.loses}, Ties: ${scores.tie}`;
}
function resetScore() {
  scores.wins = 0;
  scores.loses = 0;
  scores.tie = 0;
  updateScore();
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';
}
document.querySelector('.reset-button').addEventListener('click', resetScore);
updateScore();

