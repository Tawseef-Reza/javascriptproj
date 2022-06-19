let numbersaved = 1;
const started = document.getElementById("started");

const sleep = function(milliseconds) {
    return new Promise(function(resolve) { setTimeout(resolve, milliseconds) })
}
function time() {
    let isAm = true;
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    if (parseInt(s) < 10) {
        s = "0" + s;
    }
    if (parseInt(m) < 10) {
        m = "0" + m;
    }
    if (parseInt(h) > 12) {
        h -= 12;
        isAm = false;
    }
    else if (parseInt(h) == 12) {
        isAm = false;
    }
    if (isAm == true) {
        return `${h}:${m}:${s} AM`; 
    }
    else {
        return `${h}:${m}:${s} PM`;
    }

}

function startit() {
    if ((started.innerHTML).includes(`Started`)) { //checks if they already pressed started
        console.log(started);
        console.log(started.innerHTML);
        const previousval = started.innerHTML;
        
        document.getElementById("starter").disabled = true;
        document.getElementById("adder").disabled = true;
        document.getElementById("saver").disabled = true;
        
        started.innerHTML = "Already started.";
        console.log(started.innerHTML);
        sleep(300).then(function() {
            
            console.log(started.innerHTML);
            sleep(500).then(function() {
                console.log("value at first dot is" + started.innerHTML);
                started.innerHTML = started.innerHTML + ".";
                sleep(500).then(function() {
                    console.log("value at first dot is" + started.innerHTML);
                    started.innerHTML = started.innerHTML + ".";
                    sleep(500).then(function() {
                        console.log("value at first dot is" + started.innerHTML);
                        started.innerHTML = started.innerHTML + ".";
                        sleep(1500).then(function() {
                            document.getElementById("starter").disabled = false;
                            document.getElementById("adder").disabled = false;
                            document.getElementById("saver").disabled = false;
                            started.innerHTML = previousval;
                            console.log("completed");
                        })
                        
                    })
                })
            })
            
        }
        )
        
    }
    else { //if they didnt already press start, then u can do it
        document.getElementById("started").innerHTML = `Started ${time()}`;
    }
}
function addit() {
    let number = parseInt(document.getElementById("number").innerHTML);
    if ((document.getElementById("started").innerHTML).includes(`Started`)) { //checks if it has started
        number++;
        console.log(number);
        document.getElementById("number").innerHTML = number;
    }
    else { //hasn't started, so dont run
        document.getElementById("started").innerHTML = "Haven't Pressed Start Yet!"
    }
    
}
function saveit() {
    let information = document.getElementById("saved").innerHTML;
    if ((document.getElementById("started").innerHTML).includes(`Started`)) {
        let ending = `Ended ${time()}`
        information += `<tr> <td> ${numbersaved} </td> <td> ${document.getElementById("number").innerHTML} </td> <td> ${document.getElementById("started").innerHTML} </td> <td> ${ending} </td></tr> \n`;
        document.getElementById("saved").innerHTML = information;
        document.getElementById("number").innerHTML = 0;
        numbersaved++;  
        document.getElementById("started").innerHTML = "";
        
    }
    else {
        information += `<tr> <td> ${numbersaved} </td> <td> N/A </td> <td> N/A </td> <td> N/A </td></tr> \n`;
        document.getElementById("saved").innerHTML = information;
        document.getElementById("number").innerHTML = 0;
        numbersaved++;
        document.getElementById("started").innerHTML = "";
    }
    
}

