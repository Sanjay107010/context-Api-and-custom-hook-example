// import React, { useCallback, useEffect } from "react";

// const Dom = () => {
//   const boxes = document.querySelectorAll(".box1, .box2, .box3");

//   for (const box of boxes) {
//     box.addEventListener("click", function handleClick(event) {
//       console.log("box clicked", event);
//       box.setAttribute("style", "background-color: yellow;");
//     });
//   }

//   return (
//     <>
//       <div className="box1">Box 1</div>
//       <div className="box2">Box 2</div>
//       <div className="box3">Box 3</div>
//     </>
//   );
// };

// export default Dom;
import React, { useEffect, useState } from "react";

const Dom = () => {
  const [value1, setvalue1] = useState(false);
  useEffect(() => {
    const handleClick = (event) => {
      console.log("box clicked", event);
      event.target.style.backgroundColor = "yellow";
    };

    const boxes = document.querySelectorAll(".box1, .box2, .box3");

    for (const box of boxes) {
      box.addEventListener("click", handleClick);
    }

    return () => {
      for (const box of boxes) {
        box.removeEventListener("click", handleClick);
        console.log("remove box clicked", removeEventListener);
      }
    };
  }, []);

  return (
    <>
      <div className="box1">Box 1</div>
      <div className="box2">Box 2</div>
      <div className="box3">Box 3</div>
    </>
  );
};

export default Dom;
