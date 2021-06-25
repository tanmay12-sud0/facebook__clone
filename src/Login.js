import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import  {auth, provider} from './firebase'
import { useStateValue } from './StateProvider'
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(
            result => {
                dispatch({
                    type: "SET_USER",
                    user: result.user 
                })
            }
        ).catch((err) => console.log(err))
    }


    return (
        <div className="login">
            
            
            <Button onClick={signIn}  type="submit">Login with google</Button>
        </div> 
    )
}

export default Login
