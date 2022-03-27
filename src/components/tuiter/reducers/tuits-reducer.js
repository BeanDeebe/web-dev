import tuits from "../data/tuit.json"

const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
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
                    likes: "200k"
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