import React from 'react'
import Header from './Header'
import '../styles/profile.css'
import me1 from '../assets/me1.jpg'
import { MdLiveTv, MdSettings } from 'react-icons/md'
import { FaRegBookmark, FaTh, FaUserTag } from 'react-icons/fa'
import { light } from '@material-ui/core/styles/createPalette'


function Profile() {
    return (
        <div>
            <Header />
            <div className="profile__section">
                <div className="profile__image">
                    <img src={me1} alt="profil image" className="profile__img" />
                </div>
                <div className="profile__status">
                    <div className="setting">
                        <p className="username">Mohammed Alagi</p>
                        <button className=" btn edit">Edit Profile</button>
                        <MdSettings className="btn st__icon" size='1.3rem' />
                    </div>
                    <ul className="followers">
                        <li className="count"> <span> 119 </span> post </li>
                        <li className="count"> <span> 3M </span> followers </li>
                        <li className="count"> <span > 241 </span> following </li>
                    </ul>
                    <div className="bio">
                        <strong className="real__name" >Mohammed Alagi</strong> <br /> if you want the rainbow you gotta put up with rain.
                   </div>
                </div>
            </div>
            {/* End profile section */}
            <div className="tags">
                <li className='tags__icon'><FaTh />  POSTS </li>
                <li className='tags__icons'><MdLiveTv />  IGTV</li>
                <li className='tags__icons'><FaRegBookmark />  SAVED</li>
                <li className='tags__icons' ><FaUserTag />  TAGGED</li>
            </div>
            {/* start the gallary */}
            <div className="gallary">
                <div className="gallary_item"  >

                </div>
                <div className="gallary_item2">

                </div>
                <div className="gallary_item3">

                </div>
                <div className="gallary_item4">

                </div>
                <div className="gallary_item5">

                </div>
                <div className="gallary_item6">

                </div>
                <div className="gallary_item7">

                </div>
                <div className="gallary_item8">

                </div>
                <div className="gallary_item9">

                </div>
            </div>
        </div >
    )
}

export default Profile
