function armazenarValor(){

var userInput = document.getElementById("userInput").value;

if(userInput<=6){
    
    document.getElementById("valorInserido").innerText = "Coloque um casaco!";

} else if(userInput>=7 && userInput<24 )
{ 
    document.getElementById("valorInserido").innerText = "Que dia agradável";
    
} else if (userInput>=24) {
    
    document.getElementById("valorInserido").innerText = "Ar-condiconados a todo vapor";
}

}