//STEP 2: Move everything from the App to the respective folders in components file.
//2A: import React
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";

const AddFriends = () => {
    const { push } = useHistory();
  //STEP 7: create a slice of state for the form. don't forget to import useState
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  //STEP 8: we now need to catch the changes that are happening
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  //STEP 9: we will also need an onSubmit. don't forget to import axios now
  const handleSubmit = (event) => {
    event.preventDefault();
    //we need to pass our token through for authorization now
    const token = localStorage.getItem("token");
    axios
      .post(
        // we will also need the form data
        `http://localhost:9000/api/friends`,
        form,
        {
          headers: {
            authorization: token,
          },
        })
      .then((res) => {
        // console.log(res);
        push('/friends')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Add Friends</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name: </label>
          <input onChange={handleChange} name="name" id="name" />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input onChange={handleChange} name="age" id="age" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input onChange={handleChange} name="email" id="email" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

//2B: export the function
export default AddFriends;
