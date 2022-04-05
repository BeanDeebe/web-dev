import PostListItem from "./PostListItem.js";
import "../../../css/explore.css"
import "../../../vendors/bootstrap/bootstrap.min.css"
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as service from "../../../services/tuits-service"
import {createTuit, deleteTuit, findAllTuits}
    from "../../actions/tuits-actions";

const PostList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const findAllTuits = async () => {
        const tuits = await service.findAllTuits();
        dispatch({
            type: 'FIND_ALL_TUITS',
            tuits: tuits
        });
    }
    useEffect(findAllTuits, []);
    return (

        <ul>
            {
                tuits.map(post => {
                    return (
                        <div className="wd-grid-row">
                            <PostListItem post={post}/>
                            <i className="fas fa-xmark fa-remove fa-pull-right"
                               onClick={() => deleteTuit(
                                   dispatch, tuits)}> </i>
                        </div>
                    );
                })
            }
            </ul>
    )

}
export default PostList;
