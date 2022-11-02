# User Search

## Implementation decisions

### backend
- I opted for a structure that loosely resembles onion architecture, this way if I wanted to I could flip out the repository implementation easily, for cosmos DB, or SQL server, instead of its current implementation
- I opted not to persists the data other than in memory, just due to time constraints

### frontend
- I would usually use angular material for this type of project, but opted to demonstrate building a small component library for this test
- Components that are not specific to the business logic of the app can be found in the component library module

## swagger
you can access swagger to query the API directly once debugging here https://localhost:7063/swagger/index.html 

## unit tests
I wrote a couple of small unit tests, including one for the auto complete pipe. you can run them either for the component library or app individually by running the following commands from the cientApp:

npm run test component-library
npm run test(this defaults to the app)
## acceptance criteria progress
 - UI is styled to spec = still needs some tidy up work on search button and add button when a large data set is returned
 - After a user types 2 characters, matches are suggested below the search input = Done
 - Matches on first and last name = Done
 - After a user selects a match, all fields are returned and displayed per UI spec = Done, may need further UI tweaks, go button also returns results for current type search term
 - User can add to the dataset = Done, although backend implementation is just maintaining a list in the c# repository and not currently writing to a database/nosql etc
 - New searches return newly created user info = Done, also set it up to display newly created user after adding, but any future searches will return created users
 - Bonus: phone and email validation = Done basic number validation for phone, email validates front end and backend, frontend using built in angular and regex backend
 - Bonus: duplicates are rejected = Done custom validator is in place to reject duplicate email addresses, backend will also reject and return a 400 bad request, it allows duplicate First/Last name combinations

## Known problems

- button to the right of search height doesn't quite match sketch
- add button does not hold its position when large dataset is returned
