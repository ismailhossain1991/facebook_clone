import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import { createToast } from '../../utility/Toast';


const ResetPassword = () => {

  // get params
  const { token } = useParams();
  const navigate = useNavigate();

  // Email state
  const [password, setpassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [msg, setMsg] = useState({
    type : '',
    msg : '',
    status : false
  });

  
  const handlePasswordReset = async (e) => {
    e.preventDefault();

 try {

     //check password
     if( !password ){
      setMsg({
        type : 'danger',
        msg : 'Please set a password',
        status : true
      });
    }else if (password !== cpassword){
      setMsg({
        type : 'warning',
        msg : 'password not match',
        status : true
      });
    } else {

      await axios.post('http://localhost:5050/api/user/reset-password', {token, password })
      .then( res => {

        setMsg({
          type : '', 
          msg : '',
          status : false
        });

        createToast('Your password changed');
        navigate('/login');
      })
      .catch( error => {
        createToast('Time out, Please try again');
      });

      
    }
  
 } catch (error) {
  createToast('Try again');
 }

  }

    
  return (
    <div className='forgot-password'>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
           <div className="card">
            <div className="card-header">
              <h2 className="card-title">Reset Your Password</h2>
            </div>
            <div className="card-body">
              { msg.status && <p className={`alert alert-${msg.type}`}>{msg.msg}</p>}
            <form onSubmit={handlePasswordReset} method='POST'>
              <div className="my-3">
                <input name='password' value={password} onChange={e => setpassword(e.target.value)} type="password" className='form-control' placeholder='Your New Password' />
              </div>
              <div className="my-3">
                <input name='confrom_password' value={cpassword} onChange={e => setCpassword(e.target.value)} type="password" className='form-control' placeholder='Confrom New Password' />
              </div>
              <div className="my-3">
                <button className='btn btn-primary' type='submit' >Change Password</button>
              </div>
            </form>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ResetPassword;