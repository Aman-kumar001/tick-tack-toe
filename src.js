var start=document.getElementById("start");
$('#game').fadeOut();
start.onclick=function(){
    $('#welcome').fadeOut();
    $('#game').fadeIn();
};
var cross="box cross";
var circle="box circle";
var bool=[0,0,0,0,0,0,0,0,0];
var turn=0;
flag=0;
function check(){
    if(bool[0]==1&&bool[1]==1&&bool[2]==1){
        flag=1;
        alert("user wins!!");
    }
    else if(bool[0]==2&&bool[1]==2&&bool[2]==2){
        flag=1;
        alert("user lost");
    }
    else if(bool[3]==1 && bool[4]==1 && bool[5]==1){
        flag=1;
        alert("user wins!!");
    }
    else if(bool[3]==2&&bool[4]==2&&bool[5]==2){
        flag=1;
        alert("user lost");
    }
    else if(bool[6]==1 && bool[7]==1 && bool[8]==1){
        flag=1;
        alert("user wins!!");
    }
    else if(bool[6]==2&&bool[7]==2&&bool[8]==2){
        flag=1;
        alert("user lost");
    }
    else if(bool[0]==1 && bool[3]==1 && bool[6]==1){
        flag=1;
        alert("user wins!!");
    }
    else if(bool[0]==2&&bool[3]==2&&bool[6]==2){
        flag=1;
        alert("user lost");
    }
    else if(bool[1]==1 && bool[4]==1 && bool[7]==1){
        flag=1;
        alert("user wins!!");
    }
    else if(bool[1]==2&&bool[4]==2&&bool[7]==2){
        flag=1;
        alert("user lost");
    }
    else if(bool[2]==1 && bool[5]==1 && bool[8]==1){
        flag=1;
        alert("user wins!!");
    }
    else if(bool[2]==2&&bool[5]==2&&bool[8]==2){
        flag=1;
        alert("user lost");
    }
    else if(bool[0]==1 && bool[4]==1 && bool[8]==1){
        flag=1;
        alert("user wins!!");
    }
    else if(bool[0]==2&&bool[4]==2&&bool[8]==2){
        flag=1;
        alert("user lost");
    }
    else if(bool[6]==1 && bool[4]==1 && bool[2]==1){
        flag=1;
        alert("user wins!!");
    }
    else if(bool[6]==2&&bool[4]==2&&bool[2]==2){
        flag=1;
        alert("user lost");
    }
    else if(turn==9){
        flag=1;
        alert("better try next time");
    }
};

function computer(){
    var index=(Math.random()*10000)%9;
    index=Math.floor(index)
    if(bool[index]==0 && flag==0){
        turn++;
        bool[index]=2;
        document.getElementById("b" + (index+1)).className=circle;
        check();
    }
    else if(turn<9 && flag==0){
        computer();
    }
};

//user inputs
document.getElementById("b1").onclick=function(){
    if(bool[0]==0){
        bool[0]=1;
        turn++;
        document.getElementById("b1").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
document.getElementById("b2").onclick=function(){
    if(bool[1]==0){
        bool[1]=1;
        turn++;
        document.getElementById("b2").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
document.getElementById("b3").onclick=function(){
    if(bool[2]==0){
        bool[2]=1;
        turn++;
        document.getElementById("b3").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
document.getElementById("b4").onclick=function(){
    if(bool[3]==0){
        bool[3]=1;
        turn++;
        document.getElementById("b4").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
document.getElementById("b5").onclick=function(){
    if(bool[4]==0){
        bool[4]=1;
        turn++;
        document.getElementById("b5").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
document.getElementById("b6").onclick=function(){
    if(bool[5]==0){
        bool[5]=1;
        turn++;
        document.getElementById("b6").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
document.getElementById("b7").onclick=function(){
    if(bool[6]==0){
        bool[6]=1;
        turn++;
        document.getElementById("b7").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
document.getElementById("b8").onclick=function(){
    if(bool[7]==0){
        bool[7]=1;
        turn++;
        document.getElementById("b8").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
document.getElementById("b9").onclick=function(){
    if(bool[8]==0){
        bool[8]=1;
        turn++;
        document.getElementById("b9").className=cross;
        check();
        computer();
    }
    else{
        alert("choose other box")
    }
};
