import tuits from "../data/tuit.json"

const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
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

            case 'delete-tuit':
                return state.filter(
                    tuit => tuit._id !== action.tuit._id);

            case 'create-tuit':
                const newTuit = {
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        "username": "@beandeebe"
                    },
                    stats: {
                        retuits: 36500,
                        likes: 200000,
                        replies: 400000
                    },
                    avatarIcon: "../images/profile-pic.jpg",
                    userName: "Dean Beebe",
                    userHandle: "@beandeebe",
                    time: "1s",
                    body: action.tuit,
                    image: "",
                    imageDescriptionTitle: "",
                    imageDescriptionBody: "",
                    comments: "400K",
                    retweets: "36.5K",
                    likes: "200k",
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