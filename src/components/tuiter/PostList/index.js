import PostListItem from "./PostListItem.js";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"

const PostList = () => {
    const post = useSelector((state) => state.tuits);

    return (
        <ul>
            {
                post.map(post => {
                    return (
                        <PostListItem post={post}/>
                    );
                })
            }
            </ul>
    )
}
export default PostList;
