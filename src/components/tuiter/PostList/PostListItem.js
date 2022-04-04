import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import "../../../css/home.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch} from "react-redux";
import React from "react";
import {deleteTuit} from "../../actions/tuits-actions";

const PostListItem = (
    {
        post = {
            avatarIcon: "",
            userName: "",
            userHandle: "",
            time: "",
            body: "",
            image: "",
            imageDescriptionTitle: "",
            imageDescriptionBody: "",
            comments: "",
            retweets: "",
            likes: "",
            liked: false
        }
    }) => {
    const dispatch = useDispatch();
    return (
        <div className="wd-tuitContent row">
            <div className="wd-accountInfo">
                <img src={post.avatarIcon} className="wd-avatar" alt="profile image"/>
                <div>
                    <i className="fas fa-remove p-1 float-end"
                       onClick={() => deleteTuit(
                           dispatch, post)}><FontAwesomeIcon
                        icon="fa-solid fa-x"/></i>
                    <span className="wd-tuitName">{post.userName}</span> <span
                    className="wd-tuitHandle">{post.userHandle} - {post.time}</span>
                    <p className="wd-tuitContent">{post.body}</p>
                    <div>
                        <img src={post.image} className="wd-contentImage"/>
                    </div>
                    <div>
                        <span className="">{post.imageDescriptionTitle}</span>
                        <p className="">{post.imageDescriptionBody}</p>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-comment" className={"wd-first-icon wd-tuit-icons"}/><span
                            className="wd-icon-text">{post.comments}</span>
                            <FontAwesomeIcon icon="fa-solid fa-retweet" className={"wd-tuit-icons"}/><span
                            className="wd-icon-text">{post.retweets}</span>
                            <FontAwesomeIcon icon="fa-solid fa-heart" className={"wd-tuit-icons"}/><span
                            className="wd-icon-text">{post.likes}</span>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className={"wd-tuit-icons"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostListItem;
