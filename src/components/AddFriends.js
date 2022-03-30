//STEP 2: Move everything from the App to the respective folders in components file.
//2A: import React
import React from "react";

const AddFriends = () => {
  return (
    <div>
      <h2>Add Friends</h2>
      <form>
        <div>
          <label htmlFor="Username">Username: </label>
          <input id="username" />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input id="age" />
        </div>
        <div>
          <label htmlFor="Email">Email: </label>
          <input id="email" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

//2B: export the function
export default AddFriends;
