import React from 'react';
import './timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = ({ timelineData }) => (
    <div className="time-line">
        <div className="time-line-item">
            <div className="time-line-icon-container">
                <div className="time-line-icon">
                    <FontAwesomeIcon className="icon" icon={['fas', 'file-alt']} fixedWidth />
                </div>
                <div className="vertical-line"></div>
            </div>
            <div className="time-line-content">
                <div className="time-line-content--title mb-5">
                    <h4 className="m-0">Followup Call</h4>
                    <span>605875080</span>
                </div>
                <div className="time-line-content--desc">
                    <p className="dec-item">From: 2020-07-24</p>
                    <p className="dec-item">To: 2020-10-24</p>
                    <p className="dec-item">Participants: -</p>
                    <p className="dec-item">Loaction: Kandy</p>
                    <p className="dec-item">Remarks: SR-Served</p>
                </div>
            </div>
        </div>

        <div className="time-line-item">
            <div className="time-line-icon-container">
                <div className="time-line-icon">
                    <FontAwesomeIcon className="icon" icon={['fas', 'file-alt']} fixedWidth />
                </div>
                <div className="vertical-line"></div>
            </div>
            <div className="time-line-content">
                <div className="time-line-content--title mb-5">
                    <h4 className="m-0">Customer Visit</h4>
                    <span>605875093</span>
                </div>
                <div className="time-line-content--desc">
                    <p className="dec-item">From: 2020-07-23</p>
                    <p className="dec-item">To: 2020-10-23</p>
                    <p className="dec-item">Participants: -</p>
                    <p className="dec-item">Loaction: Kandy</p>
                    <p className="dec-item">Remarks: SR-Served</p>
                </div>
            </div>
        </div>

    </div>
);

export default Timeline;