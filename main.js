
var rightText=["dog", "blog", "storm", "sword", "cats", "they", "awesome", "apple"];
var wordIndex=0;
var startDate=Date.now();

document.addEventListener('DOMContentLoaded', function(e){
    const textTest= document.querySelector('#Tester');
    const userText=document.getElementById("typeBox");
    var wpmC=document.getElementById("wpm");
    var correctWord=0;
    var wpm=0;
    var textLength=rightText.length;

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
             if(typedInput==rightText[wordIndex]){
                console.log("right");
                correctWord+=1;
                textTest.childNodes[wordIndex].style.color="green";
                console.log(getAcc(correctWord, textLength));
                wpmacc.textContent="WPM: " + wpm + " || Accuracy: " + getAcc(correctWord, textLength);

            }else{
                console.log("wrong");
                textTest.childNodes[wordIndex].style.color="red";
            }
            if (wordIndex==textLength){
                console.log(getAcc(correctWord, textLength));
            }
        wordIndex++;
        userText.value="";
        console.log((Date.now() - startDate) / 1000 / 60);
        }
    });
    function getAcc(correctWord, textLength){
        let acc=correctWord/textLength * 100;
        return acc;
    }
});