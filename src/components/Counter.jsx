import React from "react";
import Counter from "./CountValue";

function Counter() {
  let value = 2;

  let userObj = {
    name: "Jagdish",
    age: 23,
    gender: "male",
  };

  let hello = "Hello World";

  return (
    <div>
      <h1>Counter</h1>
      <CounterValue count={value} userObj={userObj} hello={hello} />
    </div>
  );
}

export default Counter;
