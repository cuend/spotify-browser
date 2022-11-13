--Readme document for David Cuen, cuend@uci.edu, 61157101 --

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

*/15
- 2/2 Communicating with the webserver
- 2/2 Populating information about the user
- 3/3 Populating the search component
- 3/3 Artist page
- 2.5/2.5 Album page
- 2.5/2.5 Track page


2. How long, in hours, did it take you to complete this assignment?
    - About 12 hours total.


3. What online resources did you consult when completing this assignment? (list specific URLs)
    - https://developer.spotify.com/documentation/web-api/
    - https://gka.github.io/chroma.js/#color-hsl
    - https://mdbootstrap.com/docs/angular/
    - https://stackoverflow.com/


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
    - none



5. Did you add a bonus feature to your submission? If so, what is it and how should we see it?
    - no, sadly.


6. Is there anything special we need to know in order to run your code?
    - not sure if this was required but I had an error that kept happening when switching to the track category after searching through the artists category. I made two helper functions one of which prevents the category from officially changing until the search button is clicked. The second change is clearing the resources data before each search. The flow would go something like this (User Input + Category -> clearResources() -> defineCategory -> Search()...) I had no issues on my client but I do wonder if this has any side effects that I might not have noticed.

