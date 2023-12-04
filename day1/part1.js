const fs = require('fs');

var numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var decodedStr = '';
var i = 0, total = 0;

fs.readFile('input1.txt', ((err, data) => {
    let arrInput = data.toString().split('\n');
    arrInput.forEach(line => {
        decodedStr = '';
        for (i = 0; i <= line.length; i++) {
            if (line[i] in numList) {
                decodedStr += line[i];
            };
        }
        decodedStr = decodedStr[0] + decodedStr[decodedStr.length-1];
        total += Number(decodedStr);
        console.log(decodedStr);
    });
    console.log(arrInput.length,total);
}));