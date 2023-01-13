function back(){
    window.location = "index(1).html";
}
function getScore(){
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "Score: " + score;
}