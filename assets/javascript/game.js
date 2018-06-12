    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var yourGuess = [];


        
        document.onkeyup = function(event) {

          var computerGuess = letters[Math.floor(Math.random() * letters.length)];

          console.log(computerGuess);

          var userGuess = event.key.toLowerCase(); 
          console.log(userGuess);   

          if (userGuess === computerGuess){
              wins++;
              guesses = 9;
              yourGuess = [];

          }else{ 
              guesses--;
              yourGuess.push(userGuess);
          }

          if (guesses === 0){
              losses++;
              guesses = 9;
              yourGuess = [];
          }

          console.log(wins);
          console.log(losses);
          console.log(guesses);

          var html =
            "<p>Wins: " + wins + "</p>" + 
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guesses + "</p>" +
            "<p>Your guesses so far: " + yourGuess + "</p>";

            document.querySelector(".row").innerHTML = html;

        };