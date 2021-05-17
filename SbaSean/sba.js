var num = 2000000;
document.getElementById("amount").innerHTML = num;

function add(){
    document.getElementById("error").innerHTML = "";
    var add = document.getElementById("num").value;
    num = parseInt(num) + parseInt(add);
    document.getElementById("amount").innerHTML = num;
}
function subtract(){
    var subtract = document.getElementById("num").value;
    if(parseInt(subtract) > parseInt(num)){
        document.getElementById("error").innerHTML = "You can't take out more than what you have!";
    }else{
        document.getElementById("error").innerHTML = "";
        num = parseInt(num) - parseInt(subtract);
        document.getElementById("amount").innerHTML = num;
    }
}