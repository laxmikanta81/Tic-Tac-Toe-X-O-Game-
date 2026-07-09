let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset_btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }if(count===8){
            showDraw();
            disableBoxes();
        };
        count++;
        box.disabled=true; 
        checkWinner();
    });
});
const disableBoxes=()=>{
    for( box of boxes){
        box.disabled=true;
    }
};
const showDraw=()=>{
    msg.innerText="Draw Try Again"
    msgContainer.classList.remove("hide");
}
const showWinner=()=>{
    msg.innerText=`${boxes[pattern[0]].innerText} is winner`;
    msgContainer.classList.remove("hide");
}
const checkWinner=()=>{
    for (pattern of winPatterns){
        if (boxes[pattern[0]].innerText!=="" &&boxes[pattern[1]].innerText!=="" &&boxes[pattern[2]].innerText!=="" ){
            if((boxes[pattern[0]].innerText===boxes[pattern[1]].innerText)&&(boxes[pattern[1]].innerText===boxes[pattern[2]].innerText)){
                console.log(`${boxes[pattern[0]].innerText} is winner`);
                disableBoxes();
                showWinner(boxes[pattern[0]].innerText);
        }};

    }
};
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
};
const enableBoxes=()=>{
    for( box of boxes){
        box.disabled=false;
        box.innerText="";
    };
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);