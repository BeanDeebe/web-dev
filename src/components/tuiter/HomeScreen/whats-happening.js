import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import profilePic from "../../../profile-pic.jpg"
import "../../../css/home.css"
import React, {useState} from "react";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const tuitClickHandler = () => {
        console.log(whatsHappening);
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
                    <FontAwesomeIcon icon="fa-solid fa-image" className="wd-icon"/>
                    <button onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhatsHappening;