const NavigationSideBar = (activeElement) => {
    $(document).ready(function () {
        $('#' + activeElement).addClass('active');
    });
    return (`
    <div>
        
        <ul class="list-group">
                <li class="list-group-item wd-navBar-left bg-item"><a href="#"><i
                        class="fa-brands fa-xl fa-twitter me-4" style="color:white"></i></a>
                </li>
                <li id="home" class="list-group-item bg-item wd-navBar-left"><a href="../HomeScreen/home.html"><i
                      class="fa-solid fa-xl fa-house me-4" style="color:white"></i> <span
                      class="d-none d-xl-inline-flex">Home</span></a></li>
                <li id="explore" class="list-group-item bg-item wd-navBar-left"><a href="../ExploreScreen/explore.html"><i
                        class="fa-solid fa-xl fa-hashtag me-4" style="color:white"></i><span
                        class="d-none d-xl-inline-flex">Explore</span></a></li>
                <li id="notifications" class="list-group-item bg-item wd-navBar-left"><a  href="#"><i
                        class="fa-solid fa-xl fa-bell me-4" style="color:white"></i><span
                        class="d-none d-xl-inline-flex"> Notifications</span></a></li>
                <li id="messages" class="list-group-item bg-item wd-navBar-left"><a  href="#"><i
                        class="fa-solid fa-xl fa-envelope me-4" style="color:white"></i>
                    <span class="d-none d-xl-inline-flex">Messages</span></a></li>
                <li id="bookmarks" class="list-group-item bg-item wd-navBar-left"><a  href="#"><i
                        class="fa-solid fa-xl fa-bookmark me-4" style="color:white"></i>
                    <span class="d-none d-xl-inline-flex">Bookmarks</span></a></li>
                <li id="lists" class="list-group-item bg-item wd-navBar-left"><a  href="#"><i
                        class="fa-solid fa-xl fa-list me-4" style="color:white"></i> <span
                        class="d-none d-xl-inline-flex">Lists</span></a></li>
                <li id="profile" class="list-group-item bg-item wd-navBar-left"><a  href="#"><i
                        class="fa-solid fa-xl fa-user me-4" style="color:white"></i> <span
                        class="d-none d-xl-inline-flex">Profile</span></a></li>
                <li id="more" class="list-group-item bg-item wd-navBar-left"><a href="#"><i
                        class="fa-solid fa-xl fa-ellipsis me-4" style="color:white"></i><span
                        class="d-none d-xl-inline-flex">More</span></a></li>
        </ul>
        </div>
    <div class="d-grid mt-2">
        <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
    </div>
    
    
    `);
}

export default NavigationSideBar;