import React from 'react';
import {Link} from 'react-router-dom';
import ClearAll from '../../containers/clear_all';
import add from './add.png';
import menu from './menu.png';
import back from './back.png';
import './header.scss';

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
            rightIcon = <ClearAll/>;
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