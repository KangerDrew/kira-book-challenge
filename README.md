# Kira Coding Challenge

This is a simple app to show books from the provided data. 

## Demo

!["Demo"](https://github.com/KangerDrew/kira-book-challenge/blob/master/react-front-end/docs/demo.gif)

## Primary Dependencies

- axios
- material ui
- sass

## How to start the app

1. Fork this repository, then clone your fork of this repository to your local machine.
2. Install dependencies using the `yarn` command. This command must be run twice - once in the client directory, and once more in the server directory.
3. Start the backend by running the  `yarn start` command from the server directory. You should see the following message on the terminal: "Express seems to be listening on port 8080 so that's pretty good 👍".
4. Start the app by running the `yarn start` command from the client directory. The app will be served at <http://localhost:3000/>. Your default browser should open up and you are ready to start!

### Technical Constraints

- Your backend must serve data through a single API endpoint. All parameters ingested are up to you, but the only requirement is that the data must be paginated, limited to maximum 3 books per page.
- No explicit database implementation is required.

### Feature Set
- Must list all books in inventory (by default)
- Allow searching of books by title
- Allow reservation of books
- View books currently reserved

## Side Notes

This app challenge took me approximately 9 hours to complete. Material UI components were used
to style and format majority of the components. Applied minor css to few components (specifically for
changing font styles on certain parts). I also added image links to the provided data to add more 
substance to the website.

### Challenges

- Implementing pagination took me the longest, since I had to go through various documentations and video tutorials online.
- Initially I wasn't sure how to keep track of reservation. Ended up using object state to track of both available books and number of reserved book for each unique book id.

### Potential Strech Goals

- Currently the app resets on reload, and doesn't make any post request to adjust the provided data with the updated info on the remaining stocks. Implementing database would fix this problem.