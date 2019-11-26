import React from 'react';
import {Link} from 'react-router-dom';
import add from './add.png';
import passed from './passed.png';
import back from './back.png';
import './header.css';

export default function Header(props) {
    return (
        <header>
            {props.index ?
                <Link to="/progress"><img alt="" src={passed} /></Link> :
                <Link to="/"><img alt="" src={back} /></Link>
            }
            <span>{props.title}</span>
            {props.index ?
                <Link to="/saved"><img alt="" src={add} /></Link> :
                <span className="blankIcon">&nbsp;</span>
            }
        </header>
    )
}