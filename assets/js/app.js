var userName = prompt("Enter your name:");

while(!isNaN(userName))
{
    var userName = prompt("Enter your name:");
}

document.getElementById("user").innerHTML = "Your Name: " + userName;


function addSeries()
{

    var seriesT = prompt("Enter your Titel:");
    while(!isNaN(seriesT))
    {
        var seriesT = prompt("Enter your Titel:");
    }

    var seriesImg = prompt("Enter your " + seriesT + " image URL:");
    while(!isNaN(seriesImg))
    {
        var seriesImg = prompt("Enter your " + seriesT + " image URL:");
    }

    var seriesdes = prompt("Enter your " + seriesT + " description:");
    while(!isNaN(seriesdes))
    {
        var seriesdes = prompt("Enter your " + seriesT + " description:");
    }

    var x = document.getElementsByClassName("userSeries");

    x[0].innerHTML += '<div class="card"><img src="'+seriesImg+'" alt=""><p class="cardTitle">'+seriesT+'</p><p class="cardDes">'+seriesdes+'</p></div>';
}