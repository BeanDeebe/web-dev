import React from "react";
import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

const NavigationSidebar = ({active = 'home'}) => {
    return (
        <div className="list-group">
            <Link to="/"
                  className="list-group-item">
                <FontAwesomeIcon icon="fa-brands fa-twitter"/>
            </Link>
            <Link to="/tuiter/home"
                  className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={"home"}/>
                <span className="d-none d-xl-inline">Home</span>
            </Link>
            <Link to="/tuiter/explore"
                  className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={"hashtag"}/>
                <span className="d-none d-xl-inline">Explore</span>
            </Link>
            <Link to="/tuiter/notifications"
                  className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={"bell"}/>
                <span className="d-none d-xl-inline">Notifications</span>
            </Link>
            <Link to="/tuiter/messages"
                  className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={"envelope"}/>
                <span className="d-none d-xl-inline">Messages</span>
            </Link>
            <Link to="/tuiter/bookmarks"
                  className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={"bookmark"}/>
                <span className="d-none d-xl-inline">Bookmarks</span>
            </Link>
            <Link to="/tuiter/lists"
                  className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={"list"}/>
                <span className="d-none d-xl-inline">Lists</span>
            </Link>
            <Link to="/tuiter/profile"
                  className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={"user"}/>
                <span className="d-none d-xl-inline">Profile</span>
            </Link>
            <Link to="/tuiter/more"
                  className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={"ellipsis"}/>
                <span className="d-none d-xl-inline">More</span>
            </Link>
        </div>
    )
}
export default NavigationSidebar