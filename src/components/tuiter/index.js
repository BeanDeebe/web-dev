import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";

const Tuiter = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"d-flex col"}>
                    <NavigationSidebar active="home"/>
                </div>
                <div className={"d-flex col-6"}>
                    <PostSummaryList/>
                </div>
                <div className={"d-flex col-3"}>
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    )
};
export default Tuiter;
