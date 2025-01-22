const number = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operation")
const buttonAll = document.querySelectorAll("button")
const result = document.querySelector(".result")
function add(a,b){
    return a+b;
}

function substract(a,b){
    if(a<0&&b<0){
        return +("-"+Math.abs(a)+Math.abs(b))
    }
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
            if(button.textContent==="+/-"){
                const before = op[0];
                if(+before >0){
                    result.textContent= "-"+ op.slice(0);
                }
                opCount=0;
            }
            else{
            result.textContent+=button.textContent;
            op.push(button.value);
            opCount++;}
        }
        console.log(op)
        if(button.textContent==="="){

            const joined = op.join("")

            if(joined.includes("plus")){

                const beforeOperator=+(joined.slice(0,joined.indexOf("plus")))
                const afterOperator=+(joined.slice(joined.indexOf("plus")+"plus".length))
                const resultOp = add(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)

            }
            else if(joined.includes("minus")){
                
                const beforeOperator=(joined.slice(0,joined.indexOf("minus")))
                console.log(beforeOperator)
                const afterOperator=(joined.slice(joined.indexOf("minus")+"minus".length))
                console.log(afterOperator)
                const resultOp = substract(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)

            }

            else if(joined.includes("multiply")){
                
                const beforeOperator=(joined.slice(0,joined.indexOf("multiply")))
                console.log(beforeOperator)
                const afterOperator=(joined.slice(joined.indexOf("multiply")+"multiply".length))
                console.log(afterOperator)
                const resultOp = multiply(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)

            }

            else if(joined.includes("divide")){
                
                const beforeOperator=(joined.slice(0,joined.indexOf("divide")))
                console.log(beforeOperator)
                const afterOperator=(joined.slice(joined.indexOf("divide")+"divide".length))
                console.log(afterOperator)
                const resultOp = divide(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)

            }
        }
        if(button.textContent==="AC"){
            result.textContent=""
            op=[]
            opCount=0
        }
    })
})
