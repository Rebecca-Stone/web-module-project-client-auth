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

export default AddFriends;
