import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

//2C: Don't forget to import each component back to App.js!
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";

// STEP 1: Create each piece of the application

// 1A: this will become the Login component
// const Login = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <label htmlFor="username">Username: </label>
//           <input id="username" />
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input type="password" id="password" />
//         </div>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// 1B: this will become the FriendsList component
// const FriendsList = () => {
//   return (
//     <div>
//       <h2>Friends List</h2>
//       <ul>
//         <li>Name - age - email </li>
//         <li>Name - age - email </li>
//         <li>Name - age - email </li>
//         <li>Name - age - email </li>
//       </ul>
//     </div>
//   );
// };

// 1C: this will become the AddFriends component
// const AddFriends = () => {
//   return (
//     <div>
//       <h2>Add Friends</h2>
//       <form>
//         <div>
//           <label htmlFor="Username">Username: </label>
//           <input id="username" />
//         </div>
//         <div>
//           <label htmlFor="age">Age: </label>
//           <input id="age" />
//         </div>
//         <div>
//           <label htmlFor="Email">Email: </label>
//           <input id="email" />
//         </div>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

function App() {
  return (
    //Remember: wrap the App with a Router to be able to make routes
    <Router>
      <div className="App">
        {/* STEP 5: we will now create the header that will be visible to user, don't forget to import links */}
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="friends">
            Friends
          </Link>
          <Link className="link" to="friends/add">
            Add Friends
          </Link>
          <Link className="link" to="logout">
            Logout
          </Link>
        </header>
        {/* use exact paths or a switch to find paths correctly */}
        <Route exact path="/">
          {/* this will redirect to the main route */}
          <Login />
        </Route>
        <Route exact path="/login">
          {/* this will redirect to the login form */}
          <Redirect to="/" />
        </Route>
        <Route exact path="/friends">
          {/* this will redirect to the FriendsList*/}
          <FriendsList />
        </Route>
        <Route exact path="/friends/add">
          {/* this will redirect to the AddFriends form */}
          <AddFriends />
        </Route>
      </div>
    </Router>
  );
}

export default App;
