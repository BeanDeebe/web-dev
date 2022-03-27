import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
        </div>
    );
};
export default ExploreScreen;
