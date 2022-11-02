# User Search

## acceptance criteria progress
 - UI is styled to spec = still needs some tidy up work on search button and add button when a large data set is returned
 - After a user types 2 characters, matches are suggested below the search input = Done
 - Matches on first and last name = Done
 - After a user selects a match, all fields are returned and displayed per UI spec = Done, may need further UI tweaks, go button also returns results for current type search term
 - User can add to the dataset = Done, although backend implementation is just maintaining a list in the c# repository and not currently writing to a database/nosql etc
 - New searches return newly created user info = Done, also set it up to display newly created user after adding, but any future searches will return created users
 - Bonus: phone and email validation = Done basic number validation for phone, email validates front end and backend, frontend using built in angular and regex backend
 - Bonus: duplicates are rejected = Done custom validator is in place to reject duplicate email addresses, backend will also reject and return a 400 bad request, it allows duplicate First/Last name combinations
