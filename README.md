# JavaScript Concepts
JavaScript is a programming language used to make websites interactive and dynamic.
**What Can JavaScript Do?**
1.JavaScript is the programming language of the web.
2.It can calculate, manipulate and validate data.
3.It can update and change both HTML and CSS.
In JavaScript, var, let, and const are used to declare variables.**
**what is variable**
Variables are used to store data. Variable is nothing but one of container we can able to store single value at a time.
1. "var" is the old way to declare variables.
2. "let" is the modern way to declare variables.
3. "const" means constant.Used for fixed values.
JavaScript has different data types used to store different kinds of values.
**JavaScript Data Type**
There are mainly 2 categories:
1.Primitive Data Types
2.Non-Primitive (Reference) Data Types
**Why we use it?**
We use document.getElementById() to:
* Connect JavaScript with HTML
* Access specific elements easily
* Make webpages interactive and dynamic

**1. Primitive Data Types**

In HTML and JavaScript/CSS, Inline, Internal, and External are ways to write code.
1.Inline means writing code directly inside an HTML tag.
2.Internal means writing code inside the same HTML file using:
*<style> for CSS
*<script> for JavaScript
3.External means writing code in a separate file and linking it to HTML.

**1. Number**
In JavaScript, Number is a data type used to store numeric values.
Stores numbers (integer or decimal).
1.Adding numbers
2.Subtraction numbers
3.Multipliction numbers
4.Division Numbers
5.Remainder numbers
6.Even and Odd numbers
7.Prime numbers
8.Largest of two Biggest numbers

**2. Strings**
Collection of characters,collection of string and collection of symbols.
1.Strings are for storing text
2.Strings are written with quotes
A String in JavaScript is a data type used to store text or characters.
#Strings are written inside:
*Double quotes " "
*Single quotes ' '
*Backticks ``
1.BookInformtion
2.Conceptsofjavascript
3.Element calling
4.String Concepts
5.Sring Array:
An array that stores multiple string values.
A string = text/data inside quotes ("" or '')
pPrint:=name[0]
pLength:=name.length
pLastCharacter:=name[name.length-1]
**Interpolation**:In JavaScript, Interpolation means inserting variables or values inside a string.
pResult:`Hello ${name}, Welcome to ${course}`;
6.Sring Function:
**Uppercase**: toUpperCase() changes lowercase letters to uppercase.
**Lowercase**:toLowerCase() Converts to small letters.
**Trim**:In JavaScript, trim() is a string function used to remove extra spaces from the beginning and ending of a string.
**TrimStart**:In JavaScript, trimStart() is a string function used to remove spaces only from the beginning (start) of a string.
**TrimEnds**:In JavaScript, trimEnd() is a string function used to remove spaces only from the end of a string.
It works only with strings.
7.String Includes:
In JavaScript, includes() is a string function used to check whether a string contains a specific word or character.
document.getElementById("pResult").innerHTML = stringName.includes(stringSearch);
It returns:
* true → if the text exists
* false → if the text does not exist
8.String Index:
In JavaScript, indexOf() is a string function used to find the position (index) of a character or word inside a string.
document.getElementBdocumentyId("pResult").innerHTML = stringName.indexOf(searchString);
9.String Split:
In JavaScript, split() is a string function used to divide a string into parts and convert it into an array.
document.getElementById("pResult").innerHTML = stringName.split(".")[0];
document.getElementById("pResult1").innerHTML = stringName.split(".")[1];
10.String Starts:
In JavaScript, startsWith() is a string function used to check whether a string starts with a specific word or character.
document.getElementById("pResult").innerHTML = stringName.startsWith(stringSearch);
11.Strind Ends:
In JavaScript, endsWith() is a string function used to check whether a string ends with a specific word or character.
document.getElementById("pResult").innerHTML = stringName.endsWith(stringSearch);
12.Email Validation:
Email validation is used to check whether an email format is correct or not.
if (email.indexOf("@") < email.indexOf(".")) {
        document.getElementById("pResult").innerHTML = "Emil is valid"
    } else {
        document.getElementById("pResult").innerHTML = "Email is invalid"
    }
13.PDF Checker:(.pdf)
A PDF checker is used to verify whether the uploaded file is a PDF or not.
if (fileName.endsWith(".pdf")) {
        document.getElementById("pResult").innerHTML = "it is pdf"
    } else {
        document.getElementById("pResult").innerHTML = "it  is not pdf"
    }
14.Secured Websitecheck:(//http)
A secured website checker is used to check whether a website URL uses:
if (stringName.startsWith("http")) {
        document.getElementById("pResult").innerHTML = "It is securedsite";
    } else {
        document.getElementById("pResult").innerHTML = "It is not a securedsite"
    }
15.Dot Repeat:
In JavaScript, repeat() is a string function used to repeat a string multiple times.
document.getElementById("pResult").innerHTML = inputTest.repeat(repeatTest);
16.Dot Replace:
In JavaScript, replace() is a string function used to replace one word or character with another word or character.
document.getElementById("pResult").innerHTML=sentences.replaceAll(word,replaceWord);

**Arrays**
collection of elements ,collection of numbers,collection of symbols.
**why Array**
In JavaScript, an Array is used to store multiple values in a single variable.
Common Array Functions
Function   - Purpose
push()     - Add value
pop()	   - Remove last value
shift()    - Remove first value
unshift()  - Add first value

**Introduction to Array**
An array is a collection of elements stored in a contiguous memory location and accessed using an index.
pResult              : document.getElementById("pResult").innerHTML = flowers[inputName];
pResultlength        : document.getElementById("pResultlength").innerHTML = flowers.length;
pResultIndex         : document.getElementById("pResultIndex").innerHTML = flowers.length - 1;
pResultLastCharacte  : document.getElementById("pResultLastCharacter").innerHTML = flowers[flowers.length - 1];
pResultFirstCharacte : document.getElementById("pResultFirstCharacter").innerHTML = flowers[0];

**Add to array**
Adding to an array means inserting a new element into the array.
Arrays store multiple values, and sometimes we need to add more values later.
Here, we can use(.push)
flowers.push(inputName);
    document.getElementById("pResult").innerHTML = flowers;

**Muttable Concept**
Mutable means changeable.
If we can change the value after creating it, it is called mutable.
document.getElementById("pResult").innerHTML = numbers;
    var index = document.getElementById("txtIndex").value;
    var changeNumber = document.getElementById("txtChangeNumber").value;

    numbers[index] = changeNumber;
    document.getElementById("pResultMutable").innerHTML = numbers;
}








