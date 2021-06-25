import React, {useState} from 'react'
import './Header.css'
import Avatar from '@material-ui/core/Avatar';

import { useStateValue } from './StateProvider';
function Header() {
    const [{User}, dispatch] = useStateValue();
    const [hell, setHell] = useState("");
      
  
  
   const tanmaygoyal = (e) => {
       e.preventDefault();
       console.log("hello")
       setHell("good guy")
       
       
   }
   const rahul = (e) => {
       e.preventDefault();
       console.log("hello")
       setHell("nice work")
      
       
   }
   const raghav = (e) => {
       e.preventDefault();
       console.log("hello")
       setHell("welcome everyone")
      
       
   }
   const anu = (e) => {
       e.preventDefault();
       console.log("hello")
       setHell("hello everyone")
       
       
   }



    return (
        <div className="header">
            
            
           
           
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={User.photoURL} />
                    <h4>{User.displayName}</h4>
                </div>
               
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                   <button onClick={tanmaygoyal} >Principal</button>
                   <button onClick={raghav} >School Admin</button>
                   <button onClick={anu} >Teachers</button>
                   <button onClick={rahul} >Students</button>
               </div>
               
                {hell} 
                
               
        </div>
        
    )
}

export default Header
