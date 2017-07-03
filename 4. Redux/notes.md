Those are actions done after setting up working station

** All files contains step by step comments about redux working rutine

1. Created simple index.html in app folder
2. Created index.js and store
3. Created actions.js (if there will be many actions keep them in separate folder and use combine actions)
4. Created reducers.js
5. Hooking up redux with react
6. To connect container with state use connect and function select example in app.js file
7. Install Redux-thunk (Redux Thunk middleware allow to make action creators that return a function instead of an action.)
8. To connect Thunk use applyMiddleware function from Redux (step 8 and 9) to make it part of our state
9. Than go to actions and crate action to fetch and receive data (step from 3 - 4 in actions file)
10. Crated login to application with redux middleware
