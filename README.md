# DevTinder

- Create a Vite + React application
- Remove uneccesary code and create a Hello World App
- Install tailwind css and Daisy Ui 
- Add Navbar component to App.jsx
- Create a saperate navbar component in component folder
- Install react-router-dom
- Create BrowserRouter > Routes >  Route=/ Body = RouteChildren
- Create Outlet in Body Component
- Create Footer Component 
- Create a login page 
- Install axios
- CORS - Install cors in backend => add middleware to  with configurations: origin, credentials: true
- whenever you're making API call so pass in axios => {withCredentials: true}
- Install react-redux + @reduxjs/toolkit (https://redux-toolkit.js.org/tutorials/quick-start)
- configureStore => add Provider to root like app.jsx => create userSLice => add reducer to store
- add redux devtools in chorme
- Login and see if your data is coming properly in the store
- Navbar should update as soon as user login
- refactore our code and add constants file
- You should not be access other routes without login
- If token is not present, redirect to login page
- Logout feature
- Get the feed and add the feed in the store
- Build the user card on feed
- Build Edit profile feature
- Show toast message on save of updated profile data
- Build New page - see all my connections
- Build new page - See all my requests
- Feature - accept/reject connection requests
- Send Ignored/Interested user card from the feed
- Signup new User
- E2E testing


Body
  -Navbar
  Route = / => Feed
  Route = /login => Login
  Route = /Connection => Connections
  Route = /profile  => Profile