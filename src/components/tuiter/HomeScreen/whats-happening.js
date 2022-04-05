import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import profilePic from "../../../profile-pic.jpg"
import "../../../css/home.css"
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({
            type: 'CREATE_TUIT',
            tuit: whatsHappening
        });
    }
    return (
        <div className="mb-3">
            <div className="row">
                <img src={profilePic} className="wd-avatar flex-row" alt="profile image"/>
                <textarea className="form-control w-75 mb-1"
                          placeholder={"What's Happening?"}
                          onChange={(e) =>
                              setNewTuit({
                                  ...newTuit,
                                  tuit: e.target.value,
                                  profileImg: profilePic,
                                  username: "Dean Beebe",
                                  userhandle: "@beandeebe",
                                  time: "1s"
                              })}> </textarea>

            </div>
            <div>
                <button onClick={() => createTuit(dispatch, newTuit)} className="btn btn-primary float-end">
                    Tuit
                </button>
                <FontAwesomeIcon icon="fa-solid fa-image" className="wd-icon p-2"/>
                <FontAwesomeIcon icon="fa-solid fa-chart-line" className="wd-icon p-2"/>
                <FontAwesomeIcon icon="fa-solid fa-face-smile" className="wd-icon p-2"/>
                <FontAwesomeIcon icon="fa-solid fa-calendar" className="wd-icon p-2"/>
            </div>

        </div>
    )
}

export default WhatsHappening;