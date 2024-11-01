function getComputerChoice() {
    const choices = ['rock' , 'paper' , 'scissars'];
    const index = Math.floor(Math.random() * choices.length)
    return choices[index];
  }
  
  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "it's a tie";
    }
  
    if (
      (playerChoice === 'rock' && computerChoice === 'scissars') ||
      (playerChoice === 'scissars' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'You Win!!!';
    } else {
      return 'Computer Win(';
    }
  }
  
  
  const computerChoice = getComputerChoice();
  const playerChoice = prompt('Choose between rock,paper,scissars');
  const result = playRound(playerChoice, computerChoice);
  
    
  
  alert("Your choose: " + playerChoice);
    alert("Computer choose: " + computerChoice);
    alert(result);