import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post";

const PostSummaryList = () => {
    return (
        <ul>
            {
                post.map(post => {
                    return (
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;