import React from 'react';
import './range.css';

export default function Range(props) {
    return(
        <div className={props.range === props.active ? 'range active' : props.passed ? 'range passed' : 'range'}>
            {props.range}
        </div>
    )
}