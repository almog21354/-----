


function init(){

    if(start=="1"){
        start("אלי");
        start("דור");
        start("שימי");
        start("ישראל");
        start("אלירן");
        start("מתן");
        start("ניסן");
        start("שם אחר");
    }
}

function start(_name){
    document.getElementById("text1").innerHTML="";
    document.getElementById("text2").innerHTML="";
    document.getElementById("start1").innerHTML="";


    q.innerHTML+="<h1>בחרו את השם של הערס</h1><p></p>";
    q.innerHTML+="<button onclick='q2()'>"+_name+"</button>";

}
function q2(){

}
var start;
var q1;
var q2;
var q3;
var q4;
var q5;
var q6;
var q7;
var q8;
var q9;
var q10;
var _switch;