import React from "react";

const NavigationSidebar = (active) => {

    return (
        <div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item wd-navBar-left bg-item"><a href="#"><i
                        className="fa-brands fa-xl fa-twitter me-4" style="color:white"></i></a>
                    </li>
                    <li id="home" className="list-group-item bg-item wd-navBar-left"><a
                        href="../../../../public/tuiter/HomeScreen/home.html"><i
                        className="fa-solid fa-xl fa-house me-4" style="color:white"/> <span
                        className="d-none d-xl-inline-flex">Home</span></a></li>
                    <li id="explore" className="list-group-item bg-item wd-navBar-left"><a
                        href="../../../../public/tuiter/ExploreScreen/explore.html"><i
                        className="fa-solid fa-xl fa-hashtag me-4" style="color:white"/><span
                        className="d-none d-xl-inline-flex">Explore</span></a></li>
                    <li id="notifications" className="list-group-item bg-item wd-navBar-left"><a href="#"><i
                        className="fa-solid fa-xl fa-bell me-4" style="color:white"/><span
                        className="d-none d-xl-inline-flex"> Notifications</span></a></li>
                    <li id="messages" className="list-group-item bg-item wd-navBar-left"><a href="#"><i
                        className="fa-solid fa-xl fa-envelope me-4" style="color:white"/>
                        <span className="d-none d-xl-inline-flex">Messages</span></a></li>
                    <li id="bookmarks" className="list-group-item bg-item wd-navBar-left"><a href="#"><i
                        className="fa-solid fa-xl fa-bookmark me-4" style="color:white"/>
                        <span className="d-none d-xl-inline-flex">Bookmarks</span></a></li>
                    <li id="lists" className="list-group-item bg-item wd-navBar-left"><a href="#"><i
                        className="fa-solid fa-xl fa-list me-4" style="color:white"/> <span
                        className="d-none d-xl-inline-flex">Lists</span></a></li>
                    <li id="profile" className="list-group-item bg-item wd-navBar-left"><a href="#"><i
                        className="fa-solid fa-xl fa-user me-4" style="color:white"/> <span
                        className="d-none d-xl-inline-flex">Profile</span></a></li>
                    <li id="more" className="list-group-item bg-item wd-navBar-left"><a href="#"><i
                        className="fa-solid fa-xl fa-ellipsis me-4" style="color:white"/><span
                        className="d-none d-xl-inline-flex">More</span></a></li>
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