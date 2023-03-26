import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { updateProfile } from "./profile-reducer";
import "../home/index.css";
import '@fortawesome/fontawesome-free/css/all.css';

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);
    console.log(profile);

    let [name, setName] = useState(profile.firstName +" "+ profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [DOB, setDOB] = useState(profile.dateOfBirth);
    let [bannerPicture, setBanner] = useState(profile.bannerPicture);
    let [profilePicture, setProfile] = useState(profile.profilePicture);

    const dispatch = useDispatch();

    const saveButton = () => {
        dispatch(updateProfile({
            ...profile,
            banner:bannerPicture,
            profile: profilePicture,
            name:name,
            bio:bio,
            location:location,
            website:website,
            dateOfBirth:DOB,
        }));

    };

    return(
        <div className="border-light border-thin ps-1 pe-2">
            <div className="ms-1 mt-1">
                <div>
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-circle"></i>
                    </Link>
                    <span className="wd-text-3 me-3 wd-padding-left-5">Edit Profile</span>

                    <span className="float-end wd-bg-trans">
                        <Link to="/tuiter/profile">
                            <button onClick={saveButton} className="rounded-pill border wd-text-1 wd-padding-5 wd-bg-trans"> Save </button>
                        </Link>
                    </span>
                </div>
            </div>

            <div className="wd-padding-50"></div>
            <button value={bannerPicture}
                    onChange={e => setBanner(e.target.banner)}
                    className="-align-center me-2 wd-bg-trans border-0">
                <i className="bi bi-camera"></i>
            </button>
            <button className="-align-center me-2 wd-bg-trans border-0"><i className="bi bi-x-circle"></i></button>

            <div>
                <img className="wd-pic-3" src={profile.bannerPicture}/>
                <button value={profilePicture}
                        onChange={e => setProfile(e.target.profile)}
                        className="-align-center me-2 wd-bg-trans border-0">
                    <i className="bi bi-camera"></i>
                </button>

                <img className="wd-pic-2" src={profile.profilePicture}/>
            </div>

            <div className="wd-padding-10"></div>

            <div>
                <div className="wd-border">
                    <label className="ms-2">Name</label><br/>
                    <input
                        className="ms-2 wd-text-2"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                </div>

                <div className="wd-padding-10"></div>
                <div className="wd-border ">
                    <label className="ms-2">Bio</label><br/>
                    <textarea
                        className="ms-2 wd-text-2"
                        rows= "5"
                        value={bio}
                        onChange={e => setBio(e.target.value)}/>
                </div>

                <div className="wd-padding-10"></div>
                <div className="wd-border">
                    <label for="location" className="ms-2">Location</label><br/>
                    <input
                        className="ms-2 wd-text-2"
                        value={location}
                        onChange={e => setLocation(e.target.value)}/>
                </div>

                <div className="wd-padding-10"></div>
                <div className="wd-border">
                    <label for="website" className="ms-2">Website</label><br/>
                    <input
                        className="ms-2 wd-text-2"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}/>
                </div>

                <div className="wd-padding-10"></div>
                <div className="wd-border">
                    <label for="dob" className="ms-2">Date of birth</label><br/>
                    <input
                        className="ms-2 wd-text-2"
                        value={DOB}
                        onChange={e => setDOB(e.target.value)}/>
                </div>
            </div>

        </div>
    );
};
export default EditProfile;