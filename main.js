const textTest= document.querySelector('#wordSec');
const userText=document.getElementById("typeBox");
var rightText=["dog", "blog", "storm", "sword", "cats"];
var i=0;

document.addEventListener('DOMContentLoaded', function(e){
    const textTest= document.querySelector('#Tester');
    const userText=document.getElementById("typeBox");
    rightText.forEach(word => {
        let span=document.createElement('span');
        span.textContent=word + ' ';
        textTest.appendChild(span);
        console.log(textTest.childNodes);
    });
    textTest.removeChild(textTest.firstChild);

    document.addEventListener('keypress',function(ev){ 
        if(ev.key == " "){
            let typedInput=userText.value.replace(/\s/g, '');
             if(typedInput==rightText[i]){
                console.log("right");
                textTest.childNodes[i].style.color="green";
            }else{
                console.log("wrong");
                textTest.childNodes[i].style.color="red";
            }
        i++;
        userText.value="";
        
        }
    });
});