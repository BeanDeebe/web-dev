import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: './images/NASA_logo.svg.png',
            userName: 'NASA',
            handle: '@nasa',
        }
    }) => {
    return (
        <div className={"card grid-col-left-sidebar"}>
            <div>
                <div>
                    <img src={who.avatarIcon} className={"wd-profile-img float-start m-1"} alt={"profile image"}/>
                    <h5>{who.userName}<span><FontAwesomeIcon icon="fa-solid fa-badge-check"/></span></h5>
                    <a className={"m-2 btn btn-primary btn-sm rounded-pill text-right float-end"} href="#"
                       role="button">Follow</a>
                    <h6 className={"d-flex"}>{who.userHandle}</h6>
                </div>
            </div>
        </div>
    );
}
export default WhoToFollowListItem;