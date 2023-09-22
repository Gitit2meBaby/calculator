I wanted to incl;ude all the functionality that a normal calculator would have, this includes being able to chain operations together (ie 1 + 1 + 1 + 1 =).
I also wanted to be able to use the calculated value and then continue to append more operands to that value.

I decided to store the display input.value as storeNumber, and bring that back in where necessary.

There was issues with the decimal point in the eval method, but using trim() seemed to fix that up

I initially used a display as a <h3> with a hard coded 0 and it always had to be dropped, this became easier when i instead changed to an input and used a placeholder for the 0. but there might still be remnant code that i could clean up from this original markup issue.
I think its better as an input beause then the user can type and not just have to use the buttons.

