import React from 'react';
import './blank.css';

export default function Blank() {
    return (
        <div className="blank-page">
            <span>(Your list is empty)</span>
            <button>Go to next range</button>
        </div>
    )
}