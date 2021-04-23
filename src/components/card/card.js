import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import './card.scss';

function Card (props) {
    const [open, setIsOpen] = useState(false)

    const {pathname} = props.location;
    const {word, translation, addtosave, removefromsave } = props;
    return(
        <div className="card">
            <div className="title">{word}</div>
            <div className="trans-box">
                <span onClick={()=> setIsOpen(!open)}>
                    {open ? translation : '?'}
                </span>
            </div>
            {pathname === '/saved' ?
                <button className="btn" onClick={()=> removefromsave(word)}>Remove</button> :
                <button className="btn" onClick={()=> addtosave(word, translation)}>Add to learned</button>
            }
        </div>
    )
}

export default withRouter(Card);