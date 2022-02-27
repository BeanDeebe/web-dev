import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (`
        <div class="row">
            <div class="input-group mb-3 rounded-pill">
                <span class="input-group-text wd-magnifying-icon" id="basic-addon1"><i
                        class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control wd-searchBar" placeholder="Search Tuiter">
                <span class="input-group-text wd-right-searchBar-icon" id="basic-addon2"><a class="wd-icon"
                                                                                            href="explore-settings.html"><i
                        class="fa-solid fa-xl fa-gear"></i></a></span>
            </div>
    <nav class="navbar-expand navbar-dark">
      <div class="d-inline container-fluid">
        <div class="collapse navbar-collapse " id="navbarColor01">
          <ul class="navbar-nav me-auto rounded bg-primary">
            <li class="nav-item">
              <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item bg-black">
              <a class="nav-link text-white" href="#">Trending</a>
            </li>
            <li class="nav-item bg-black">
              <a class="nav-link text-white" href="#">News</a>
            </li>
            <li class="nav-item bg-black">
              <a class="nav-link text-white" href="#">Sports</a>
            </li>
            <li class="nav-item bg-black">
              <a class="nav-link text-white" href="#">Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
           <div class="mb-2">
            <div class="card">
                <div class="card-img">
                    <img src="../images/Starship-Mk1-Day.jpeg" class="card-img-top">
                    <div class="card-img-overlay d-flex align-items-end">
                        <h3 id="photoText">SpaceX's Starship</h3>
                    </div>
                </div>
            </div>
        </div>
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
