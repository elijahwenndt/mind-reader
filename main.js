const containerArray = [
      {
        header: "I can read your mind",
        button: "next page",
        bottomText: " ",
        backButton: " ",
        resetButton: " "
    }
    ,
    {
        header:"Pick a number from 01-99",
        button:"next page",
        bottomText: "when you have your number click next",
        backButton: "previous page",
        resetButton: "reset"
    }
    ,
    {
        header: "Add both digits together to get a new number",
        button: "next page",
        bottomText: "EX: 14 is 1+4=5. click next to proceed",
        backButton: "previous page",
        resetButton: "reset"
    }
    ,
    {
        header: "Subtract your new number from the original number",
        button: "next page",
        bottomText: "EX: 14-5=9. click next to proceed",
        backButton: "previous page",
        resetButton: "reset"
    }
    ,
    {
        header: " ",
        button: "next page",
        bottomText: "Find your new number. Take note of the symbol beside the number",
        backButton: "previous page",
        resetButton: "reset"
    }
    ,
    {
        header: " ",
        button: "next page",
        bottomText: "6",
        backButton: "previous page",
        resetButton: "reset"
    }
]
let x = 0

function pageUpdate () {
    document.getElementById('header').innerHTML = containerArray[x].header;
    document.getElementById('btn').innerHTML = containerArray[x].button;
    document.getElementById('bottomtext').innerHTML = containerArray[x].bottomText;
    document.getElementById('back').innerHTML = containerArray[x].backButton;
    document.getElementById('reset').innerHTML = containerArray[x].resetButton;
    
    }
    pageUpdate();
    

function buttonClickForward (e) {
   
    ++x
    if (x >= 6) {
        x = 0
    } 
    pageUpdate()
}

function buttonClickBack (e) {
    --x
    if (x < 0) {
        x = 0
    }

    pageUpdate()
}
function reset (e){
    x=0
    pageUpdate()
}
let btnClick = document.getElementById('btn');
btnClick.addEventListener('click', buttonClickForward)

let btnClickBack = document.getElementById('back')
btnClickBack.addEventListener('click', buttonClickBack)

let btnReset = document.getElementById('reset')
btnReset.addEventListener('click', reset)

//a modified version of the 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
let symbol = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
let otherSymbol = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function magic() {
    let shuffle = shuffleArray(symbol);
    // console.log(shuffle);
    let otherShuffle = shuffleArray(otherSymbol);
    console.log(otherShuffle);
    let emptyArray = [];
    
    for (let i = 1; i < 101 ; i++) {
        let x = Math.floor(Math.random() * otherSymbol.length); 

        
        if (i % 9 === 0) {
            emptyArray.push(i + "--" + symbol[1]);
        }
        else if (i % 9 !== 0) {
            emptyArray.push(i + "--" + otherSymbol[x]);  

        }
    
    };
    containerArray[5].header=symbol[1]
    containerArray[4].header=emptyArray.join('\r\n')
    return emptyArray;
}

console.log(magic())


// function resetPage () {
//     document.getElementById('rstbtn').innerHTML = containerArray[x].resetButton;
// }
// resetPage();

// let rstClick = document.getElementById('rstbtn');
// rstClick.addEventListener('click', handleReset);


// function pageUpdate () {
// document.getElementById('header').innerHTML = containerArray[x].header;
// document.getElementById('btn').innerHTML = containerArray[x].button;
// document.getElementById('bottomtext').innerHTML = containerArray[x].bottomText;
// // document.getElementById('rstbtn').innerHTML = containerArray[x].resetButton;

// }
// pageUpdate();






    