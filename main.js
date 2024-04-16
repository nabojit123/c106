var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start()
{
   document.getElementById("textbox").innerHTML = "";
   Recognition.start(); 
}

Recognition.onresult = function (event){
    console.log(event);
    var Context = event.results[0][0].transcript;
    console.log(Context);
    document.getElementById("textbox").innerHTML = Context;
}