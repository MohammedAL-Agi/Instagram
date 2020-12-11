import React from 'react'
import '../styles/story.css';
function Story(props) {

    return (
        <button className="story-button">
            <img src={props.stImg} alt="strory image" style={imgStyle} />
            <sub>{props.stSub}</sub>
        </button>

    )
}

const imgStyle = {
    height: '55px',
    width: '55px',
    borderRadius: '50%',
    display: 'flex',
    background: ' #fff',
    border: '2px solid #ec7554',
    padding: '1px'
}
export default Story;