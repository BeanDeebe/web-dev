import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import "../../../css/home.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch} from "react-redux";
import React from "react";
import {deleteTuit} from "../../actions/tuits-actions";
import {updateTuit} from "../../actions/tuits-actions";

const PostListItem = (
    {
        post = {
            avatarIcon: "",
            username: "",
            userhandle: "",
            profileImg: "",
            time: "",
            tuit: "",
            image: "",
            imageDescriptionTitle: "",
            imageDescriptionBody: "",
            comments: "",
            retweets: "",
            dislikes: "0",
            likes: "0",
        }
    }) => {
    const dispatch = useDispatch();
    return (
        <div className="wd-tuitContent row">
            <div className="wd-accountInfo">
                <img src={post.profileImg} className="wd-avatar" alt="profile image"/>
                <div className="w-100">
                    <i className="fas fa-remove px-2 float-end"
                       onClick={() => deleteTuit(
                           dispatch, post)}><FontAwesomeIcon icon="fa-solid fa-x"/></i>
                    <span className="wd-tuitName">{post.username}</span> <span
                    className="wd-tuitHandle">{post.userhandle} - {post.time}</span>
                    <p className="wd-tuitContent">{post.tuit}</p>
                    <div>
                        <span className="">{post.imageDescriptionTitle}</span>
                        <p className="">{post.imageDescriptionBody}</p>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-comment" className={"wd-first-icon wd-tuit-icons"}/><span
                            className="wd-icon-text">{post.comments}</span>
                            <FontAwesomeIcon icon="fa-solid fa-retweet" className={"wd-tuit-icons"}/><span
                            className="wd-icon-text">{post.retweets}</span>
                            <span className="wd-tuit-icons">
                            <i onClick={() => updateTuit(dispatch, {
                                ...post,
                                likes: post.likes + 1
                            })}>Likes: {post.likes}<FontAwesomeIcon icon="fa-solid fa-thumbs-up" className="ps-1"/></i>
                                </span>

                            <span className="wd-tuit-icons">
                            <i onClick={() => updateTuit(dispatch, {
                                ...post,
                                dislikes: post.dislikes + 1
                            })}>Dislikes: {post.dislikes}<FontAwesomeIcon icon="fa-solid fa-thumbs-down"
                                                                          className="ps-1"/></i>
                                </span>

                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className={"wd-tuit-icons"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostListItem;
