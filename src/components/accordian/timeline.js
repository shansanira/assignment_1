import React from 'react';
import './timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = ({ timelineData }) => (
    <div className="time-line">
        {
            timelineData && timelineData.map(item => (
                <div className="time-line-item" key={item.id}>
                    <div className="time-line-icon-container">
                        <div className="time-line-icon">
                            <FontAwesomeIcon className="icon" icon={['fas', 'file-alt']} fixedWidth />
                        </div>
                        <div className="vertical-line"></div>
                    </div>
                    <div className="time-line-content">
                        <div className="time-line-content--title mb-5">
                            <h4 className="m-0">{item.itemTitle}</h4>
                            <span>{item.id}</span>
                        </div>
                        <div className="time-line-content--desc">
                            <p className="dec-item">From: {item.from}</p>
                            <p className="dec-item">To: {item.to}</p>
                            <p className="dec-item">Participants: {item.participants}</p>
                            <p className="dec-item">Loaction: {item.location}</p>
                            <p className="dec-item">Remarks: {item.remarks}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
);

export default Timeline;