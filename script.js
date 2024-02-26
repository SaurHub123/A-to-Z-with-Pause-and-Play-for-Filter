const alphabets = document.getElementById("alphabet");
let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let i=0;
function getAlphabet() {

    alphabets.textContent = letter[i];
    i++;

    if(i==26)
    {
        i=0;
    }
    
}
var interval = setInterval(getAlphabet,100);
const stop = document.getElementById("stop");
var  condition =1;
stop.addEventListener("click", ()=>{
    if(condition)
    {
        clearInterval(interval);
        condition = 0;
    }
    else{
        interval = setInterval(getAlphabet,100);
        condition = 1;
    }
});



