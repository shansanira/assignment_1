import React from 'react';
import './nav-panel.scss';

const NavPanel = () => (
    <div className="mt-4 nav-panel">
        <ul className="list-group">
            <a href="./"><li className="list-group-item">Information</li></a>
            <a href="./"><li className="list-group-item">History</li></a>
            <a href="./" className="active-item"><li className="list-group-item">Activities</li></a>
            <a href="./"><li className="list-group-item">Notes</li></a>
            <a href="./"><li className="list-group-item">Expenses</li></a>
            <a href="./"><li className="list-group-item">Products</li></a>
            <a href="./"><li className="list-group-item">RPP & PTP</li></a>
            <a href="./"><li className="list-group-item">Transaction History</li></a>
        </ul>
    </div>
);

export default NavPanel;