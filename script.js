function getComputerChoice()
    {
       let Choice = Math.floor(Math.random()*3)+1;
       switch(Choice){
            case 1:
                return "Rock";
                break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Sissors";
            break;

       }
    }
  
function getHumanChoice(){
    let Choice = prompt("What's Your Choice, Human?");

     return Choice           
        }

    HumanScore =0;
    ComputerScore =0;


function playRound(HumanSelection, ComputerSelection) {
    if(HumanSelection === ComputerSelection){
        console.log("This is a Tie.");
    }
    else if(HumanSelection== "Rock"){
        if(ComputerSelection== "Paper"){
            console.log("Computer wins with 'Paper'");
                ComputerScore++;
        }
        else if(ComputerSelection== "Sissors"){
            console.log("You wins against 'Sissors'");
                HumanScore++;
        }
        }
        else if(HumanSelection== "Paper"){
            if(ComputerSelection== "Sissors"){
                console.log("Computer wins with 'Sissors'");
                    ComputerScore++;
            }
            else if(ComputerSelection== "Rock"){
                console.log("You wins against 'Rock'");
                    HumanScore++;
            }
            }
        else if(HumanSelection== "Sissors"){
                if(ComputerSelection== "Rock"){
                    console.log("Computer wins with 'Rock'");
                        ComputerScore++;
                }
                else if(ComputerSelection== "Paper"){
                    console.log("You wins with 'Sissors'");
                        HumanScore++;
                }
            }    
          
    }
  
  
  
  function playGame(Rounds =5 ){
    for(let i =0; i <=Rounds; i++){
        const HumanSelection = getHumanChoice();
        const ComputerSelection = getComputerChoice();
        
        playRound(HumanSelection, ComputerSelection)
    }
    if(ComputerScore> HumanScore){
        console.log(`Computer wins, Computer: ${ComputerScore} and Human: ${HumanScore}`)
    }
    else if (ComputerScore < HumanScore) {
        console.log(`You won! Human: ${HumanScore} and Computer: ${ComputerScore}`)
    } else {
        console.log("It's a tie!")
    }

  }
  playGame();