import React from 'react';
import './range.css';

export default function Range(props) {
    const {range, activerange} = props;
    return(
        <div className={activerange === range ? 'range active':'range'}>{range}</div>
    )
}