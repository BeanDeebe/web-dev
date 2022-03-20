import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const PostSummaryItem = (
    {
        post = {
            topic: 'Web Development',
            userName: 'ReactJS',
            time: '2h',
            image: './images/react-1.png',
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs"
        }
    }) => {
    return (
        <div className={"card row wd-grid-row"}>
            <div>
                <h6 className={"d-inline-flex"}>{post.topic}</h6>
                <div>
                    <h5 className={"d-inline-flex"}>{post.userName}<span><FontAwesomeIcon
                        icon="fa-solid fa-badge-check"/></span>
                    </h5><img src={post.image} className={"wd-center-content-img align-self-center float-end"}/>
                    <h6 className={"d-inline-flex"}>- {post.time}</h6>
                    <h5 className={"d-flex"}>{post.title}</h5>
                </div>
            </div>
        </div>
    )
}
export default PostSummaryItem;