# mind-reader

# pseudocode

## first step

START <br>
SET empty divs placeholders with appropriate IDs to call later <br>
INITIALIZE my objects <br>
---SET container array to contain the objects <br>
---SET objects with there key value pairs <br>
SET global variable x=0 <br>
initialize a function to update the page <br>
---use dom manipulation to grab the correct div ID <br>
---SET that = the correct dot notation to GET the key value pair <br>
---USE x in place of a number so we can increase and decrease the index number in the dont notation reference <br>
------within the page update function <br>
---------IF page 1 or 5 <br>
------------display no back and reset button <br>
---------ELSE <br>
------------display all buttons <br>
RUN Page update function <br>
initialize forward button function <br>
---increment x by 1 <br>
-----if x>the last page <br>
-----then set x = 0 <br>
---re-run page update within the forward button function <br>
initialize function button click back <br>
---decrease x by 1 <br>
------if x< the first page <br>
------then set x = 0 <br>
---re-run page update within the forward button function <br>
initialize reset function <br>
---x=0 <br>
---rerun page update <br>
GET button IDs  <br>
--SET them equal to a variable <br>
--ADD event listeners(click) to the variable <br>
-----RUN button click functions on click defined above <br>
Initialize the shuffle array function <br>
---eventually i came to a solution that uses the Durstenfeld Shuffle algorithm to shuffle the array <br>
initialize the function to check if its divisible by 9 <br>
---run the shuffle function passing in the symbol array <br>
---set up empty array for the new array to populate after conditionals are met <br>
---set a local variable to a random number <br>
---if divisible by 9 <br>
------return same symbol <br>
---else  <br>
------return random symbol <br>
---push results to empty array <br>
---push new array into the correct key object pair at the correct index <br>

(i will clean this up later, alot of my initial pseudocode was put onto a white board while working through problems)
