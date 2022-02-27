import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2">
                ${NavigationSidebar('explore')}
                </div>
            <div class="d-flex col">
                ${ExploreComponent()}
            </div>
            </div>
            <div class="d-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
