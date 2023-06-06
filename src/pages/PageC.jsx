// import React from "react";
// import { Data } from "../App";

// const PageC = () => {
//   return (
//     <Data.Consumer>
//       {(name) => {
//         return <h3>my name is {name}</h3>;
//       }}
//     </Data.Consumer>
//   );
// };

// export default PageC;

import React, { useContext } from "react";
import { Data, Data1 } from "../App";

const PageC = () => {
  const firstName = useContext(Data);
  const first1 = useContext(Data1);

  return (
    <div>
      <h3>my name is {firstName}</h3>
      <h3>my name is {first1}</h3>
    </div>
  );
};

export default PageC;
