import React from 'react';
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { RiBankFill } from "react-icons/ri";
import { MdGroupWork } from "react-icons/md";
import './TopBar.scss';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
const TopBar = () => {

    // get auth context
    const { user} = useContext(AuthContext);


    return (
    <div className="header">
        <div className="header_left">
            <h1>Fb</h1>
            <div className="header_input">
            <FiSearch/>
            <input type="text" placeholder='Search Facebook'/>
            </div>
        </div>
        <div className="header_middle">
            <div className="header_option active">
            <span className="material-icon"><AiFillHome/></span>
            </div>
            <div className="header_option">
            <span className="material-icon"><FaUserFriends/></span>
            </div>
            <div className="header_option">
            <span className="material-icon"><BsYoutube/></span>
            </div>
            <div className="header_option">
            <span className="material-icon"><RiBankFill/></span>
            </div>
            <div className="header_option">
            <span className="material-icon"><MdGroupWork/></span>
            </div>
        </div>
        <div className="header_right">
           <div className="header-info">
            <img className='user_avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQQQ1mojFQKEWhsoaAc2OovWtXEIUi38yPw&usqp=CAU" alt="" />
            <h4>Safa Khandokar</h4>

        <span className="material-icon"><AiFillHome/></span>
        <span className="material-icon"><MdGroupWork/></span>
        <span className="material-icon"><BsYoutube/></span>
            </div> 
        </div>
        
    </div>    
    );
};

export default TopBar;