



//Global variables//

var obiwan = {
    name: "Obiwan Kenobi",
    health: 150 ,
    initialDamage: 8 ,
    damage: 8 
};

var yoda = {
    name: "Master Yoda" ,
    health: 100 , 
    initialDamage: 15 ,
    damage: 15 
};

var maul = {
    name: "Darth Maul",
    health: 120 ,
    initialDamage: 10 ,
    damage: 10 
};

var vader = {
    name: "Darth Vader" ,
    health: 160 ,
    initialDamage: 7 ,
    damage: 7
    };

var chosen = {};

var choiceMade = false;

var defender = {};

var defenderChosen;

//Global functions//

function characterPowerup(x) {
    chosen.name = x.name;
    chosen.health = x.health ;
    chosen.initialDamage = x.initialDamage ;
    chosen.damage = x.damage ;
}

function defenderPowerup(y) {
    defender.name = y.name;
    defender.health = y.health ;
    defender.initialDamage = y.initialDamage ;
    defender.damage = y.damage ;
}


function enemiesMoves() {
   $(".characters").removeClass("characters").addClass("enemies");
   $(".enemy-choices").append($(".enemies"));
};

function enemiesToDefend (){
$(".enemies").removeClass("enemies").addClass("enemy-chosen")
$(".defender").append($(".enemy-chosen"));
};



$(document).ready(function() {

//CHARACTERS//
$("#obiwan").click(function(){
    console.log("obiWan selected");
  

    if (choiceMade === true ) {
        $("#obiwan").removeClass("enemies").addClass("enemy-chosen")
        $(".defender").append($(".enemy-chosen"));
        defenderPowerup (obiwan);
        console.log(defender);
       
    }

    else if (defender = {}) { 
    $("#obiwan").removeClass("characters").addClass("chosen");
    $(".attacker").append(this);
    enemiesMoves()
    choiceMade = true
    characterPowerup (obiwan);
    console.log (chosen);
    }
    

   

   
         
});


$("#yoda").click(function(){
    console.log("Yoda selected");
    

    if (choiceMade === true ) {
        $("#yoda").removeClass("enemies").addClass("enemy-chosen")
        $(".defender").append($(".enemy-chosen"));
        defenderPowerup(yoda);
        console.log(defender)
       
    }
 
    else if (defender = {} ){
    $("#yoda").removeClass("characters").addClass("chosen");
    $(".attacker").append(this);
    enemiesMoves()
    choiceMade = true
    characterPowerup(yoda);
    console.log(chosen);
    }
});


//ATTACK BUTTONM//

$(".attack").click(function(){

    chosen.damage = chosen.initialDamage + chosen.damage
   
    defender.health = defender.health - chosen.damage
    console.log(defender.health)
});








});
