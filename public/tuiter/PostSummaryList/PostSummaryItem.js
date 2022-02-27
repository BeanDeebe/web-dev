const PostSummaryItem = (post) => {
    return (`
        <div class="card row wd-grid-row">
                    <div>
                        <h6 class="d-inline-flex">${post.topic}</h6>
                        <div>
                            <h5 class="d-inline-flex">${post.userName}<span><i id="fa-icon"
                                                                      class="fa-solid fa-circle-check"></i></span>
                            </h5><img src="${post.image}" class="wd-center-content-img align-self-center float-end">
                            <h6 class="d-inline-flex">- ${post.time}</h6>
                            <h5 class="d-flex">${post.title}</h5>
                        </div>
                    </div>
            </div>
    `)
}
export default PostSummaryItem;