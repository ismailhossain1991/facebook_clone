import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createToast } from '../../utility/Toast';

const Verify = () => {

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    axios.post('http://localhost:5050/api/user/verify', params)
    .then( res => {

     

      createToast('Account activation successful');
      navigate('/login');
      
    })
    .catch(error => {
      createToast('Account activation failed');
     
    });

  });
  

  return (
    <div><h1>Verify your account</h1></div>
  )
};

export default Verify;