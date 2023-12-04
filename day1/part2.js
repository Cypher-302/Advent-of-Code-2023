const fs = require('fs');

var arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arrStrNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var decodedStr = '', sLine = '', tempNumStr = '';
var i = 0, total = 0;
var flag = true;

fs.readFile('./day1/input.txt', ((err, data) => {
    let arrInput = data.toString().split('\n');
    arrInput.forEach(line => {
        decodedStr = '';
        sLine = line;
        do {
            for (i = 0; i <= sLine.length; i++) {
                if (sLine.includes(arrStrNum[i])) {
                    tempNumStr = arrStrNum[i].slice(0,2) + (i + 1).toString() + arrStrNum[i].slice(2,arrStrNum[i].length);

                    sLine = sLine.replace(arrStrNum[i], tempNumStr);
                } else flag = false;
            }
        } while (flag);

        for (i = 0; i <= sLine.length; i++) {
            if (sLine[i] in arrNum) {
                decodedStr += sLine[i];
            };
        }
        decodedStr = decodedStr[0] + decodedStr[decodedStr.length - 1];
        console.log(decodedStr)
        total += Number(decodedStr);
    });
    console.log(arrInput.length, total);
}));
