function keyHandler(num){
    if(num == "random"){
        val = Math.floor(1000 + Math.random() * 9000);
        document.getElementById('pinOutput').value = val;
    }
    let output = getOutput();
    outputGenerator(num,output);
    if(num == 'backspace'){
        if(output != NaN){
            output = output.substr(0,output.length - 1);
            PrintOutput(output);
        }
    }
    if(num == 'clear'){
        if(output != NaN){
            PrintOutput("");
        }
    }
    if(num == 'submit'){
        if(val == output){
            document.getElementById('pinMatch').style.display = "block";
            document.getElementById('pinNotMatch').style.display = "none";
        }else{
            document.getElementById('pinNotMatch').style.display = "block";
            document.getElementById('pinMatch').style.display = "none";
        }
    }
}

let pinNotMatch = document.getElementById('pinNotMatch');
pinNotMatch.style.display = "none";
let pinMatch = document.getElementById('pinMatch');
pinMatch.style.display = 'none';

function getOutput(){
    return document.getElementById('output').value;
}
function PrintOutput(num){
    document.getElementById('output').value = num;
}

function outputGenerator(num,output){
    if(num != 'random' && num !='submit'){
        if(output != NaN){
            output = output + num;
            PrintOutput(output);
        }
    }
}