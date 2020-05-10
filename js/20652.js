window.onload=function() {
    var w1rcanvas=document.getElementById("w1rCanvasTag");
    var w1rcontext=w1rcanvas.getContext('2d');
    //w1rcontext.fillStyle='rgb(0,127,127)'; 
    //w1rcontext.fillRect(30,30,300,300);           
    //w1rcontext.fillStyle='rgba(0,255,0,0.5)';  
    //w1rcontext.fillRect(60,60,300,300);
    //w1rcontext.fillText("Hello World", 10, 300);
    w1rcontext.fillStyle='rgba(255,0,0,0.25)';  
    w1rcontext.font = "30px Comic Sans MS";
    w1rcontext.fillRect(0,190,250,200); 
    w1rcontext.strokeText("NTC-20652", 60, 230);
    w1rcontext.strokeText("PAIMAS", 70, 380);
}