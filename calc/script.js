let currentInput = "";
let historyInput = "";

function btnclk(val){
    currentInput+=val;
    document.getElementById("disp").value=currentInput;
}
function allClear(){
    currentInput = "";
    historyInput = "";
    document.getElementById("disp").value = "";
    document.getElementById("history").innerText = "";
}
function calculate(){
    let expression = historyInput + currentInput;
    try{
        let result = eval(expression);
        document.getElementById("history").innerText = expression + " =";
        document.getElementById("disp").value = result;
        currentInput = result.toString();
        historyInput = "";
    }catch(e){
        document.getElementById("disp").value="error"
    }
}
function operator(op) {
    if (currentInput === ""  && historyInput === "") return;
    historyInput += currentInput + " " + op + " ";
    document.getElementById("history").innerText = historyInput;
    currentInput = "";
    document.getElementById("disp").value = "";
}