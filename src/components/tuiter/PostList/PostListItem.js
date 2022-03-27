import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import "../../../css/home.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const PostListItem = (
    {
        post = {
            avatarIcon: "../images/atari.jpg",
            userName: "Atari",
            userHandle: "@atari",
            time: "2h",
            body: "Our exciting news we want to share!",
            image: "../images/gamesphere.jpeg",
            imageDescriptionTitle: "GameSphere Promises Immersive Experience",
            imageDescriptionBody: "It's spherical... SPHERICAL.",
            comments: "400K",
            retweets: "36.5K",
            likes: "200k"
        }
    }) => {
    return (
        <div className="wd-image-text-border row">
            <div className="wd-accountInfo">
                <img src={post.avatarIcon} className="wd-avatar" alt="profile image"/>
                <div>
                    <span className="wd-tuitName">{post.userName}</span>&nbsp;<span
                    className="wd-tuitHandle">{post.userHandle} - {post.time}</span>
                    <p className="wd-tuitContent">{post.body}</p>
                    <div>
                        <img src={post.image} alt="" className="wd-contentImage"/>
                    </div>
                    <div>
                        <span className="wd-contentImageDescription-title">{post.imageDescriptionTitle}</span>
                        <p className="wd-contentImageDescription-body">{post.imageDescriptionBody}</p>
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
