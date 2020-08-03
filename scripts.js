let count = 0;
function keyHandler(num){
    if(num == "random"){
        val = Math.floor(1000 + Math.random() * 9000);
        document.getElementById('pinOutput').value = val;
    }
    let output = getOutput();
    //this function for col number button
    outputGenerator(num,output);
    //backspace delete single letter form input filled
    if(num == 'backspace'){
        if(output != NaN){
            output = output.substr(0,output.length - 1);
            PrintResult(output);
        }
    }
    // clear from input filled 
    if(num == 'clear'){
        if(output != NaN){
            PrintResult("");
        }
    }
    //check pin 
    
    if(num == 'submit'){
        
       
        if(val == output){
            document.getElementById('pinMatch').style.display = "block";
            document.getElementById('pinNotMatch').style.display = "none";
        }else{
            count++;
            if(count<4){
                document.getElementById('pinNotMatch').style.display = "block";
                document.getElementById('pinMatch').style.display = "none";
            }else{
                document.getElementById('try').style.display = "block";
            }
        }
    }
}
//this function takes output value from input field
function getOutput(){
    return document.getElementById('output').value;
}
//this give us final output
function PrintResult(num){
    document.getElementById('output').value = num;
}
//this function take number value form number button
function outputGenerator(num,output){
    if(num != 'random' && num !='submit'){
        if(output != NaN){
            output = output + num;
            PrintResult(output);
        }
    }
}