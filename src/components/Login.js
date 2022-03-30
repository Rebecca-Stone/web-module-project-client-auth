//STEP 2: Move everything from the App to the respective folders in components file. //2A: import React

//STEP 3: Grab all the data from the inputs //3A: import { useState }
import React, { useState } from "react";
//4B cont: import axios
import axios from "axios";
//4D cont: import { useHistory }
import { useHistory } from "react-router-dom"

const Login = () => {
    //4D: we can now push with useHistory
    const { push } = useHistory();  
  //3B: create a slice of state for the credentials(username, password) given by the user, using useState
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  //3D: create a change handler for the inputs
  const handleChange = (event) => {
    //since we will be using this for both username and password, we will need to set the event.target.value to state.
    setCred({
      // this will spread the change over the state
      ...cred,
      // we need to get a name from the target event, then set the value to the name in state
      //Remember: since were looking for the event to have a name, we need to add one to the inputs
      [event.target.name]: event.target.value,
    });
  };

  // 3E: check to make sure the inputs are being grabbed
  // console.log(cred)

  // STEP 4: we now need to handle the submit. Remember to connect it to the form
  const handleSubmit = (event) => {
    //4A: this will prevent the page from reloading and losing data on submit
    event.preventDefault();
    //4B: we will need to make an axios post, since the user is sending information
    //this is an open call so no need pass any auth, we only need to pass in the credentials
    axios
      .post("http://localhost:9000/api/login", cred)
      .then((res) => {
        //make sure to always console.log or debugger the res
        // console.log(res.data.token)
        //4C: the res carries the auth token in its payload. we will need to use localStorage to setItem to a token 
        localStorage.setItem("token", res.data.token)
        //4D: we can now do our redirect, import useHistory and make a const { push } inside of Login. 
        push('/friends');
        //we will now be redirected back to the /friends endpoint
      })
      .catch((err) => {
        debugger;
      });
  };

  return (
    <div>
      <h1>Login</h1>
      {/* connect the onSubmit Handler */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          {/* 3C: give both the inputs an onChange to capture the data */}
          {/* 3D cont: add a name to each input */}
          <input onChange={handleChange} name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            onChange={handleChange}
            // passwords type always need to be password
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

//2B: export the function
export default Login;
