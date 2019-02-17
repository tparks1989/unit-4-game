$(document).ready(function(){
    var random = Math.floor(Math.random()*101+19);

    $("#randomNumber").text(random);

    var crystalOne = Math.floor(Math.random()*11+1);
    var crystalTwo = Math.floor(Math.random()*11+1);
    var crystalThree = Math.floor(Mathrandom()*11+1);
    var crystalFour = Math.floor(Math.random()*11+1);

    var pointTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#winsTotal").text(wins);
    $("#lossesTotal").text(losses);

    function reset() {
        Random = Math.floor(Math.random()*101+19);
        console.log(Random)
        $("#randomNumber").text(random);
        crystalOne = Math.floor(Math.random()*11+1);
        crystalTwo = Math.floor(Math.random()*11+1);
        crystalThree = Math.floor(Math.random()*11+1);
        crystalFour = Math.floor(Math.random()*11+1);
        pointTotal = 0;
        $("#finalScore").text(pointTotal);

    }

    function winner() {
        alert("You won!");
        wins++;
        $("#winsTotal").text(Wins);
        reset();
    }

    function loser() {
        alert ("You lose!");
        losses++;
        $("#lossesTotal").text(Losses);
    }

    $("one").click("click", function(){
        pointTotal = pointTotal + crystalOne;
        console.log("New pointTotal" = ("") + pointTotal);
        $("#usersPoints").text(pointTotal);

        if (pointTotal === random) {
            winner();
        }
        else if ( pointTotal > random) {
            loser();
        }
    })

    $("two").click("click", function(){
        pointTotal = pointTotal + crystalTwo;
        console.log("New pointTotal" = ("") + pointTotal);
        $("#usersPoints").text(pointTotal);

        if (pointTotal === random) {
            winner();
        }
        else if ( pointTotal > random) {
            loser();
        }
    })

    $("three").click("click", function(){
        pointTotal = pointTotal + crystalThree;
        console.log("New pointTotal" = ("")  + pointTotal);
        $("#usersPoints").text(pointTotal);

        if (pointTotal === random) {
            winner();
        }
        else if ( pointTotal > random) {
            loser();
        }
    })

    $("four").click("click", function(){
        pointTotal = pointTotal + crystalFour;
        console.log("New pointTotal" = ("") + pointTotal);
        $("#usersPoints").text(pointTotal);

        if (pointTotal === random) {
            winner();
        }
        else if ( pointTotal > random) {
            loser();
        }
    })
})