const lock='1711';

let guess= prompt('Enter the code');
let count=0;

while(guess!==lock)
{
    count++;
    if(count>3)
    {
        guess=prompt('Enter  1711 to open \uD83D\uDC36')
    }
    else guess=prompt('Enter again \uD83D\uDC69');
}
console.log("Welcome");