let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span= document.getElementById("comp-score");
const result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
function getComputerChoice(){
  const choices=["rock", "paper","scissor"];
  const randomNum= Math.floor(Math.random()*3);
  return choices[randomNum];
}
function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML=userScore;
  const smalluserword= "user".fontsize(3).sub();
  const smallcompword= "computer".fontsize(3).sub();
  result.innerHTML= `${userChoice} ${smalluserword} beats ${computerChoice}${smallcompword}. You win...`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);

}
function lose(userChoice,computerChoice){
  computerScore++;
  computerScore_span.innerHTML=computerScore;
  const smalluserword= "user".fontsize(3).sub();
  const smallcompword= "computer".fontsize(3).sub();
  result.innerHTML=`${userChoice}${smalluserword} loses to ${computerChoice}${smallcompword}. You Lost`
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);
}
function draw(userChoice,computerChoice){
  const smalluserword= "user".fontsize(3).sub();
  const smallcompword= "computer".fontsize(3).sub();

  result.innerHTML=`${userChoice}${smalluserword} equals ${computerChoice}${smallcompword}. It's a draw`
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},300);
}
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice,computerChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice,computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice,computerChoice);
  }

  }
function main(){
  rock.addEventListener('click', function(){
  game("rock");
  })
  paper.addEventListener('click', function(){
  game("paper");
  })
  scissor.addEventListener('click', function(){
  game("scissor");
  });

  }
main();




