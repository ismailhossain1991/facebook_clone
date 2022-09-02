import { GrFacebook } from "react-icons/gr";
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import cookie from 'js-cookie';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import LoaderContext from "../../context/LoaderContext";
import { createToast } from "../../utility/Toast";



const Login = () => {

    //use auth context
    const { dispatch } = useContext(AuthContext)
    
    // loader context
    const {loaderDispatch} = useContext(LoaderContext);

    // use navegate
    const navigate = useNavigate();


  
    //form fiels state
    const [input, setInput] = useState({
        auth : '',
        password : ''
    });

    //handle input
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    }

    // handle user login
    const handleUserLogin = async (e) => {
        e.preventDefault();

        try {
            if(!input.auth || !input.password){
                createToast("All fields are required!");
            }else{
            await axios.post('http://localhost:5050/api/user/login', { email : input.auth, password : input.password })
            .then( res => {

                

                if(res.data.user.isVerified){

                    cookie.set('token', res.data.token);
                    dispatch({ type : 'LOGIN_USER_SUCCESS', payload : res.data.user })
                    navigate('/');
                    loaderDispatch({ type : "LOADER_START"});

                }else{
                createToast('verify your account');

                }

          
            });
            
            }
            
        } catch (error) {
            createToast("Worng email or password!");
        }
    }


    return (
        <section className="hero">
        <div className="text">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            <h3>Facebook helps you connect and share with the people in your life.</h3>
        </div>

        <div className="singup">
            <form className="form_input_1" onSubmit={handleUserLogin}>
            <input  name="auth" value={input.auth} onChange={handleInput} type="email" placeholder="Email or phone number"  />
            <input name='password' value={input.password} onChange={ handleInput} type="password" placeholder="Password" />
            <button type="submit" className="login-btn">Log In</button>
            <Link to="/forgot-password" className="forgot-pass">Forgot Password?</Link>
            <hr className="hrd" />
            <Link to="/register" className="create-btn">Create new account</Link>
            
            </form>
            <a href="#" className="createpage">Create a Page </a><span>for a celebrite, brand or business.</span>
        </div>

        <AuthFooter/>
        
        </section>

        
  
    );
    
};

export default Login;