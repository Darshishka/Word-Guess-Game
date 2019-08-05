var pokemon = ["Bulbasaur", "Charmander", "Squirtle", "Caterpie", "Weedle", "Pidgey", "Rattata", "Spearow", "Ekans", "Pikachu", "Sandshrew", "Nidoran", "Clefairy", "Vulpix", "Jigglypuff", "Zubat", "Oddish", "Paras", "Venonat", "Diglett", "Meowth", "Psyduck", "Mannkey", "Growlithe", "Poliwag", "Abra", "Machop", "Bellsprout", "Tentacool", "Geodude", "Ponyta", "Slowpoke", "Magnemite", "Doduo", "Seel", "Grimer", "Shellder", "Gastly", "Onix", "Drowzee", "Krabby", "Voltorb", "Exeggcute", "Cubone", "Hitmonlee", "Lickitung", "Koffing", "Rhyhorn", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Goldeen", "Staryu", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Lapras", "Ditto", "Eevee", "Porygon", "Omanyte", "Kabuto", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Mewtwo", "Mew"]
//75 pokemon
// index is 0 to 74
var guessed = [];
var wins = 0;
var guesses = 15;
var blank = "_ ";

//random pokemon on keypress
// logs letter
// need to make blankLength as array with each _ being a different index
document.onkeypress = function(event) {
    var curentPokemon = pokemon[Math.floor(Math.random() * 75)];
    var pokeNameLength = curentPokemon.length;
    var letter = event.key.toLowerCase();


    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
    document.getElementById("currentName").innerHTML = blank.repeat(pokeNameLength);
    guessed.push(curentPokemon);

    //console.log(guessed);
    //console.log(pokeNameLength);
    //console.log(letter);
}

// wins updates on key press
//document.onkeypress = function(event) {
//    var displayWins = document.getElementById("wins").innerHTML
//    wins++;
//    displayWins = "Wins: " + wins;
//    document.getElementById("wins").innerText = displayWins;
//}
