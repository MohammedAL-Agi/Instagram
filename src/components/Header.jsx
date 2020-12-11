import React from 'react';
import '../styles/header.css';
import insta from '../assets/insta.png';
import me1 from '../assets/me1.jpg';
import { MdHome } from 'react-icons/md';
import { FaRegCompass, FaRegPaperPlane } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='wrapper'>
            <div>
                <Link to="/">
                    <a href="#"><img className='logo' src={insta} alt="logo" /></a>
                </Link>
            </div>
            <div className="search">
                <input type="text" name="search" placeholder=" &#xf002;  search" />
            </div>
            <div className="pro-img">
                <div className="Icon">
                    <Link to="/">
                        <MdHome fontSize='2rem' style={{ color: "black" }} />
                    </Link>
                </div>
                <div className="Icon">
                    <FaRegPaperPlane fontSize='1.3rem' />
                </div>
                <div className="Icon">
                    <FaRegCompass fontSize='1.4rem' />
                </div>
                <div className="Icon">
                    <BsHeart fontSize='1.4rem' />
                </div>

                <div className="Icon">
                    <Link to="/profile">
                        <a href=""> <img src={me1} alt="pro image" style={imgStyle} /></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
const imgStyle = {
    height: '25px',
    width: '25px',
    borderRadius: '50%'
}

export default Header;