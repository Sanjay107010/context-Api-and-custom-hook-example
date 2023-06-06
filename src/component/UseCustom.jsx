import React, { useState } from "react";

function UseCustom() {
  // if younuse multiple components you can use intialsvalue different set//=> function UseCustom(intialsvalue = 0)
  const [count, setCount] = useState(0); ///////=> const [count, setCount] = useState(intialsvalue);

  function increment() {
    setCount(count + 1);
  }
  function dicrement() {
    setCount(count - 1);
  }
  return [count, increment, dicrement];
}

export default UseCustom;
