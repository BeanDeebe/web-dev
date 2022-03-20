import React from "react";
import PostList from "../PostList/index.js";
import post from "../PostList/post.json";
import NavigationSideBar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import who from "../WhoToFollowList/who.json"
import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const HomeScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSideBar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <PostList post={post}/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList who={who}/>
            </div>
        </div>
    );
};

export default HomeScreen;