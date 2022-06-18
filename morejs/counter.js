let numbersaved = 1;

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
    if (parseInt(document.getElementById("number").innerHTML) == 0) {
        document.getElementById("started").innerHTML = `Started ${time()}`;
    }
    else {
        document.getElementById("started").innerHTML = `Already counted`;
    }
}
function addit() {
    let number = parseInt(document.getElementById("number").innerHTML);
    if ((document.getElementById("started").innerHTML).includes(`Started`)) {
        number++;
        console.log(number);
        document.getElementById("number").innerHTML = number;
    }
    else {
        document.getElementById("started").innerHTML = "Haven't Pressed Start Yet!"
    }
    
}
function saveit() {
    let information = document.getElementById("saved").innerHTML;
    if (document.getElementById("number").innerHTML == "0") {
        information += `<tr> <td> ${numbersaved} </td> <td> ${document.getElementById("number").innerHTML} </td> <td> N/A </td> <td> N/A </td></tr> \n`;
        document.getElementById("saved").innerHTML = information;
        document.getElementById("number").innerHTML = 0;
        numbersaved++;
        document.getElementById("started").innerHTML = "";
    }
    else {
        let ending = `Ended ${time()}`
        information += `<tr> <td> ${numbersaved} </td> <td> ${document.getElementById("number").innerHTML} </td> <td> ${document.getElementById("started").innerHTML} </td> <td> ${ending} </td></tr> \n`;
        document.getElementById("saved").innerHTML = information;
        document.getElementById("number").innerHTML = 0;
        numbersaved++;  
        document.getElementById("started").innerHTML = "";
    }
    
}

