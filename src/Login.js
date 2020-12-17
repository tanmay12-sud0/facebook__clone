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
            <div className="login__logo">
                <img alt="imahe not found" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384053.svg" />
            </div>
            <div className="login__logo">
                <img alt="imahe not found" src="data:image/png;base64,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" />
            </div>
            <Button onClick={signIn}  type="submit">Login with google</Button>
        </div> 
    )
}

export default Login
