import React from "react";
import { Hello } from "./Hello";

export const UserDetails = ({ userObj, hello }) => {
  return (
    <div>
      <div>
        <h1>{userObj.name}</h1>
        <h1>{userObj.age}</h1>
        <h1>{userObj.gender}</h1>
      </div>
      <Hello hello={hello} />
    </div>
  );
};
