//Owen Louden, Intro Media Applications, 3/3/22

//how do I actually run the application and game though???

    let playerScore = 0; //player score
    let computerScore = 0; // computer score
 
        //control options
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const guardBtn = document.querySelector('.guard');
        const playerOptions = [rockBtn,paperBtn,scissorBtn, guardBtn];
        const computerOptions = ['rock','paper','scissors'];
         
        // Function to start playing game
        //recognize players interaction
        playerOptions.forEach(option => {

            //intercept click and run function
            option.addEventListener('click',function(){
 
                //random math generation for the computer
                const choiceNumber = Math.floor(Math.random()*3);
                //options available to computer
                const computerChoice = computerOptions[choiceNumber];
 
                // Function to check who wins
                winner(innerText,computerChoice)
            })
        })
         
 
    // Function to decide winner
    const winner = (player,computer) => {
        
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            //computer wins
            if(computer == 'paper'){
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            }else{
                //player wins
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                //computer wins
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                //player wins
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                //computer wins
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
              //player wins
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

        //part where you add guard to block from computer.
        else if(player == 'guard'){

            //subtract from player score, how can I make it only half a point???
            (playerScore--);
            //display this in scoreboard
            playerScoreBoard.textContent = playerScore;
        }
    }
