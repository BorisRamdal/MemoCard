import React from 'react';
import './range.css';

export default function Range(props) {
    const {range, activerange, loadrange} = props;
    return(
        <div className={activerange === range ? 'range active':'range'}>
            {range}
            <button className="load-range" disabled={activerange === range} onClick={()=>{loadrange(range)}}>
                Load
            </button>
        </div>
    )
}