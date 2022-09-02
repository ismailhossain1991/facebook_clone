import React from 'react';
import { GrFacebook } from "react-icons/gr";
import '../Login/Login.scss';
import { Link } from 'react-router-dom';
import './Register.scss';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const Register = () => {

  
  // State for form fields
  const [input, setInput] = useState({
    name : '',
    email : '',
    username : '',
    password : ''
  });

  // handle input
  const handleInput = (e) => {

   setInput((prev) => ({ ...prev, [e.target.name] : e.target.value}));
  }

  // handle user register
  const handleUserRegister = async (e) => {
    e.preventDefault();

    try {

      if( !input.name || !input.email || !input.username || !input.password){
        swal("Danger!", "All fields are required!", "error");
      
      }else{
        
       await axios.post('http://localhost:5050/api/user/register', input)
       .then( res => {

        setInput((prev) => ({
          name : '',
          email : '',
          username : '',
          password : ''
        }));

        swal("Success!", "You Sign up successfully !", "success");

       });
        
        
      }
      
    } catch (error) {
      console.log(error);
    }

  }


    return (

  <div className='main'>
    <form onSubmit={handleUserRegister} className='form-input' action="">
      <h2 className="first_title">Sign Up</h2>
      <p className="first_sub_title" id='sub_title'>It's quick and esay.</p>
      <hr/>
      <div className="input">
        <input name='name' onChange={handleInput} value={input.name} type="text" placeholder='First Name' className='first_name' id='all' />
        <input name='username' onChange={handleInput} value={input.username} type="text" placeholder='Surname' className='sur_name' id='all' />
        <br />
        <input name='email' onChange={handleInput} value={input.email} type="email" placeholder='Mobile number or email address' id='all1' />
        <br />
        <input name='password' onChange={handleInput} value={input.password} type="password" placeholder='New Password' id='all1' />
      </div>
      <p className="sub_title_2" id='sub_title'>Date of Birth</p>
      <select>
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
      <option>21</option>
      <option>22</option>
      <option>23</option>
      <option>24</option>
      <option>25</option>
      <option>26</option>
      <option>27</option>
      <option>28</option>
      <option>29</option>
      <option>30</option>
      <option>31</option>
      </select>
      <select>
      <option value="1">Jan</option>
      <option value="2">Feb</option>
      <option value="3">Mar</option>
      <option value="4">Apr</option>
      <option value="5">May</option>
      <option value="6">Jun</option>
      <option value="7">Jul</option>
      <option value="8">Aug</option>
      <option value="9">Sep</option>
      <option value="10">Oct</option>
      <option value="11">Nov</option>
      <option value="12">Dec</option>
      </select>
      <select>
     <option value="1991">1991</option>
    <option value="1992">1992</option>
    <option value="1993">1993</option>
    <option value="1994">1994</option>
    <option value="1995">1995</option>
    <option value="1996">1996</option>
    <option value="1997">1997</option>
    <option value="1998">1998</option>
    <option value="1999">1999</option>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
     </select>
     <p className="sub_title_3" id='sub_title'>Gender</p>
     <div className="female" id='all_gender'>
      <label for="female">Female</label>
      <input className='radio_1' type="radio" name='gender' value='female' />
     </div>
     <div className="male" id='all_gender'>
      <label for="male">Male</label>
      <input className='radio_1' type="radio" name='gender' value='male' />
     </div>
     <div className="other" id='all_gender'>
      <label for="other">Custom</label>
      <input className='radio_1' type="radio" name='gender' value='other' />
     </div>
     <p className="sub_title_4">People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a> </p>
     <p className="sub_title_4">By clicking Sign Up, you agree to our <a href="#">Terms,</a> <a href="#">Privacy Policy</a>  and <a href="#">Cookies Policy.</a>You may receive SMS notifications from us and can opt out at any time.<a href="#">Learn more.</a> </p>
     <input type="submit" value='signup' className='submit' />
    </form>
  </div>

    );
};

export default Register;