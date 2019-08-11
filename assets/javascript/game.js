///Questions:
//How to call my function(event) in reset() ?

var pokemon = ["Bulbasaur", "Charmander", "Squirtle", "Caterpie", "Weedle", "Pidgey", "Rattata", "Spearow", "Ekans", "Pikachu", "Sandshrew", "Nidoran", "Clefairy", "Vulpix", "Jigglypuff", "Zubat", "Oddish", "Paras", "Venonat", "Diglett", "Meowth", "Psyduck", "Mannkey", "Growlithe", "Poliwag", "Abra", "Machop", "Bellsprout", "Tentacool", "Geodude", "Ponyta", "Slowpoke", "Magnemite", "Doduo", "Seel", "Grimer", "Shellder", "Gastly", "Onix", "Drowzee", "Krabby", "Voltorb", "Exeggcute", "Cubone", "Hitmonlee", "Lickitung", "Koffing", "Rhyhorn", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Goldeen", "Staryu", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Lapras", "Ditto", "Eevee", "Porygon", "Omanyte", "Kabuto", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Mewtwo", "Mew"]
//75 pokemon
// index is 0 to 74
var guessed = [];
var wins = 0;
var guesses = 15;
var blank = "_ ";
var blankArray = [];
var lettersGuessed = "";
var currentPokemon = pokemon[Math.floor(Math.random() * 75)];
var pokeNameLength = currentPokemon.length;
var letterAt = [];
var letter;

while (blankArray.length < pokeNameLength) {
    blankArray.push(blank);
    var tempArray = blankArray.join("");
    document.getElementById("currentName").innerHTML = tempArray;
}

document.onkeypress = function(event) {
    letter = event.key.toLowerCase();
    console.log(currentPokemon);
    console.log(letter);
    document.getElementById("wins").innerHTML = "Wins: " + wins;
  

    guessed.push(currentPokemon);

    currentPokemon = currentPokemon.toLowerCase();
//if statement to check if letter has been pressed before
    //if index of letter has been pressed before
        //guesses dont do down
        //letter isnt added
        //runs fuction below
        // add below function to if includes
    if (lettersGuessed.includes(letter) === false){
        lettersGuessed += letter;
        document.getElementById("letters").innerHTML = lettersGuessed;
    }
    else {
        alert("already pressed")
    }
        
        if (currentPokemon.toLowerCase().includes(letter)){
            for (var i = 0; i < pokeNameLength; i++) {
                if (currentPokemon[i] === letter) {
                    letterAt.push(i);
                    blankArray.splice(letterAt[0], 1, letter);
                    letterAt.shift();
                    tempArray = blankArray.join("");
                    document.getElementById("currentName").innerHTML = tempArray;
                }

                else{
                }
            }
            guesses--;
            document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
        }
        else {
            guesses--;
            document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
            console.log("incorrect");
        }
        if (blankArray.includes(blank) === false) {
            
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            alert("It's " + currentPokemon + "!")
            reset();
        }
        else if (guesses <= 0) {
            alert("It's " + currentPokemon + "!")
            reset();
        }
    }



function reset() {
    guessed = [];
    guesses = 15;
    blankArray = [];
    lettersGuessed = "";
    currentPokemon = pokemon[Math.floor(Math.random() * 75)];
    pokeNameLength = currentPokemon.length;
    letterAt = [];
    document.getElementById("letters").innerHTML = lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
    while (blankArray.length < pokeNameLength) {
        blankArray.push(blank);
        tempArray = blankArray.join("");
        document.getElementById("currentName").innerHTML = tempArray;

    }
    console.log(currentPokemon)
}