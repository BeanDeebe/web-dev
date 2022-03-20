import React from "react";
import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const NavigationSidebar = ({active = 'home'}) => {
    return (
        <div>
            <div className={"d-flex"}>
                <ul className="list-group">
                    <li className="list-group-item wd-navBar-left bg-item"><a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" className={"fa-brands fa-xl fa-twitter me-4"}/></a>
                    </li>
                    <li id="home" className="list-group-item bg-item wd-navBar-left"><a
                        href="../../../../public/tuiter/HomeScreen/home.html">
                        <span><FontAwesomeIcon icon="fa-solid fa-house"
                                               className={"fa-solid fa-xl fa-house me-4"}/></span>Home</a></li>
                    <li id="explore" className="list-group-item bg-item wd-navBar-left"><a
                        href="../../../../public/tuiter/ExploreScreen/explore.html"><span><FontAwesomeIcon
                        icon="fa-solid fa-hashtag" className={"fa-solid fa-xl fa-hashtag me-4"}/>Explore</span></a></li>
                    <li id="notifications" className="list-group-item bg-item wd-navBar-left"><a href="#"><span
                        className="d-none d-xl-inline-flex"><FontAwesomeIcon icon="fa-solid fa-bell"
                                                                             className={"fa-solid fa-xl fa-bell me-4"}/> Notifications</span></a>
                    </li>
                    <li id="messages" className="list-group-item bg-item wd-navBar-left"><a href="#">
                        <span className="d-none d-xl-inline-flex"><FontAwesomeIcon icon="fa-solid fa-envelope"
                                                                                   className={"fa-solid fa-xl fa-envelope me-4"}/>Messages</span></a>
                    </li>
                    <li id="bookmarks" className="list-group-item bg-item wd-navBar-left"><a href="#">
                        <span className="d-none d-xl-inline-flex"><FontAwesomeIcon icon="fa-solid fa-bookmark"
                                                                                   className={"fa-solid fa-xl fa-bookmark me-4"}/>Bookmarks</span></a>
                    </li>
                    <li id="lists" className="list-group-item bg-item wd-navBar-left"><a href="#"> <span
                        className="d-none d-xl-inline-flex"><FontAwesomeIcon icon="fa-solid fa-list"
                                                                             className={"fa-solid fa-xl fa-list me-4"}/>Lists</span></a>
                    </li>
                    <li id="profile" className="list-group-item bg-item wd-navBar-left"><a href="#"> <span
                        className="d-none d-xl-inline-flex"><FontAwesomeIcon icon="fa-solid fa-user"
                                                                             className={"fa-solid fa-xl fa-user me-4"}/>Profile</span></a>
                    </li>
                    <li id="more" className="list-group-item bg-item wd-navBar-left"><a href="#"><span
                        className="d-none d-xl-inline-flex"><FontAwesomeIcon icon="fa-solid fa-ellipsis"
                                                                             className={"fa-solid fa-xl fa-ellipsis me-4"}/>More</span></a>
                    </li>

                </ul>
            </div>
            <div className="d-grid mt-2">
                <a href="../../../../public/tuiter/tuit.html"
                   className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </div>
    );
}

export default NavigationSidebar;