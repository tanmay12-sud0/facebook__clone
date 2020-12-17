import React from "react"
import './App.css';
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";

function App() {
  const [{User}, dispatch] = useStateValue();
  console.log(User) 
  return (
    <div className="app" >
      {
        !User ? (
          <Login />
        ) : (
          <>
          <Header />

<div className="app__body">
  <Sidebar />
  <Feed />
  <Widgets />
</div>
          </>
        )
      }
    
     
     
    </div>
  );
}

export default App;
