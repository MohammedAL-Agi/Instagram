import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import '../styles/post.css';
import { BsHeart } from 'react-icons/bs';
import { FaDotCircle, FaEllipsisH, FaRegBookmark, FaRegComment, FaRegPaperPlane } from 'react-icons/fa';
import ReactPlayer from 'react-player'


function Post(props) {

    const [counter, setCounter] = useState(38556);
    const [toggle, setToggle] = useState(true);

    const increment = () => {
        setCounter(counter + 1);
        setToggle(!toggle)
    }
    return (
        <div className='post'>
            <div className="post-header">
                <div className="_post">
                    <Avatar className='post-avatar' src={props.avatarImg} alt='post image' />
                    <h3>{props.username}</h3>
                </div>
                <div className="dots">
                    <FaEllipsisH />
                </div>
            </div>
            <div>
                <img className='post-image' src={props.pImg} />

            </div>
            <div className="post-icons">
                <div className="post-icon">
                    <BsHeart className={toggle ? 'black' : 'red'} onClick={increment} size='1.5rem' />
                    <FaRegComment size='1.5rem' className='icon-padding' />
                    <FaRegPaperPlane size='1.4rem' className='icon-padding' />
                </div>
                <div className="save">
                    <FaRegBookmark className="save" size='1.5rem' />
                </div>
            </div>

            <div className="likes">{counter} likes </div>

            <p className='post-text'> <strong>{props.cUsername}</strong> {props.caption} </p>

            <small className='allComment' > view all 239 comments </small>

            <div className="post-comment">
                <p className='comment' >
                    <p>
                        <strong>{props.comment}</strong> {props.text} <BsHeart className='commentHeart' />
                    </p>
                    <p>
                        <strong>{props.comment2}</strong> {props.text2} <BsHeart className='commentHeart' />
                    </p>
                </p>
                <small className='time'>{props.small}</small>
            </div>

            <form className="post-commentBox">
                <input id="post-input" type="text" placeholder="Add a comment..." />

                <button type="submit" className="post-button" >Post</button>
            </form>
        </div>
    )
}

const my_style = {
    height: '20px',
    width: '20px',
    borderRadius: '50%'
}
export default Post;