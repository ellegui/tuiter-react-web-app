import React from "react";
import './index.css';
import '../../vendors/fontawesome/css/all.css';

const HomeComponent = () => {
    return(
        <div className="row text-white">
            <ul className="list-group wd-align-left">
                <li className="list-group-item">
                    <div className="wd-padding-left-50">
                        <img src="/images/retw.png" className="wd-icon-verify"/>
                        <span className="wd-text-bold"> Elon Musk Retweeted</span>
                    </div>

                    <img className="wd-pic-right" src="/images/spacex.jpeg" alt="Avatar"/> SpaceX
                    <img src="/images/verify.png" className="wd-icon-verify"/>
                    <span className="wd-lightgray wd-padding-left-3">@SpaceX</span>
                    <span className="wd-lightgray"> • 23h</span>
                    <img src="/images/dots.png" className="wd-icon-verify wd-right"/>
                    <div className="wd-left-text wd-padding-left"> Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon →
                        <a href="http://spacex.com/updates" className="wd-text-show"> http://spacex.com/updates</a>
                        <div>
                            <div className="wd-padding-5"></div>
                            <img className="wd-home-mid-pic" src="/images/da.jpeg"/>
                        </div>

                        <div className="wd-padding-5"></div>

                        <div className="d-flex justify-content-between ms-2 mb-1">
                            <div className="text-secondary float-start">
                                <i className="far fa-comment text-secondary"></i> 595
                            </div>

                            <div className="text-secondary float-start">
                                <i className="far fa-square text-secondary"></i> 1,168
                            </div>

                            <div className="text-secondary float-start">
                                <i className="far fa-heart text-secondary"></i> 11.5k
                            </div>

                            <div className="text-secondary float-start">
                                <i className="far fa-share-square text-secondary"></i>
                            </div>
                            <div> </div>
                        </div>

                        <div className="wd-padding-5"></div>

                        <div><a href="https://twitter.com/SpaceX/status/1580187420015722496" className="wd-text-show">Show this thread</a> </div>
                        <div className="wd-padding-5"></div>
                    </div>
                </li>

                {/*second post*/}
                <li className="list-group-item">

                    <img className="wd-pic-right" src="/images/elon.jpeg" alt="Avatar"/> Elon Musk
                    <img src="/images/verify.png" className="wd-icon-verify"/>
                    <span className="wd-lightgray wd-padding-left-3">@elonmusk</span>
                    <span className="wd-lightgray"> • 15h</span>
                    <img src="/images/dots.png" className="wd-icon-verify wd-right"/>
                    <div className="wd-left-text wd-padding-left"> We might need a different name, as this is basically just starlink with roaming capability, so you can take your terminal anywhere.

                        <div>
                            <div className="wd-padding-5"></div>

                            <div className="wd-border-2">
                                <div className="wd-padding-10">

                                    <img className="wd-pic-small" src="/images/spacex.jpeg" alt="Avatar"/> SpaceX
                                    <img src="/images/verify.png" className="wd-icon-verify"/>
                                    <span className="wd-lightgray wd-padding-left-3">@SpaceX</span>
                                    <span className="wd-lightgray"> • 16h</span>

                                    <div className="wd-left-text-2 wd-padding-5">
                                    Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → http://starlink.com/rv
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wd-padding-5"></div>
                        <div className="d-flex justify-content-between ms-2 mb-1">
                            <div className="text-secondary float-start">
                                <i className="far fa-comment text-secondary"></i> 5,345
                            </div>

                            <div className="text-secondary float-start">
                                <i className="far fa-square text-secondary"></i> 1,601
                            </div>

                            <div className="text-secondary float-start">
                                <i className="far fa-heart text-secondary"></i> 19.2k
                            </div>

                            <div className="text-secondary float-start">
                                <i className="far fa-share-square text-secondary"></i>
                            </div>
                            <div> </div>
                        </div>

                        <div className="wd-padding-5"></div>

                    </div>
                </li>

            </ul>

        </div>
    );
};

export default HomeComponent;