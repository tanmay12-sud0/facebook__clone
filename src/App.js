import React from "react"
import './App.css';

import Header from "./Header";
import Login from "./Login";

import { useStateValue } from "./StateProvider";


function App() {
  const [{User}, dispatch] = useStateValue();
 
  return (
    <div className="app" >
     
      {
        !User ? (
          <Login />
        ) : (
          <>
          <Header />


          </>
        )
      }
    
     
     
    </div>
  );
}

export default App;
