import React from "react";
import { UserDetails } from "./UserDetails";

function CounterValue({ count, userObj, hello }) {
  return (
    <div>
      {count}
      <UserDetails userObj={userObj} hello={hello} />
    </div>
  );
}

export default CounterValue;
