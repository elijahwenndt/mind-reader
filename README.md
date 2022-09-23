# mind-reader

# pseudocode

## first step

START
SET empty divs placeholders with appropriate IDs to call later
INITIALIZE my objects
---SET container array to contain the objects
---SET objects with there key value pairs
SET global variable x=0
initialize a function to update the page
---use dom manipulation to grab the correct div ID
---SET that = the correct dot notation to GET the key value pair
---USE x in place of a number so we can increase and decrease the index number in the dont notation reference
------within the page update function
---------IF page 1 or 5
------------display no back and reset button
---------ELSE
------------display all buttons
RUN Page update function
initialize forward button function
---increment x by 1
-----if x>the last page
-----then set x = 0
---re-run page update within the forward button function
initialize function button click back 
---decrease x by 1
------if x< the first page
------then set x = 0
---re-run page update within the forward button function
initialize reset function
---x=0
---rerun page update
GET button IDs 
--SET them equal to a variable
--ADD event listeners(click) to the variable
-----RUN button click functions on click defined above
Initialize the shuffle array function
---eventually i came to a solution that uses the Durstenfeld Shuffle algorithm to shuffle the array
initialize the function to check if its divisible by 9 
---run the shuffle function passing in the symbol array
---set up empty array for the new array to populate after conditionals are met
---set a local variable to a random number
---if divisible by 9
------return same symbol
---else 
------return random symbol
---push results to empty array
---push new array into the correct key object pair at the correct index

(i will clean this up later, alot of my initial pseudocode was put onto a white board while working through problems)
