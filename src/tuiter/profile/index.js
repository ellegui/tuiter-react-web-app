import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../home/index.css";

const ProfileComponent = () => {
    const profile = useSelector((state => state.profile));
    const birth_split = (profile.dateOfBirth).split('/');
    const birth_year = birth_split[2];
    const birth_date = birth_split[0];
    const birth_month = birth_split[1];
    const joind_split = (profile.dateJoined).split('/')
    const joind_month = joind_split[0]
    const joind_year = joind_split[1];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let navigate = useNavigate();
    const editProfileLink = () =>{
        let path = `../edit-profile`;
        navigate(path);
    }
    return (
        <div className="border-light border-thin ps-2 pe-2">

            <div className="ms-1 mt-1">
                <div>
                    <i className="bi bi-arrow-left"></i>
                    <span className="wd-text-1 me-3 wd-padding-left-5">{profile.name}</span><br/>
                    <span className="wd-text-2 wd-padding-left-10">{profile.tuitsCount} tweets</span>
                </div>
            </div>

            <div className="wd-padding-50"></div>

            <img className="wd-pic-1" src={profile.bannerPicture}/>
            <img className="wd-pic-2" src={profile.profilePicture}/>

            <button className="float-end rounded-pill border wd-text-1 wd-padding-5 wd-bg-trans" onClick={editProfileLink}>
                Edit Profile </button>

            <div className=" ms-3">
                <span className="fw-bold">{profile.name}</span><br/>
                <span className="wd-text-2">{profile.handle}</span>
                <p className="mt-2 mb-0">{profile.bio}</p>

                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item border-0 ps-0">
                        <i className="bi bi-geo-alt"></i>
                        <span className="wd-text-2"> {profile.location}</span>
                    </li>
                    <li className="list-group-item ms-3 border-0">
                        <i className="bi bi-balloon"></i>
                        <span className="wd-text-2"> Born </span>
                        <span className="bg-black">{profile.dateOfBirth}</span>
                    </li>
                    <li className="list-group-item ms-3 border-0">
                        <i className="bi bi-calendar3 wd-text-2"></i> <span className="wd-text-2"> Joined {months[joind_month - 1]} {joind_year}</span>
                    </li>
                </ul>

                <span className="wd-text-bold">{profile.followingCount}</span>
                <span className="wd-text-2"> Following</span>
                <span className="ms-5 wd-text-bold">{profile.followersCount}</span>
                <span className="wd-text-2"> Followers</span>
            </div>

        </div>
    );
};

export default ProfileComponent;