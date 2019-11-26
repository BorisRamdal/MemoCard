import React from 'react';
import add from './add.png';
import passed from './passed.png';
import back from './back.png';
import './header.css';

export default function Header(props) {
    return (
        <header>
            {props.index ?
                <img alt="" src={passed} /> :
                <img alt="" src={back} />
            }
            <span>{props.title}</span>
            {props.index ?
                <img alt="" src={add} /> :
                <span className="blankIcon">&nbsp;</span>
            }
        </header>
    )
}