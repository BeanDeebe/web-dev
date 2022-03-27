import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import profilePic from "../../../profile-pic.jpg"
import "../../../css/home.css"
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <div className="mb-3">
            <div className="wd-accountInfo">
                <img src={profilePic} className="wd-avatar" alt="profile image"/>
                <div>
                    <textarea value={whatsHappening}
                              onChange={(event) =>
                                  setWhatsHappening(event.target.value)} cols={"74"} className="wd-tuitArea mb-1"
                              placeholder={"What's happening?"}/>
                    <FontAwesomeIcon icon="fa-solid fa-image" className="wd-icon p-1"/>
                    <FontAwesomeIcon icon="fa-solid fa-chart-line" className="wd-icon p-1"/>
                    <FontAwesomeIcon icon="fa-solid fa-face-smile" className="wd-icon p-1"/>
                    <FontAwesomeIcon icon="fa-solid fa-calendar" className="wd-icon p-1"/>
                    <button className="wd-color btn btn-primary btn-sm rounded-pill text-right float-end"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhatsHappening;