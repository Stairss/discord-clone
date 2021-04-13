import { Button } from '@material-ui/core'
import './Login.css'
const Login = () => {
    const signIn = e => {
        console.log('heh');

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;