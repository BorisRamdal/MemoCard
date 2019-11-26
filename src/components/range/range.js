import React from 'react';
import './range.css';

export default function Range(props) {
    let cname = 'range';
    if (props.range === props.active) {
        cname = `${cname} active`;
    } else if (props.passed) {
        cname = `${cname} passed`
    }

    return(
        <div className={cname}>
            {props.range}
        </div>
    )
}