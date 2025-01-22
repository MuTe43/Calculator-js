const number = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operation")
const buttonAll = document.querySelectorAll("button")
const result = document.querySelector(".result")
function add(a,b){
    return a+b;
}

function substract(a,b){
    return (a-b);
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
let op =[];
let opCount=0;
buttonAll.forEach((button)=>{

    button.addEventListener("click",()=>{

        if(button.classList.contains("number") || button.textContent==="."){

        result.textContent+=button.textContent;
        op.push(button.textContent);
        
        }else if(opCount===0){
            result.textContent+=button.textContent;
            op.push(button.textContent)
            opCount++;
        }
        console.log(op)
        if(button.textContent==="="){

            const joined = op.join("")

            if(joined.includes("+")){

                const beforeOperator=+(joined.slice(0,joined.indexOf("+")))
                const afterOperator=+(joined.slice(joined.indexOf("+")+1))
                const resultOp = add(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)

            }
            else if(joined.includes("-")){

                const beforeOperator=+(joined.slice(0,joined.indexOf("-")))
                const afterOperator=+(joined.slice(joined.indexOf("-")+1))
                const resultOp = substract(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)
                
            }
        }
    })
})
