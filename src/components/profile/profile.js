import React from 'react';
import './profile.scss';
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
                    <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="icon-outer">
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="icon-outer">
                    <i className="fas fa-phone-alt"></i>
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