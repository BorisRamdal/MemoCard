import React from 'react';
import {Link} from 'react-router-dom';
import add from './add.png';
import menu from './menu.png';
import back from './back.png';
import clear from './clear.png';
import './header.css';

export default function Header(props) {
    let leftIcon;
    let rightIcon;
    switch (props.page) {
        case "index":
            leftIcon = <Link to="/ranges"><img alt="" src={menu} /></Link>;
            rightIcon = <Link to="/saved"><img alt="" src={add} /></Link>;
            break;
        case "ranges":
            leftIcon = <Link to="/"><img alt="" src={back} /></Link>;
            rightIcon = <span className="blankIcon">&nbsp;</span>;
            break;
        case "saved":
            leftIcon = <Link to="/"><img alt="" src={back} /></Link>;
            rightIcon = <img alt="" src={clear} />;
            break;
        default:
            leftIcon = <Link to="/ranges"><img alt="" src={menu} /></Link>;
            rightIcon = <Link to="/saved"><img alt="" src={add} /></Link>;
    }
    return (
        <header>
            {leftIcon}
            <span>{props.title}</span>
            {rightIcon}
        </header>
    )
}