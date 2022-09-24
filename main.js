//first set up the array that contains the objects
const containerArray = [
      {
        header: "I can read your mind",
        button: "Get Started",
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
        bottomText: "Find your new number. Take note of the letter beside the number. I will read your mind and guess your letter",
        backButton: "previous page",
        resetButton: "reset"
    }
    ,
    {
        header: " ",
        button: " ",
        bottomText: "is this your letter?",
        backButton: "previous page",
        resetButton: "try again?"
    }
]
//set up a global variable = 0 
let x = 0

//the function when ran both gets the correct IDs from the HTML and then sets the inside of the div with what is stored in the object
function pageUpdate () {

    //using dot notation to grab the correct index in the array with the correct key object pair
    document.getElementById('header').innerHTML = containerArray[x].header;
    document.getElementById('btn').innerHTML = containerArray[x].button;
    document.getElementById('bottomtext').innerHTML = containerArray[x].bottomText;
    document.getElementById('back').innerHTML = containerArray[x].backButton;
    document.getElementById('resetbtn').innerHTML = containerArray[x].resetButton;
    
    
    if (x === 0) {
        back.classList.add('d-none');
        resetbtn.classList.add('d-none');
        btn.classList.remove('d-none')  
    }
    else if (x === 5) {
        resetbtn.classList.remove('d-none');
        btn.classList.add('d-none')
        back.classList.add('d-none')
        
    }
    else {
        back.classList.remove('d-none')
        resetbtn.classList.remove('d-none')
        btn.classList.remove('d-none')
    }
    

    }

    //runs the function directly after setting it up. because x = 0 at the start, it displays the first page
    pageUpdate();
   
    
//set up the click function, when the button gets clicked, increments x by 1. this in turn sets the global variable and thus the index of the containerArray
//then it updates the page
function buttonClickForward () {
    ++x
    if (x >= 6) {
        x = 0  
    } 
    pageUpdate()
}

//same thing as above but goes back a page
function buttonClickBack () {
    --x
    if (x < 0) {
        x = 0
    }
    pageUpdate()
}

//similar concept as above but instead when the reset button is clicked it sets the global variable back to 0
function reset (){
    x=0
    pageUpdate()
    magic()
}

//sets variable = the grabbed button ID
//adds event listener to the button - when clicked it runs the function stated above
let btnClick = document.getElementById('btn');
btnClick.addEventListener('click', buttonClickForward)

let btnClickBack = document.getElementById('back')
btnClickBack.addEventListener('click', buttonClickBack)

let btnReset = document.getElementById('resetbtn')
btnReset.addEventListener('click', reset)


let symbol = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]




function magic() {

    let solution = Math.floor(Math.random() * symbol.length)
    
    let emptyArray = [];
    
    for (let i = 0; i < 100 ; i++) {

        let filler = Math.floor(Math.random() * symbol.length); 

        if (i % 9 === 0) {

            //pushes 
            emptyArray.push(i + ": " + symbol[solution] + '<br>');
        }
        else if (i % 9 !== 0) {
            emptyArray.push(i + ": " + symbol[filler] + '<br>');  

        }
        else if (i === 0) {
            emptyArray.push(i + ": " + symbol[solution] + '<br>');
        }
    
    };
    containerArray[5].header=symbol[solution]
    containerArray[4].header=emptyArray.join('\r\n')
    return emptyArray;
}

console.log(magic())









    