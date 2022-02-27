const PostListItem = (post) => {
    return (`
    <div class="wd-image-text-border">
        <div class="wd-accountInfo">
            <img src="${post.avatarIcon}" class="wd-avatar" alt="profile image"/>
            <div>
                <span class="wd-tuitName">${post.userName}</span>&nbsp;<span class="wd-tuitHandle">${post.userHandle} - ${post.time}</span>
                <p class="wd-tuitContent">${post.body}</p>
                <div>
                    <img src="${post.image}" alt="" class="wd-contentImage"/>
                </div>
                <div>
                    <span class="wd-contentImageDescription-title">${post.imageDescriptionTitle}</span>
                    <p class="wd-contentImageDescription-body">${post.imageDescriptionBody}</p>
                        <div>
                            <i class="fa-solid fa-comment wd-first-icon wd-tuit-icons"></i><span class="wd-icon-text">${post.comments}</span>
                            <i class="fa-solid fa-retweet wd-tuit-icons"></i><span class="wd-icon-text">${post.retweets}</span>
                            <i class="fa-solid fa-heart wd-tuit-icons"></i><span class="wd-icon-text">${post.likes}</span>
                            <i class="fa-solid wd-tuit-icons fa-arrow-up-from-bracket"></i>
                        </div>
                </div>
            </div>
        </div>
    </div>
    `)
}
export default PostListItem;
