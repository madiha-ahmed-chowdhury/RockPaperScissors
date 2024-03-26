let userScore=0;
let compScore=0;
let r=document.querySelector("#r");
let choices=document.querySelectorAll(".choice");
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
let reset=document.querySelector("#reset");
let rr=document.querySelector("#rr");


reset.addEventListener("click",()=>{
    resetGame();
});
let compChoice;
let userChoice;
const compPlay= ()=>{
    let num=Math.floor(Math.random() * 3);
    //const randIdx = Math.floor(Math.random() * 3);
    
    
        if(num==0){
            compChoice = 1;
            
        }
        else if(num==1){
            compChoice = 2;
        }
        else{
            compChoice = 3;
        }
        
        game();
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        //console.log(choice.id);
        userChoice=choice.id;
        compPlay();
        r.classList.remove("hide");
        rr.classList.remove("hide");
    })
});
const game=()=>{
    if(userChoice==compChoice) {
        r.innerText='draw';
    }
    else if((userChoice==1 && compChoice==2) ||(userChoice==2 && compChoice==3) ||(userChoice==3 && compChoice==1))
    {
        r.innerText="Comp has Won";
        compScore++;
    }
    else
    {
        r.innerText="User has Won";
        userScore++;
    }
    console.log(compChoice);
    console.log(userChoice);
    if(compChoice==1) {rr.innerText="Comp has chosen ROCK";}
    if(compChoice==2) {rr.innerText="Comp has chosen PAPER";}
    if(compChoice==3) {rr.innerText="Comp has chosen SCISSORS";}
    scoreBoard();
};
const scoreBoard=()=>{
    comp.innerText=`${compScore}`;
    user.innerText=`${userScore}`;
};
const resetGame=()=>{
    comp.innerText=`0`;
    user.innerText=`0`;
    userScore=0;
    compScore=0;
    r.classList.add("hide");
    rr.classList.add("hide");
};


