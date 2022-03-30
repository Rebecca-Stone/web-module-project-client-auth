//STEP 2: Move everything from the App to the respective folders in components file.
//2A: import React
import React from "react";

const FriendsList = () => {
  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        <li>Name - age - email </li>
        <li>Name - age - email </li>
        <li>Name - age - email </li>
        <li>Name - age - email </li>
      </ul>
    </div>
  );
};

//2B: export the function
export default FriendsList;
