//~ Binary to ... Conversations
//! Binary to Decimal

let binToDecButton = document.querySelector("#btdButton");

const binToDec = () => {
    let binValue = document.querySelector("#btdInput").value;
    let result = document.querySelector(".btdResult");
    if (binValue.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    let pow = 1,
        dec = 0;
    for (let i = binValue.length - 1; i >= 0; i--) {
        dec += binValue[i] * pow;
        pow *= 2;
    }
    result.innerHTML = dec;
};

binToDecButton.addEventListener("click", binToDec);

//! Binary to Octal

let binToOctButton = document.querySelector("#btoButton");

const binToOct = () => {
    let binValue = document.querySelector("#btoInput").value;
    let result = document.querySelector(".btoResult");
    if (binValue.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    // binary to decimal
    let pow = 1,
        dec = 0;
    for (let i = binValue.length - 1; i >= 0; i--) {
        dec += binValue[i] * pow;
        pow *= 2;
    }
    // decimal to octal
    let oct = "";
    while (dec > 0) {
        let rem = dec % 8;
        oct += rem.toString();
        dec = Math.floor(dec / 8);
    }
    console.log(typeof oct);
    console.log(oct);
    oct = oct.split("").reverse().join("");
    result.innerHTML = oct;
};

binToOctButton.addEventListener("click", binToOct);

//! Binary to Hexadecimal

let binToHexaButton = document.querySelector("#bthButton");

const binToHexa = () => {
    let binValue = document.querySelector("#bthInput").value;
    let result = document.querySelector(".bthResult");
    if (binValue.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    // binary to decimal
    let pow = 1,
        dec = 0;
    for (let i = binValue.length - 1; i >= 0; i--) {
        dec += binValue[i] * pow;
        pow *= 2;
    }
    // decimal to hexadecimal
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hex = "";
    while (dec > 0) {
        let rem = dec % 16;
        hex += arr[rem];
        dec = Math.floor(dec / 16);
    }
    hex = hex.split("").reverse().join("");
    result.innerHTML = hex;
};

binToHexaButton.addEventListener("click", binToHexa);


//~ Decimal to ... Conversations

//! Decimal to Binary

let decToBinButton = document.querySelector("#dtbButton");

const DecToBin = () => {
    let dtbValueInString = document.querySelector("#dtbInput").value;
    let dtbValue = parseInt(dtbValueInString);
    let result = document.querySelector(".dtbResult");

    if (dtbValueInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    if (dtbValue == 0) {
        result.innerHTML = "0000";
        return;
    }

    let bin = "";
    while (dtbValue > 0) {
        let rem = dtbValue % 2;
        bin += rem;
        dtbValue = Math.floor(dtbValue / 2);
    }
    bin = bin.split("").reverse().join("");
    result.innerHTML = bin;
};

decToBinButton.addEventListener("click", DecToBin);


//! Decimal To Hexadecimal

let decToHexaButton = document.querySelector("#dthButton");

const dectoHex = () => {
    let dthInString = document.querySelector("#dthInput").value;
    let decValue = parseInt(dthInString);
    let result = document.querySelector(".dthResult");
    if (dthInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hex = "";
    while (decValue > 0) {
        let rem = decValue % 16;
        hex += arr[rem];
        decValue = Math.floor(decValue / 16);
    }
    hex = hex.split("").reverse().join("");
    result.innerHTML = hex;
};
decToHexaButton.addEventListener("click", dectoHex);

//! Decimal to Octal

let decToOctButton = document.querySelector("#dtoButton");

const DecToOct = () => {
    let dtoValueInString = document.querySelector("#dtoInput").value;
    let dtoValue = parseInt(dtoValueInString);
    let result = document.querySelector(".dtoResult");

    if (dtoValueInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    if (dtoValue == 0) {
        result.innerHTML = "0000";
        return;
    }

    let oct = "";
    while (dtoValue > 0) {
        let rem = dtoValue % 8;
        oct += rem.toString();
        dtoValue = Math.floor(dtoValue / 8);
    }
    console.log(oct)
    console.log(typeof oct)
    oct = oct.split("").reverse().join("");
    result.innerHTML = oct;
};

decToOctButton.addEventListener("click", DecToOct);


//~ Octal to ... Conversations

//! Octal to Binary
let otbButton = document.querySelector("#otbButton");

const octalToBin = () => {
    let otbValueInString = document.querySelector("#otbInput").value;
    let result = document.querySelector(".otbResult");

    if (otbValueInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }

    let binary = "";
    let i = 0;

    while (otbValueInString[i]) {
        switch (otbValueInString[i]) {
            case '0':
                binary += "000";
                break;
            case '1':
                binary += "001";
                break;
            case '2':
                binary += "010";
                break;
            case '3':
                binary += "011";
                break;
            case '4':
                binary += "100";
                break;
            case '5':
                binary += "101";
                break;
            case '6':
                binary += "110";
                break;
            case '7':
                binary += "111";
                break;
            default:
                alert(`\nInvalid Octal Digit ${otbValueInString[i]}`);
                break;
        }
        i++;
    }

    result.innerHTML = binary;

};

otbButton.addEventListener("click", octalToBin);


//! Octal to Decimal

let otdButton = document.querySelector("#otdButton");

const octalToDec = () => {
    let otdValueInString = document.querySelector("#otdInput").value;
    let otdValue = parseInt(otdValueInString);
    let result = document.querySelector(".otdResult");

    if (otdValueInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }

    let dec = 0,
        rem = 0;
    let base = 1;

    while (otdValue != 0) {
        rem = otdValue % 10;
        dec = dec + (rem * base);
        otdValue = Math.floor(otdValue / 10);
        base = base * 8;
    }

    result.innerHTML = dec;

};

otdButton.addEventListener("click", octalToDec);




//~ Hexadecimal to ... Conversations

//! Hexadecimal to Decimal
let hexToDecButton = document.querySelector("#htdButton");

const hexToDec = () => {
    let htdInString = document.querySelector("#htdInput").value.toUpperCase();
    console.log(htdInString);
    let hexValue = parseInt(htdInString);
    let result = document.querySelector(".htdResult");
    if (htdInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    let length = htdInString.length;
    let base = 1;
    let dec = 0;
    for (let i = length - 1; i >= 0; i--) {
        if (htdInString[i] >= '0' && htdInString[i] <= '9') {
            console.log(htdInString[i]);
            dec += (htdInString[i].charCodeAt(0) - 48) * base;
            base = base * 16;
        } else if (htdInString[i] >= 'A' && htdInString[i] <= 'F') {
            console.log(htdInString[i]);
            dec += (htdInString[i].charCodeAt(0) - 55) * base;
            base = base * 16;
        }
        // console.log(dec)
        // console.log(typeof dec)
        result.innerHTML = dec;
    }

};
hexToDecButton.addEventListener("click", hexToDec);

//hexadecimal to octal
let hexToOctButton = document.querySelector("#htoButton");

const hexToOct = () => {
    let htoInString = document.querySelector("#htoInput").value.toUpperCase();
    console.log(htoInString);
    let hexValue = parseInt(htoInString);
    let result = document.querySelector(".htoResult");
    if (htoInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    let length = htoInString.length;
    let base = 1;
    let dec = 0;
    for (let i = length - 1; i >= 0; i--) {
        if (htoInString[i] >= '0' && htoInString[i] <= '9') {
            console.log(htoInString[i]);
            dec += (htoInString[i].charCodeAt(0) - 48) * base;
            base = base * 16;
        } else if (htoInString[i] >= 'A' && htoInString[i] <= 'F') {
            console.log(htoInString[i]);
            dec += (htoInString[i].charCodeAt(0) - 55) * base;
            base = base * 16;
        }
    }
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7"]
    let oct = "";
    while (dec > 0) {
        let rem = dec % 8;
        oct += arr[rem];
        dec = Math.floor(dec / 8);
    }
    console.log(oct)
    console.log(typeof oct)
    oct = oct.split("").reverse().join("");
    result.innerHTML = oct;
};
hexToOctButton.addEventListener("click", hexToOct);

//hexadecimal to Binary
let hexToBinButton = document.querySelector("#htbButton");

const hexToBin = () => {
    let htbInString = document.querySelector("#htbInput").value.toUpperCase();
    let result = document.querySelector(".htbResult");
    if (htbInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    let binary = "";
    let i = 0;

    while (htbInString[i]) {
        switch (htbInString[i]) {
            case '0':
                binary += "0000";
                break;
            case '1':
                binary += "0001";
                break;
            case '2':
                binary += "0010";
                break;
            case '3':
                binary += "0011";
                break;
            case '4':
                binary += "0100";
                break;
            case '5':
                binary += "0101";
                break;
            case '6':
                binary += "0110";
                break;
            case '7':
                binary += "0111";
                break;
            case '8':
                binary += "1000";
                break;
            case '9':
                binary += "1001";
                break;
            case 'A':
                binary += "1010";
                break;
            case 'B':
                binary += "1011";
                break;
            case 'C':
                binary += "1100";
                break;
            case 'D':
                binary += "1101";
                break;
            case 'E':
                binary += "1110";
                break;
            case 'F':
                binary += "1111";
                break;
            default:
                alert(`\nInvalid Hexa Digit ${htbInString[i]}`);
                break;
        }
        i++;
    }
    result.innerHTML = binary;
};

hexToBinButton.addEventListener("click", hexToBin);