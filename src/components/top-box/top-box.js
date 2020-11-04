import React from 'react';
import './top-box.scss';

const TopBox = ({ title, details, icon, colorVarient }) => (
    <div className={`top-box ${colorVarient}`}>
        {icon}
        <div className="top-box-content">
            <p className="m-0">{title}</p>
            <h4>{details}</h4>
        </div>
    </div>
);

export default TopBox;