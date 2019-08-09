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
var lettersGuessed;
var currentPokemon = pokemon[Math.floor(Math.random() * 75)];
var pokeNameLength = currentPokemon.length;
var letterAt = [];
var letter;

document.onkeypress = function(event) {
    letter = event.key.toLowerCase();
    console.log(currentPokemon);
    console.log(letter);

    while (blankArray.length < pokeNameLength) {
        blankArray.push(blank);
    }
    
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
    document.getElementById("currentName").innerHTML = blankArray;
    document.getElementById("letters").innerHTML += letter;
    guessed.push(currentPokemon);


// create way to assign each "_ " to a name to easily replace
    //ex: first "_ " would be blankAt0, second would be blankAt1

//tests if letter pressed is in currentPokemon
    currentPokemon = currentPokemon.toLowerCase();

    if (currentPokemon.toLowerCase().includes(letter)){
        for (var i = 0; i < pokeNameLength; i++) {
            if (currentPokemon[i] === letter) {
                letterAt.push(i);
                blankArray.splice(letterAt[0], 1, letter);
                letterAt.shift();
                document.getElementById("currentName").innerHTML = blankArray;
            }
//blankString is an array that i can now index
                // console.log(blankString);
                // console.log(letterAt);
            else{
            }
        }
        guesses--;
    }
    else {
        guesses--;
        console.log("incorrect");
    }
    if (guesses < 0) {
        //alert("It's " + currentPokemon);
        guesses = 15;
        reset();
    }
    else if (blankArray.includes(blank) == false) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        //alert("It's " + currentPokemon);
        guesses = 15;
        reset();
    }

}


function reset() {
    var guessed = [];
    var guesses = 15;
    var blankArray = [];
    var lettersGuessed;
    var currentPokemon = pokemon[Math.floor(Math.random() * 75)];
    var pokeNameLength = currentPokemon.length;
    var letterAt = [];
    var letter;
    ;
}