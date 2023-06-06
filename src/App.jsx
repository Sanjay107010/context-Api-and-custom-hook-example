// import React, { createContext } from "react";
// import PageA from "./pages/PageA";

// const Data = createContext();

// const App = () => {
//   let name = "sanjay";

//   return (
//     <Data.Provider value={name}>
//       <PageA />
//     </Data.Provider>
//   );
// };

// export default App;
// export { Data };

import React, { createContext } from "react";
import PageA from "./pages/PageA";
import CustomeHook from "./pages/CustomeHook";
import Dom from "./pages/Dom";

const Data = createContext();
const Data1 = createContext();

const App = () => {
  let name = "sanjay";
  let name2 = "rahul";

  return (
    <Data.Provider value={name}>
      <Data1.Provider value={name2}>
        <h4>example of context api check value on page c </h4>
        <PageA />
        <h4>example of custome Hook check custom hook use custom.jsx page </h4>
        <CustomeHook />
        {/* <Dom /> */}
      </Data1.Provider>
    </Data.Provider>
  );
};

export default App;
export { Data, Data1 };
