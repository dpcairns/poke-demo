# Poke Catcher

## HTML Setup
0) Instructions
1) Three UNIQUE clickable pokemon images

`/results` page: 
1) Generate caughts + encountered for each pokemon

## Plan
1) Load three pokemon
    1) Three NEW pokemon show up on the page
        - Generate three random pokemon
        - Check that they're unique (none of the ids are the same).
        - If now . . . generate 3 more, and repeat until they are unqie.
    1) Increment the seen property for all 3 new pokemon
        - On Loading . . .
        - For each of these 3 pokemon,
            - If they've seen this pokemon before
                - Grab that particular object from the 'cart' and increment its `seen` property.
            - If they've NOT seen this pokemon before
                - Initialize a new "cart" with a `seen: 1` and `caught: 0`
        - On click,
            - Increment the `caught` property of the clicked pokemon
            - If the user has done this 10 times, redirect to rhe results page
            - Otherwise, load 3 more pokemon and REPEAT