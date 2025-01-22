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
let pressed =0;
buttonAll.forEach((button)=>{

    button.addEventListener("click",()=>{
        pressed++
        if(button.classList.contains("number") || button.textContent==="."){
            if(button.textContent==="C"){
                result.textContent="";
                op=[]
            }
            else{
        result.textContent+=button.textContent;
        // op.push(button.textContent);
            }
        }else if(opCount===0){

            if(button.textContent==="+/-"){

                const before = op[0];
                if(+before >0){

                    result.textContent= "-"+ result.textContent;

                }else{result.textContent= Math.abs(+result.textContent)}
                opCount=0;

            }
            else{

            result.textContent+=button.textContent;
            op.push(result.textContent);
            op.push(button.value);
            opCount++;
        }

        }

        op.push(result.textContent);
        if(op.length >1){
        op = op.slice(op.length-1)
        }


        console.log(op)
        if(button.textContent==="="){

            const joined = op.join("")

            if(joined.includes("+")){

                const beforeOperator=+(joined.slice(0,joined.indexOf("+")))
                const afterOperator=+(joined.slice(joined.indexOf("+")+"+".length))
                const resultOp = add(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)

            }
            else if(joined.includes("-")){
                
                const beforeOperator=(joined.slice(0,joined.lastIndexOf("-")))
                console.log(beforeOperator)
                const afterOperator=(joined.slice(joined.lastIndexOf("-")+1))
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
