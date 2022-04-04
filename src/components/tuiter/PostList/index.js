import PostListItem from "./PostListItem.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import React, {useEffect} from 'react';
import {useDispatch, useSelector}
    from "react-redux";
import {createTuit, deleteTuit, findAllTuits}
    from "../../actions/tuits-actions";

const PostList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        []);
    return (
        <ul>
            {
                tuits.map(post => {
                    return (
                        <div className="wd-grid-row">
                            <i className="fas fa-xmark fa-remove fa-pull-right"
                               onClick={() => deleteTuit(
                                   dispatch, tuits)}></i>
                            <PostListItem post={post}/>
                        </div>
                    );
                })
            }
            </ul>
    )
}
export default PostList;
