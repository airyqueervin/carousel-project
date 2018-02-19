# carousel-project

## Requirements:

This app uses React and Webpack. To run the project, follow the instructions here: [Go to setup](#setup)

Fetch items from the API And display them as a carousel. Follow the
design as closely as possible (wireframes are included in the project).

The carousel should show 4 items at a time, and display a total of 16
items. The user should be able to navigate the items using an arrow on
either side of the carousel.

If the item has a video link, please include a button that links to the
video and opens in a new window.

Each item should have a heart icon. If the user clicks on the heart, the user
rates the item.

Once an item is rated, that item should disappear. Make sure there are always 16
items on the page.

Please refrain from using a carousel library. Other than that, you can
use any libraries or frameworks you like for this assignment.

Icons can be found at http://google.github.io/material-design-icons/

A similar font can be found at https://fonts.google.com/specimen/Roboto

# Setup
## To run the API server:

`npm install && npm run start && npm run build`

to get items:

`GET localhost:3000/items/?p=${page}&amt=${amt}`

where `page` is an integer representing page number, and `amt` is an integer
representing the number of items per page.

to rate an item:

`POST localhost:3000/items/${id}/`

```
body: {
  rating: 'like' || null
}
```

** The server is reading and writing from disc memory, so there are a limited
number of items available, and it won't save your ratings once it restarts!


## Submitting the completed assignment

You can fork this github repository and complete it through your github
account. When you're finished with the assignment, send a link to your
forked repo to amelia@crossingminds.com. If you have any troubles or
questions at all along the way, you can reach out at the same email.

Be prepared to talk about the decisions you made later in the interview process.
