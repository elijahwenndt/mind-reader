const containerArray = [
      {
        header: "test1",
        button: "test2",
        bottomText: "test3",
        resetButton: "reset"
    }
    ,
    {
        header:"2ndarraytest1",
        button:"2ndarraytest1",
        bottomText: "2ndarraytest1",
        resetButton: "reset"
    }
    ,
    {
        header: "3",
        button: "3",
        bottomText: "3",
        resetButton: "reset"
    }
    ,
    {
        header: "4",
        button: "4",
        bottomText: "4",
        resetButton: "reset"
    }
    ,
    {
        header: "5",
        button: "5",
        bottomText: "5",
        resetButton: "reset"
    }
    ,
    {
        header: "6",
        button: "6",
        bottomText: "6",
        resetButton: "reset"
    }
]



//first mix array
//s
//this is straight up stolen from stack overflow
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }
// let symbol = ["t", "e", "s", "t"]



// function magic() {
//     shuffleArray(symbol);
//     for (i = 0; i < 100 ; i++) {
//         if (i % 9 === 0) {
            
//         }
//         else {
//             return i
//         }
// }
// }
// console.log(magic())
    
function pageUpdate () {
    document.getElementById('header').innerHTML = containerArray[x].header;
    document.getElementById('btn').innerHTML = containerArray[x].button;
    document.getElementById('bottomtext').innerHTML = containerArray[x].bottomText;
    document.getElementById('rstbtn').innerHTML = containerArray[x].resetButton;
    
    }
    pageUpdate();


function buttonClickForward (e) {
   
    ++x
    if (x > 6) {
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

let btnClick = document.getElementById('btn');
btnClick.addEventListener('click', buttonClickForward)

let btnClickBack = document.getElementById('rstbtn')
btnClickBack.addEventListener('click', buttonClickBack)


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






    