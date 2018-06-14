//Global variables//

var obiwan = {
    name: "Obiwan Kenobi",
    health: 150,
    initialDamage: 8,
    damage: 8
};

var yoda = {
    name: "Master Yoda",
    health: 60,
    initialDamage: 15,
    damage: 15
};

var maul = {
    name: "Darth Maul",
    health: 200,
    initialDamage: 18,
    damage: 18
};

var vader = {
    name: "Darth Vader",
    health: 100,
    initialDamage: 7,
    damage: 7
};

var chosen = {};

var choiceMade = false;

var defender = {};

var defenderChosen = false;

var gameOver = false;

var wins = 0;

//Global functions//

function enemiesMoves() {
    $(".characters").removeClass("characters").addClass("enemies");
    $(".enemy-choices").append($(".enemies"));
};

function characterPowerup(x) {
    chosen.name = x.name;
    chosen.health = x.health;
    chosen.initialDamage = x.initialDamage;
    chosen.damage = x.damage;
}

function defenderPowerup(y) {
    defender.name = y.name;
    defender.health = y.health;
    defender.initialDamage = y.initialDamage;
    defender.damage = y.damage;
}

function restart() {

    chosen = {};
    choiceMade = false;
    defender = {};
    defenderChosen = false;
    gameOver = false;
    wins = 0;

    $("#obiwan").children(".health").html(obiwan.health);
    $("#yoda").children(".health").html(yoda.health);
    $("#maul").children(".health").html(maul.health);
    $("#vader").children(".health").html(vader.health);


    $(".reset").removeClass("enemies chosen enemy-chosen").addClass("characters");
    var choices = $(".characters").show();
    $("#character-choices").html(choices)
    $(".restart").hide();

    $("#message").empty()
};



// GAME BEGINS

$(document).ready(function () {

    //CHARACTERS//
    $("#obiwan").click(function () {
        if (choiceMade == true && chosen.name !== "Obiwan Kenobi" && defenderChosen == false) {
            $("#obiwan").removeClass("enemies").addClass("enemy-chosen")
            $(".defender").append($(".enemy-chosen"));
            defenderPowerup(obiwan);
            defenderChosen = true;

        } else if (defenderChosen === false) {
            $("#obiwan").removeClass("characters").addClass("chosen");
            $(".attacker").append(this);
            enemiesMoves();
            choiceMade = true;
            characterPowerup(obiwan);
        }
    });


    $("#yoda").click(function () {
        if (choiceMade === true && chosen.name !== "Master Yoda" && defenderChosen === false) {
            $("#yoda").removeClass("enemies").addClass("enemy-chosen")
            $(".defender").append($(".enemy-chosen"));
            defenderPowerup(yoda);
            defenderChosen = true;
        } else if (defenderChosen === false) {
            $("#yoda").removeClass("characters").addClass("chosen");
            $(".attacker").append(this);
            enemiesMoves();
            choiceMade = true
            characterPowerup(yoda);
        }
    });

    $("#maul").click(function () {
        if (choiceMade === true && chosen.name !== "Darth Maul" && defenderChosen === false) {
            $("#maul").removeClass("enemies").addClass("enemy-chosen")
            $(".defender").append($(".enemy-chosen"));
            defenderPowerup(maul);
            defenderChosen = true;
        } else if (defenderChosen === false) {
            $("#maul").removeClass("characters").addClass("chosen");
            $(".attacker").append(this);
            enemiesMoves();
            choiceMade = true;
            characterPowerup(maul);
        }
    });

    $("#vader").click(function () {
        if (choiceMade === true && chosen.name !== "Darth Vader" && defenderChosen === false) {
            $("#vader").removeClass("enemies").addClass("enemy-chosen")
            $(".defender").append($(".enemy-chosen"));
            defenderPowerup(vader);
            defenderChosen = true;

        } else if (defenderChosen === false) {
            $("#vader").removeClass("characters").addClass("chosen");
            $(".attacker").append(this);
            enemiesMoves();
            choiceMade = true;
            characterPowerup(vader);
        }
    });


    //ATTACK BUTTON//
    $(".attack").click(function () {

        if (gameOver === false) {
            if (defenderChosen == true && choiceMade == true && defender.health > 0) {


                if (chosen.health > 0) {
                    chosen.health = chosen.health - defender.damage
                    $(".chosen").children(".health").html(chosen.health)
                    $("#message").html("You attacked " + defender.name + " for " + chosen.damage + " Damage <br>" +
                        defender.name + " attacked you back for " + defender.damage + " Damage ");
                } else if (chosen.health <= 0) {
                    chosen.health = 0;
                    gameOver = true;
                    $("#message").html("You have been defeated...Game Over!")
                    $(".restart").show();
                }


                if (defender.health > 0) {
                    defender.health = defender.health - chosen.damage
                    $(".enemy-chosen").children(".health").html(defender.health)
                }


            }  else  if (defenderChosen == true && defender.health < 0) {
                wins++;
                $(".enemy-chosen").hide()
                defenderChosen = false;
                if (wins < 3){
                    $("#message").html("You have defeated " + defender.name + "! " + "Pick your next victim! ")
                }
                else {
                    $("#message").html("All Enemies Killed! " + "You Won!")
                    gameOver = true;
                    $(".restart").show();
                }
                } else if (choiceMade == true && defenderChosen == false) {$("#message").html("Please chose an enemy to begin")
            
            }
        }
        chosen.damage = chosen.initialDamage + chosen.damage
    }); // attack button

    // RESTART
    $(".restart").hide();

    $(".restart").click(function () {
        if (gameOver === true) {
            restart()
        }
    });

});