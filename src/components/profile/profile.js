import React from 'react';
import './profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePic from './../../assets/images/proflie.png';

const Profile = () => (
    <div className="prifle-card">
        <div className="profile-cover">
            <img src={ProfilePic} alt="profile pic" />
        </div>
        <div className="profile-content">
            <h3 className="my-3">Saman Jayakodi</h3>
            <div className="icon-container">
                <div className="icon-outer">
                    <FontAwesomeIcon icon={['fas', 'mobile-alt']} fixedWidth />
                </div>
                <div className="icon-outer">
                    <FontAwesomeIcon icon={['fas', 'envelope']} fixedWidth />
                </div>
                <div className="icon-outer">
                    <FontAwesomeIcon icon={['fas', 'phone-alt']} fixedWidth />
                </div>
            </div>
            <div className="progress-container">
                <p className="m-0 mt-3">Risk Matrix</p>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="m-0 mt-3">Profitability</p>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
);

export default Profile;