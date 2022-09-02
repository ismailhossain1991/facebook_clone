import React from 'react';
import TopBar from '../../components/AuthFooter/TopBar/TopBar';
import AuthTemp from '../AuthTemp/AuthTemp';
import './Home.scss';
import { BsBookmark, BsChat, BsCursor, BsEmojiExpressionless, BsSuitHeart, BsThreeDots } from "react-icons/bs";
import cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import LoaderContext from '../../context/LoaderContext';
const Home = () => {

  // use context
  const { dispatch, user } = useContext(AuthContext);
  
  const {loaderDispatch} = useContext(LoaderContext);


  // use navigate
  const navigate = useNavigate();

  // handle user logout
  const handleUserLogout = (e) => {
    e.preventDefault();

    cookie.remove('token');
    cookie.remove('user');
    dispatch({ type : 'USER_LOGOUT'})
    navigate('/login');
    loaderDispatch({ type : "LOADER_START"});

  }
    return (
        <div>
          
          {/* <AuthTemp/> */}
          <TopBar/>
          
          <div className="home-container">
            <div className="home-wraper">
            <div className="time-line">
            
            <div className="post-card">
              <div className="post-card-header">
                <div className="post-user-info">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ROKsDsq3ieKUh0ISM1ZJqhaccAjCz5FvaQ&usqp=CAU" alt=""  />
                  <div className="user-details">
                    <a className='user-name' href="#">Sabila</a>
                    <span className="location">Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button><BsThreeDots/></button>
                </div>
                </div>  
                <div className="post-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOam-0iGRMWoaWO__Gqkj4sS2oWD9LBvPOw&usqp=CAU" alt="" />
                </div>
                <div className="timeline-icons">
                  <div className="icons-left">
                  <a href="#"><BsSuitHeart/></a>
                  <a href="#"><BsCursor/></a>
                  <a href="#"><BsChat/></a>
                  </div>
                  <div className="icon-right">
                    <a href="#"><BsBookmark/></a>
                  </div>
                </div>
                <div className="post-details">
                  <div className="span">102 Likes</div>
                  <div className="post-content">
                  <a href="#">Sabila</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit beatae reprehenderit? Tenetur id a quidem repellat aliquid. Odit molestiae corporis asperiores nostrum esse rerum eaque iusto saepe voluptate! Odio?  
                  </div>
                  <div className="post-comments">
                    <span>View all 24 comments</span>
                  </div>
                  <div className="post-time">
                    <span>1 day age</span>
                  </div>
                </div>

                <div className="post-comments-area">
                  <a href="#"><BsEmojiExpressionless/></a>
                  <input type="text" placeholder='Add a comment...' />
                  <button>Post</button>
                </div>
            </div>

            <div className="post-card">
              <div className="post-card-header">
                <div className="post-user-info">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ROKsDsq3ieKUh0ISM1ZJqhaccAjCz5FvaQ&usqp=CAU" alt=""  />
                  <div className="user-details">
                    <a className='user-name' href="#">Sabila</a>
                    <span className="location">Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button><BsThreeDots/></button>
                </div>
                </div>  
                <div className="post-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOam-0iGRMWoaWO__Gqkj4sS2oWD9LBvPOw&usqp=CAU" alt="" />
                </div>
                <div className="timeline-icons">
                  <div className="icons-left">
                  <a href="#"><BsSuitHeart/></a>
                  <a href="#"><BsCursor/></a>
                  <a href="#"><BsChat/></a>
                  </div>
                  <div className="icon-right">
                    <a href="#"><BsBookmark/></a>
                  </div>
                </div>
                <div className="post-details">
                  <div className="span">102 Likes</div>
                  <div className="post-content">
                  <a href="#">Sabila</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit beatae reprehenderit? Tenetur id a quidem repellat aliquid. Odit molestiae corporis asperiores nostrum esse rerum eaque iusto saepe voluptate! Odio?  
                  </div>
                  <div className="post-comments">
                    <span>View all 24 comments</span>
                  </div>
                  <div className="post-time">
                    <span>1 day age</span>
                  </div>
                </div>

                <div className="post-comments-area">
                  <a href="#"><BsEmojiExpressionless/></a>
                  <input type="text" placeholder='Add a comment...' />
                  <button>Post</button>
                </div>
            </div>


            </div>
            <div className="user-info">
              <div className="user-details">
                <img src={`${ user.photo ? user.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfREov7nKwuNflZKZ_VMleNycIykx9tVRw2w&usqp=CAU'}`} alt="" />
                <div className="user-name">
                  <span className="username">{user.username}</span>
                  <span className="name">{user.name}</span>

                  <button onClick={handleUserLogout}>Log Out</button>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
    );
};

export default Home;