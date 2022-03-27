import React from "react";
import PostList from "../PostList/index.js";
import post from "../data/tuit.json";
import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col col-md col-lg col-xl"
                 style={{"position": "relative"}}>
                <WhatsHappening/>
                <PostList post={post}/>
            </div>
        </div>
    );
};

export default HomeScreen;