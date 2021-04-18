import React from 'react';
import {Link} from 'react-router-dom';
import './blank.scss';

export default function Blank() {
    return (
        <section className="blank-page">
            <span>(Your list is empty)</span>
            <Link to="/ranges">Choose your range</Link>
        </section>
    )
}