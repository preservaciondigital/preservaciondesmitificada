window.onload=function() {
    var w2rcanvas=document.getElementById("w2rCanvasTag");
    var w2rcontext=w1rcanvas.getContext('2d');
    //w1rcontext.fillStyle='rgb(0,127,127)'; 
    //w1rcontext.fillRect(30,30,300,300);           
    //w1rcontext.fillStyle='rgba(0,255,0,0.5)';  
    //w1rcontext.fillRect(60,60,300,300);
    //w1rcontext.fillText("Hello World", 10, 300);
    w2rcontext.fillStyle='rgba(255,0,0,0.25)';  
    w2rcontext.font = "30px Comic Sans MS";
    w2rcontext.fillRect(0,250,250,200); 
    w2rcontext.strokeText("NTC-20652", 60, 300);
    //w2rcontext.strokeText("PAIMAS", 70, 430);
}