var player1_name = localStorage.getItem("Player 1 Name");
var player2_name = localStorage.getItem("Player 2 Name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    get_Word = document.getElementById("word").value;
    Word = get_Word.toLowerCase();
    console.log(word);
    charAt1 = Word.charAt(1);
    console.log(charAt1);
    length_divide_2 = Math.floor(Word.length/2);
    charAt2 = Word.charAt(length_divide_2);
    console.log(charAt2);
    length_minus_1 = Word.length - 1;
    charAt3 = Word.charAt(length_minus_1);
    console.log(charAt3);
    remove_charAt1 = Word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'> Q." + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button id='check' onclick='check()' class='btn btn-info'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);
    if (answer == Word){
        if (answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name
    }
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name
    }
    document.getElementById("output").innerHTML = "";
    }