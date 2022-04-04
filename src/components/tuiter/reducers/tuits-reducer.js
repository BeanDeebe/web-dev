import tuits from "../data/tuit.json"
import {DELETE_TUIT, FIND_ALL_TUITS} from "../../actions/tuits-actions";

const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case FIND_ALL_TUITS:
                return action.tuits;
            case 'like-tuit':
                return state.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                });

            case DELETE_TUIT:
                return state.filter(
                    tuit => tuit._id !== action.tuit._id);

            case 'create-tuit':
                const newTuit = {
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        "username": "@beandeebe"
                    },
                    stats: {
                        retuits: 0,
                        likes: 0,
                        replies: 0
                    },
                    avatarIcon: "../images/profile-pic.jpg",
                    userName: "Dean Beebe",
                    userHandle: "@beandeebe",
                    time: "",
                    body: action.tuit,
                    image: "",
                    imageDescriptionTitle: "",
                    imageDescriptionBody: "",
                    comments: "1",
                    retweets: "0",
                    likes: "0",
                    liked: false
                }

                return [
                    newTuit,
                    ...state,
                ];
            default:
                return tuits
        }
    }

export default tuitsReducer;