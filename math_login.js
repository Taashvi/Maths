function LogIn(){
    var player_1_name=document.getElementById("player1_name").value;
    var player_2_name=document.getElementById("player2_name").value;
    localStorage.setItem("Player 1", player_1_name);
    localStorage.setItem("Player 2", player_2_name);
}