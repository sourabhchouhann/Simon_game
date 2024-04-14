//level---1

let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let h2=document.querySelector("h2");
let started=false;
let level=0;
let high=0;

document.addEventListener("keypress",function(){
    if(started==false){
       
        started=true;
        levelUp();
    }

})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
  
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level} <br> Highest Score ${high}`;

    let idx=Math.floor(Math.random()*3);
    let rndmColor=btns[idx];
    let btn=document.querySelector(`.${rndmColor}`);

    gameSeq.push(rndmColor);
    // console.log(gameSeq);
   
    btnFlash(btn);

}
function checkAns(idx){
  

   if(userSeq[idx]===gameSeq[idx]){

     if(userSeq.length==gameSeq.length){
       
        setTimeout(levelUp,1000)

       
     } 

   }else{
    if(high<level){
        high=level;
    }
    h2.innerHTML=`Game Over! Your score was <b> ${level}</b> <br> Press any Key to Start..`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="white"; 
    },200);
    reset();
   }
}

function btnpress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor)
    checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");

for(let btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}