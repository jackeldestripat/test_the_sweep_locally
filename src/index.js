import React from "react";
 import ReactDOM from "react-dom";

 const App = () => {
   return (
     <div>
       <h1>Hello World!</h1>
       <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
     </div>
   );
 };

 ReactDOM.render(<App />, document.getElementById("root"));
