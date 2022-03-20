import PostSummaryList from "../PostSummaryList/index.js";
import post from "../PostSummaryList/post.json"
import React from "react";
import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ExploreComponent = () => {
    return (
        <>
            <div>
                <div className="input-group mb-3 rounded-pill">
                <span className="input-group-text wd-magnifying-icon" id="basic-addon1">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
                </span>
                    <input type="text" className="form-control wd-searchBar" placeholder="Search Tuiter"/>
                    <span className="input-group-text wd-right-searchBar-icon" id="basic-addon2">
                    <a className="wd-icon" href="explore-settings.html">
                        <FontAwesomeIcon icon="fa-solid fa-gear"/>
                    </a>
                </span>
                </div>
                <nav className="navbar-expand navbar-dark">
                    <div className="d-inline container-fluid">
                        <div className="collapse navbar-collapse " id="navbarColor01">
                            <ul className="navbar-nav me-auto rounded bg-primary">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">For you</a>
                                </li>
                                <li className="nav-item bg-black">
                                    <a className="nav-link text-white" href="#">Trending</a>
                                </li>
                                <li className="nav-item bg-black">
                                    <a className="nav-link text-white" href="#">News</a>
                                </li>
                                <li className="nav-item bg-black">
                                    <a className="nav-link text-white" href="#">Sports</a>
                                </li>
                                <li className="nav-item bg-black">
                                    <a className="nav-link text-white" href="#">Entertainment</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="mb-2">
                    <div className="card">
                        <div>
                            <img src="../images/Starship-Mk1-Day.jpeg" className="card-img-top me-2"/>
                            <div className="card-img-overlay d-flex align-items-end">
                                <h3 id="photoText">SpaceX's Starship</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <PostSummaryList post={post}/>
            </div>
        </>
    )
}
export default ExploreComponent;
