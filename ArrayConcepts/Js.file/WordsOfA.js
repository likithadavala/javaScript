var wordsOfA = [];
var wordsOfB = [];
var wordsOfC = [];
var wordsOfD = [];
var wordsOfE = [];
var wordsOfF = [];
var wordsOfG = [];
var wordsOfH = [];
var words = [];

function onClickWordStartsWith() {
    debugger;
    var contentA = "";
    var contentB = "";
    var contentC = "";
    var contentD = "";
    var contentE = "";
    var contentF = "";
    var contentG = "";
    var contentH = "";
    var contentOfWord = "";
    var inputWord = document.getElementById("txtInputWord").value;

    if (inputWord.toLowerCase().startsWith("a")) {
        wordsOfA.push(inputWord);
    } else if (inputWord.toLowerCase().startsWith("b")) {
        wordsOfB.push(inputWord);
    } else if (inputWord.toLowerCase().startsWith("c")) {
        wordsOfC.push(inputWord);
    } else if (inputWord.toLowerCase().startsWith("d")) {
        wordsOfD.push(inputWord);
    } else if (inputWord.toLowerCase().startsWith("e")) {
        wordsOfE.push(inputWord);
    } else if (inputWord.toLowerCase().startsWith("f")) {
        wordsOfF.push(inputWord);
    } else if (inputWord.toLowerCase().startsWith("g")) {
        wordsOfG.push(inputWord);
    } else if (inputWord.toLowerCase().startsWith("h")) {
        wordsOfH.push(inputWord);
    }
    else {
        words.push(inputWord);
    }

    for (var i = 0; i < wordsOfA.length; i++) {
        contentA = contentA + "<p>" + (i + 1) + "." + "" + wordsOfA[i] + "</p><br>";
    }
    for (var j = 0; j < words.length; j++) {
        contentOfWord = contentOfWord + "<P>" + (j + 1) + "." + "" + words[j] + "</P><br>";
    }
    for (var k = 0; k < wordsOfB.length; k++) {
        contentB = contentB + "<p>" + (k + 1) + "." + "" + wordsOfB[k] + "</p><br>";
    }
    for (var l = 0; l < wordsOfC.length; l++) {
        contentC = contentC + "<p>" + (l + 1) + "." + "" + wordsOfC[l] + "</p><br>";
    }
    for (var m = 0; m < wordsOfD.length; m++) {
        contentD = contentD + "<p>" + (m + 1) + "." + "" + wordsOfD[m] + "</p><br>";
    }
    for (var n = 0; n < wordsOfE.length; n++) {
        contentC = contentC + "<p>" + (n + 1) + "." + "" + wordsOfE[n] + "</p><br>";
    }
    for (var o = 0; o < wordsOfF.length; o++) {
        contentC = contentC + "<p>" + (o + 1) + "." + "" + wordsOfF[o] + "</p><br>";
    }
    for (var p = 0; p < wordsOfG.length; p++) {
        contentC = contentC + "<p>" + (p + 1) + "." + "" + wordsOfG[p] + "</p><br>";
    }
    for (var q = 0; q < wordsOfH.length; q++) {
        contentC = contentC + "<p>" + (q + 1) + "." + "" + wordsOfH[q] + "</p><br>";
    }

    document.getElementById("divAResult").innerHTML = contentA;
    document.getElementById("divBResult").innerHTML = contentB;
    document.getElementById("divCResult").innerHTML = contentC;
    document.getElementById("divDResult").innerHTML = contentD;
    document.getElementById("divEResult").innerHTML = contentE;
    document.getElementById("divFResult").innerHTML = contentF;
    document.getElementById("divGResult").innerHTML = contentG;
    document.getElementById("divHResult").innerHTML = contentH;
    document.getElementById("divWordsResult").innerHTML = contentOfWord;
}
