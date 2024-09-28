let p = document.querySelector('.footer-right .p');
let input = document.querySelector('.number');
let button = document.querySelector('.footer-left button')
let mainNumber = document.querySelector('.main div')
let score = document.querySelector('.score');

let number = 0;
button.addEventListener('click',function (){
    let randomNumber = Math.trunc(Math.random()*20 +1);
    let value = input.value;
    
    mainNumber.innerHTML = randomNumber;
    if(value == ""){
       p.innerText='please enter some Number 1 to 20 '
       mainNumber.innerText = 0;
    }else if(value == randomNumber){
        p.innerText='congratulation correct ';
        number++;
        if(number == 20){
            score.innerHTML = 'congratulation you are  win';
        }else{
            score.innerHTML = number;
        }
    }else if(value !== randomNumber){
        p.innerText=" Ohh sorry try agian don't match"
        // if(number > 0){
        //     number--;
        //     score.innerHTML = number;
        // }else{
        //     score.innerHTML = 0;
        // }
    }
});

document.addEventListener('keydown',function (e){
    console.log(e.key)
})