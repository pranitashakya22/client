import { useContext, useEffect } from "react";
import Logo from '../../../src/images/NonabazzarLogo.jpg';
import TextField from '@mui/material/TextField';
import { MyContext } from "../../App";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import GoogleImage from "../../images/GoogleImage.png";




const SignIn = ()=>{

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHeaderFooterShow(false);
    },[])

    return(
        <>
        <section className="section signInPage">
           <div className="container">
            <div className="box card p-3 shadow border-0">
                <div className="logoWrapper mb-4">
                    <img src={Logo}/>
                </div>

                <form>
                <h2 className="mb-4">Sign In</h2>
                    <div className="form-group">
                    <TextField id="outlined-basic" label="Email" variant="outlined"type="email" required className="w-100" />
                    </div>

                    <div className="form-group">
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" required className="w-100" />
                    </div>


                    <a className="border-effect">Forgot Password?</a>


                    <Button className="btn-blue btn-lg btn-big w-100 mt-3 mb-3">Sign In</Button>

                    <p>Not Registered? <Link to="/signUp" className="border-effect">Sign Up</Link></p>

                    <h6 className="mt-4 text-center font-weight-bold">Or continue with social accounts</h6>

                    <Button className="loginWithGoogle mt-2" variant="outlined"><img src={GoogleImage}/>Sign in with Google</Button>

                </form>


                
            </div>
           </div>
        </section>
        </>
    )
}

export default SignIn;