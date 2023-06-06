import React from "react";
import UseCustom from "../component/UseCustom";

const CustomeHook = () => {
  const [count, increment, dicrement] = UseCustom(); // note you can use intials value for diff components set like 10 20 insaidstom const [count, increment, dicrement] = UseCustom(10);
  return (
    <>
      <button onClick={increment}>increment</button>
      <p>{count}</p>
      <button onClick={dicrement}>dincrement</button>
    </>
  );
};

export default CustomeHook;
