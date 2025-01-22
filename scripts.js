const number = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operation")
const buttonAll = document.querySelectorAll("button")
const result = document.querySelector(".result")

//the if statements check if the inputs are decimals, if so they limit them t a maxium of 3 number after the point
function add(a,b){
    if (+a%1!=0){
        a=+a.toFixed(2)
    }
    if (+b%1!=0){
        b=+b.toFixed(2)
    }
    return +(a+b);
}

function substract(a,b){
    if (+a%1!=0){
        a=+a.toFixed(2)
    }
    if (+b%1!=0){
        b=+b.toFixed(2)
    }
    if(a<0&&b<0){
        return +("-"+Math.abs(a)+Math.abs(b))
    }
    
    return +(a-b);
}
function multiply(a,b){
    if (+a%1!=0){
        a=+a.toFixed(2)
    }
    if (+b%1!=0){
        b=+b.toFixed(2)
    }
    return +(a*b);
}
function divide(a,b){
    if (+a%1!=0){
        a=+a.toFixed(2)
    }
    if (+b%1!=0){
        b=+b.toFixed(2)
    }
    return +(a/b);
}

let op =[]; // operations array
let opCount=0; // keeping track of operations so we cant press more than 1 operator at a time
let pressed =0; //useless as of now
let point = 0 //keep track of the decimal point so we cant add more points
buttonAll.forEach((button)=>{

    button.addEventListener("click",()=>{
        pressed++
        console.log(pressed)
        if(button.classList.contains("number") || button.textContent==="."){
            if(result.textContent==="CANNOT DIVIDE BY 0" || result.textContent==="ERROR" ){
                result.textContent=""
            }
            if(button.textContent==="." && point===0){
                point++
                result.textContent+=button.textContent;
            }
            else if(button.textContent==="." && point!==0){
                result.textContent=result.textContent

            }
            else{
        result.textContent+=button.textContent;}
        
            
        }else if(opCount===0){
            // Error if we press the = operator before finishing the equation
            if(button.textContent==="=" && opCount===0){
                result.textContent="ERROR"
                op=[];
                opCount=0;
                point=0
            }
            else if(button.textContent==="+/-"){
                // flips signs takes the first index because the array only has 1 element
                const before = op[0];
                if(+before >0){

                    result.textContent= "-"+ result.textContent;

                }else{result.textContent= Math.abs(+result.textContent)}
                opCount=0;

            }
            else{
                // if any operation has been pressed other than "+/-" we append it to the result
                //  we increment the count to 1 so we can't add more operators to the equation
            pressed=0
            result.textContent+=button.textContent;
            op.push(result.textContent);
            op.push(button.value);
            opCount++;
            point=0
        }

        }
        // we add the result to the array but there is a twist in the next comment...
        op.push(result.textContent);
        if(op.length >1){
        //I'm trying to limit the array to only 1 element so that swapping signs is made easier
        //therefore everytime I delete the previous elements I keep the fresh one (it piles up the numbers pressed)
        op = op.slice(op.length-1)

        }  
        //simple Clearing of the array
        if(button.textContent==="AC" || button.textContent==="C"){
            result.textContent="";
            op=[];
            opCount=0
            point=0
        }


        console.log(op)

        //the operatiosn begin
        if(button.textContent==="="){

            const joined = op.join("")

            //the functions are the same
            //we get the elements behind AND after the operator using slice
            // every result is rounded to 2 decimals
            //we reset the array to contain only the result (so we can keep operating on it)
            //we reset the opCount to allow us operating on the result
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
                //a tricky one here, I have to get the minus element from last index
                //because if the first number is negative it ends up taking its sign instead of the operator
                const beforeOperator=+(joined.slice(0,joined.lastIndexOf("-")))
                console.log(beforeOperator)
                const afterOperator=+(joined.slice(joined.lastIndexOf("-")+1))
                console.log(afterOperator)
                const resultOp = substract(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)

            }

            else if(joined.includes("x")){
                
                const beforeOperator=+(joined.slice(0,joined.indexOf("x")))
                console.log(beforeOperator)
                const afterOperator=+(joined.slice(joined.indexOf("x")+1))
                console.log(afterOperator)
                const resultOp = multiply(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)

            }

            else if(joined.includes("/")){
                
                const beforeOperator=+(joined.slice(0,joined.indexOf("/")))
                console.log(beforeOperator)
                const afterOperator=+(joined.slice(joined.indexOf("/")+1))
                console.log(afterOperator)

                // division by zero impossible
                if(afterOperator===0){
                    result.textContent="CANNOT DIVIDE BY 0";
                    op=[];
                    opCount=0;
                }
                else{
                const resultOp = divide(beforeOperator,afterOperator);
                result.textContent=resultOp;
                op=[resultOp];
                opCount=0;
                console.log(result)
            }
            }
        }
        
    })
})
