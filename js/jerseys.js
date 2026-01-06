const teamNameText = document.getElementById("jerseyTeam");
const jerseyDescText = document.getElementById("jerseyDesc");
const jerseyImg = document.getElementById("mainJersey");
const jerseySection = document.getElementById("jerseySec");

function updateVals(text1, text2, imgLink) {
    imgLink = "url('files/jerseys/" + imgLink + "Jersey.png')"

    teamNameText.innerHTML = text1;
    jerseyDescText.innerHTML = text2;
    jerseyImg.style.backgroundImage = imgLink;
}

document.getElementById("teamDEN").addEventListener("click", function(){
    updateVals("Denver Nuggets", "A simple idea inspired by the flag of Denver and Colorado. Mountains with a yellow sun.", "den")
});
document.getElementById("teamMIN").addEventListener("click", function(){
    updateVals("Minnesota Timberwolves", "Inspired by the Minnesota North Star Flag, this design has tributes to the '10,000 Lakes' moniker the state has, the large forests, and the golden North Star.", "min")
});
document.getElementById("teamOKC").addEventListener("click", function(){ 
    updateVals("Oklahoma City Thunder", "I", "okc")
});
document.getElementById("teamPOR").addEventListener("click", function(){
    updateVals("Portland Trail Blazers", ":", "por")
});
document.getElementById("teamUTA").addEventListener("click", function(){
    updateVals("Utah Jazz", ")", "uta")
});

document.getElementById("teamGSW").addEventListener("click", function(){
    updateVals("Golden State Warriors", "A", "gsw")
});
document.getElementById("teamLAC").addEventListener("click", function(){
    updateVals("Los Angeles Clippers", "H", "lac")
});
document.getElementById("teamLAL").addEventListener("click", function(){
    updateVals("Los Angeles Lakers", "I", "lal")
});
document.getElementById("teamPHX").addEventListener("click", function(){
    updateVals("Phoenix Suns", "A", "phx")
});
document.getElementById("teamSAC").addEventListener("click", function(){
    updateVals("Sacramento Kings", "H", "sac")
});

document.getElementById("teamDAL").addEventListener("click", function(){
    updateVals("Dallas Mavericks", "A", "dal")
});
document.getElementById("teamHOU").addEventListener("click", function(){
    updateVals("Houston Rockets", "H", "hou")
});
document.getElementById("teamMEM").addEventListener("click", function(){
    updateVals("Memphis Grizzlies", "This design includes the red, white, and blue pattern of the Memphis flag, followed by a golden Memphis wordmark, after the gold seal of the city.", "mem")
});
document.getElementById("teamNOP").addEventListener("click", function(){
    updateVals("New Orleans Pelicans", "This design has red accents at the top, and blue at the bottom, similar to the city's flag. Also matching the flag is the golden center, with French calligraphy at the wordmark, with the city's nickname, 'The Big Easy.'", "nop")
});
document.getElementById("teamSAS").addEventListener("click", function(){
    updateVals("San Antonio Spurs", "H", "sas")
});

document.getElementById("teamBOS").addEventListener("click", function(){
    updateVals("Boston Celtics", "A", "bos")
});
document.getElementById("teamBKN").addEventListener("click", function(){
    updateVals("Brooklyn Nets", "H", "bkn")
});
document.getElementById("teamNYK").addEventListener("click", function(){
    updateVals("New York Knicks", "I", "nyk")
});
document.getElementById("teamPHI").addEventListener("click", function(){
    updateVals("Philadelphia 76ers", "A", "phi")
});
document.getElementById("teamTOR").addEventListener("click", function(){
    updateVals("Toronto Raptors", "H", "tor")
});

document.getElementById("teamCHI").addEventListener("click", function(){
    updateVals("Chicago Bulls", "A", "chi")
});
document.getElementById("teamCLE").addEventListener("click", function(){
    updateVals("Cleveland Cavaliers", "H", "cle")
});
document.getElementById("teamDET").addEventListener("click", function(){
    updateVals("Detroit Pistons", "I", "det")
});
document.getElementById("teamIND").addEventListener("click", function(){
    updateVals("Indiana Pacers", "This design builds off of the Pacers' existing Statement jersey, making it permanent for the gold's iconic usage in the playoffs. The font brings a fresh sans serif, similar to new designs used by the team.", "ind")
});
document.getElementById("teamMIL").addEventListener("click", function(){
    updateVals("Milwaukee Bucks", "H", "mil")
});

document.getElementById("teamATL").addEventListener("click", function(){
    updateVals("Atlanta Hawks", "A", "atl")
});
document.getElementById("teamCHA").addEventListener("click", function(){
    updateVals("Charlotte Hornets", "H", "cha")
});
document.getElementById("teamMIA").addEventListener("click", function(){
    updateVals("Miami Heat", "I", "mia")
});
document.getElementById("teamORL").addEventListener("click", function(){
    updateVals("Orlando Magic", "A", "orl")
});
document.getElementById("teamWAS").addEventListener("click", function(){
    updateVals("Washington Wizards", "H", "was")
});

