function showHighScores() {
    // get scores
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    // sort scores from highest to lowest
    highScores.sort(function(a, b) {
        return b.score - a.score
    });
    // for each new score, create a <li> with the information
    highScores.forEach(function(score) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = score.initials + " - " + score.score;

          //create ordered list element
        var highScoresEl = document.querySelector("#highscores");
    
        // display on page
        highScoresEl.appendChild(listItemEl);
    });
}

function clearHighScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
}
document.querySelector("#clear-button").onclick = clearHighScores;

showHighScores();