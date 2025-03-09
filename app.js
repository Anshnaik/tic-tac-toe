let box=document.querySelectorAll(".box");
let resetbtn=document.querySelector("reset");
let newbtn=document.querySelector("new");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

box.forEach((i)=>{
    i.addEventListener("click",()=>{
        if(turn0==="true"){
            i.innerText="O";
            turn0="false";
        }
        else{
            i.innerText="X";
            turn0="true";
        }
        i.disabled=true;

        chkwinner();
    })
    
})

const chkwinner=()=> {
    for(i of winPatterns){
        let pos1=box[i[0]].inner
    }
}