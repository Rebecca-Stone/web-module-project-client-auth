//STEP 2: Move everything from the App to the respective folders in components file.
//2A: import React
import React, { useState, useEffect } from "react";
import axios from "axios";

// STEP 5: make a call to the api to retrieve friends

const FriendsList = () => {
  // 5A: make a slice of state for the friends. Don't forget to import useState
  const [friends, setFriends] = useState([]);
  //5B: now we need a way to grab our friends, Don't forget to import useEffect
  useEffect(
    () => {
      //5C: we will now need to make an axios call. don't forget to import in axios.
      //5C cont: we will also need to pass in our auth token, make a variable to hold the token, then put it in the header that we passed along with the http in axios.get
      const token = localStorage.getItem("token");
      axios
        .get(`http://localhost:9000/api/friends`, {
          headers: { authorization: token },
        })
        .then((res) => {
          // console.log(res.data)
          setFriends(res.data);
        })
        .catch((err) => {
            console.log(err)
        });
    },
    //   we are passing an empty array here, so that it only works on mount
    []
  );

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {/* STEP 6: we can now use the friends instead of placeholders */}
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              {friend.name} - {friend.age} - {friend.email}
            </li>
          );
        })}
        {/* <li>Name - age - email </li>
        <li>Name - age - email </li>
        <li>Name - age - email </li>
        <li>Name - age - email </li> */}
      </ul>
    </div>
  );
};

//2B: export the function
export default FriendsList;
