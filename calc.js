let prevVal = 0; //store prev number entered in the entry area
let newVal = 0; 
let tempVal = 0;
let tax = 1.13;
let resultVal = 0;
let mathOperator = 0;
let decimalClicked = false; //track decimal button clicks and leave it false since it does not start with decimal when you turn on calculator
let valMemStored = "";

function numButPress(num){
    if(resultVal){
        newVal = num;
        resultVal = "";
    } else {
        if(num === '.'){
            if(decimalClicked != true){
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    document.getElementById("entry").value = newVal;
}

function mathButPress(operator){
    if(!resultVal){
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }

    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";
}

function clearButPress(){
    prevVal = "";
    newVal = ""; 
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}

function pasteButPress(num){
    if(valMemStored){
        document.getElementById("entry").value = valMemStored;
        newVal = valMemStored;
    }
}

function equalButPress(num){
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch(mathOperator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        case "%":
            tempVal= prevVal * (newVal / 100);
            resultVal = (prevVal - tempVal) * tax;
            break;
        default:
            resultVal = newVal;
    }

    prevVal = resultVal;
    document.getElementById("entry").value = resultVal;
}