let box=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgContainer=document.querySelector(".hide");
let msg=document.querySelector("#msg");
let turn0=true;

newbtn.classList.add("hide");
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

const reset=()=>{
    turn0=true;
    enablebox();
    msgContainer.classList.add("hide");
}
const enablebox=()=>{
    for(let i of box){
        i.disabled=false;
        i.innerText="";
    }
    
}

const disablebox=()=>{
    for(let i of box){
        i.disabled=true;
    }
}

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
        newbtn.document.classList.remove("hide");
    })
    
})

const showwinner=(winner)=>{
        msg.innerText=`Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disablebox();
}  


const chkwinner=()=> {
    for(i of winPatterns){
        console.log(box[i[0]].innerText,box[i[1]].innerText,box[i[2]].innerText);

        let pos1=box[i[0]].innerText;
        let pos2=box[i[1]].innerText;
        let pos3=box[i[2]].innerText;

        if(pos1!="" && pos2!="" & pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
                newbtn.classList.remove("hide");
            }
        }
    }
}

newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);