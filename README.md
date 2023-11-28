# Spotify Web Browser

The Spotify Web Browser is a web application developed with TypeScript, Angular, Node.js, and Express. This project highlights my expertise in creating highly responsive and secure web applications, specifically tailored for seamless music browsing, searching, and streaming from Spotify's platform.

## Technologies Used:

### 1. TypeScript
- **Description:** TypeScript is employed for developing the front-end of the Spotify Web Browser, providing a statically-typed and scalable codebase.
- **Skills Demonstrated:** Strong typing, enhanced developer experience, improved maintainability.

### 2. Angular
- **Description:** Angular serves as the front-end framework, enabling the creation of dynamic and feature-rich user interfaces for music browsing and streaming.
- **Skills Demonstrated:** Component-based architecture, reactive programming, front-end development.

### 3. Node.js
- **Description:** Node.js is utilized on the server side for building a scalable and efficient backend to support the Spotify Web Browser's functionalities.
- **Skills Demonstrated:** Backend development, server-side JavaScript, asynchronous programming.

### 4. Express
- **Description:** Express is the backend framework for creating a robust and scalable API to communicate with the Spotify platform.
- **Skills Demonstrated:** RESTful API design, middleware usage, routing.

## Project Highlights:

- **Highly Responsive Web Application:** The Spotify Web Browser is engineered to provide a highly responsive user experience, ensuring seamless music browsing, searching, and streaming. Information is drawn directly from the user's spotify account including their most listened to tracks/artists. 

- **Optimized Page Load Times:** Achieved remarkable page load times of approximately 1.5 seconds through the implementation of promise-based data fetching and asynchronous operations.

- **Secure OAuth Authorization:** Enhanced application security by implementing OAuth authorization code flow with PKCE (Proof Key for Code Exchange), ensuring secure access to the Spotify API.

---

The Spotify Web Browser project showcases my proficiency in creating responsive and secure web applications using TypeScript, Angular, Node.js, and Express. It demonstrates my ability to optimize page load times, implement robust security measures, and integrate with third-party APIs for a seamless user experience. For recruiters seeking a candidate with a strong foundation in full-stack development, this project serves as a testament to my skills and capabilities.


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

