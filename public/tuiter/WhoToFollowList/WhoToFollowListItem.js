const WhoToFollowListItem = (who) => {
    return (`
    <div class="card row">
        <div>
            <div>
               <img src=${who.avatarIcon} class="wd-profile-img float-start m-1">
                <h5>${who.userName}<span><i id="fa-icon" class="fa-solid fa-circle-check"></i></span></h5>
                <a class="m-2 btn btn-primary btn-sm rounded-pill text-right float-end" href="#"
                   role="button">Follow</a>
                <h6 class="d-flex">${who.userHandle}</h6>
            </div>
        </div>
    </div>
`);
}
export default WhoToFollowListItem;