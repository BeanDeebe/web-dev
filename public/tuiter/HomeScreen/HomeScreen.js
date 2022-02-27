import NavigationSidebar from "../NavigationSideBar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2">
                ${NavigationSidebar()}
                </div>
            <div class="d-flex col">
                ${PostList()}
            </div>
            </div>
            <div class="d-none d-lg-block col-lg-4 col-xl-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);