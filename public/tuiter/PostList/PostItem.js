const PostItem = (post) => {
    const result = post.map((item) => {
        return (`
        <li class="container my-2" style="list-style-type: none;">
            <div class="row">
                <div id="avaterimage" class="col-1">
                    <img src="${item.avatarImage ? item.avatarImage : '' }",
                         class="rounded-circle wd-rounded-image"
                         alt="Rounded Image"
                         width: "50px"
                         height:"50px"/>
                </div>
                <div class="col-11">
                    <div id="usernamebox" style="padding-left: 5px; padding-top: 3px;">
                        <div class="row">
                            <div class="col-11">
                                <span class="text-white">
                                ${item.userName ? item.userName : '' }
                                </span>
                                <i class="bi bi-patch-check-fill text-white"></i>
                                ${item.userHandleAndTime ? item.userHandleAndTime : '' }
                            
                            </div>
                            <div class="col-1">
                                <span>...</span>
                            </div>
                        </div>
                    </div>
                    <div id="topicbox" style="padding-left: 5px; padding-bottom: 3px;">
                        <span>${item.topicPart1 ? item.topicPart1 : '' }</span>
                        <a href="#" class="text-decoration-none">${item.topicHandleBetween ? item.topicHandleBetween : '' }</a>
                        <span></span>
                        <span>${item.topicPart2 ? item.topicPart2 : '' }</span>
                        <a href="#" class="text-decoration-none">${item.topicLinksAfter ? item.topicLinksAfter : '' }</a>
                    </div>
                    <div id="posts" class="rounded wd-post-box-border">
                        <div>
                            <div class="wd-post-image-border">
                                <img src="${item.cardImage ? item.cardImage : '' }"
                                     style="width:100%">
                            </div>
                                ${item.cardTitle ? '<div class="container">'+
                                '<div style="padding-left: 5px; padding-bottom: 3px;">'+'<div class="card-title text-white mt-3">'+item.cardTitle+'</div>' : '' }
                                ${item.cardContents ? '<div class="card-text">'+item.cardContents +'</div>': '' }

                                ${item.cardLinkImage ? '<span id="cardlink" class=" mb-3">'+ item.cardLinkImage+'</span>' : '' }
                                ${item.cardLink ? '<span id="cardlink" class=" mb-3">'+item.cardLink+'</span> </div>' : '' }
                           
                        </div>
                    </div>
                </div>
            </div>
        </li>
        `)
    }).join('')
    return result
}
export default PostItem;

