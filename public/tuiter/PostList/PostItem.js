const PostItem = (post) => {
  const result = post
    .map((item) => {
      return `
        <li class="container" style="list-style-type: none; border: 1px solid rgb(110, 118, 125);">
            <div class="row p-2">
                <div id="avaterimage" class="col-1" style="text-align: center;">
                    
                    <img src="${item.avatarImage ? item.avatarImage : ""}",
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
                                ${item.userName ? item.userName : ""}
                                </span>
                                <i class="bi bi-patch-check-fill text-white"></i>
                                ${
                                  item.userHandleAndTime
                                    ? item.userHandleAndTime
                                    : ""
                                }
                            
                            </div>
                            <div class="col-1">
                                <span>...</span>
                            </div>
                        </div>
                    </div>
                    <div id="topicbox" style="padding-left: 5px; padding-bottom: 3px;">
                        <span>${item.topicPart1 ? item.topicPart1 : ""}</span>
                        <a href="#" class="text-decoration-none">${
                          item.topicHandleBetween ? item.topicHandleBetween : ""
                        }</a>
                        <span></span>
                        <span>${item.topicPart2 ? item.topicPart2 : ""}</span>
                        <a href="#" class="text-decoration-none">${
                          item.topicLinksAfter ? item.topicLinksAfter : ""
                        }</a>
                    </div>
                    <div id="posts" class="card" style="border: 1px solid rgb(110, 118, 125);">
                        <div>
                            <img src="${item.cardImage ? item.cardImage : ""}"
                            class="card-img-top" alt="...">
                        </div>
                           
                                ${
                                  item.cardTitle
                                    ? '<div class="card-body" style="background-color: black; border-top: 1px solid rgb(110, 118, 125);">' +
                                      '<div class="card-title text-white mt-3">' +
                                      item.cardTitle +
                                      "</div>"
                                    : ""
                                }
                                ${
                                  item.cardContents
                                    ? '<div class="card-text">' +
                                      item.cardContents +
                                      "</div>"
                                    : ""
                                }

                                ${
                                  item.cardLinkImage
                                    ? '<span id="cardlink" class=" mb-3">' +
                                      item.cardLinkImage +
                                      "</span>"
                                    : ""
                                }
                                ${
                                  item.cardLink
                                    ? '<span id="cardlink" class=" mb-3">' +
                                      item.cardLink +
                                      "</span> </div>"
                                    : ""
                                }
                           
                        </div>
                        <div class="d-flex justify-content-between p-2" \">
                        <div>
                            <button class="btn">
                                <i class="fas fa-reply"></i>
                            </button>
                            <span>${
                              item.replyNumber ? item.replyNumber : ""
                            }</span>
                        </div>
                        <div>
                            <button class="btn">
                            <i class="fas fa-retweet"></i>
                            </button>
                            <span>${
                              item.retweetNumber ? item.retweetNumber : ""
                            }</span>
                        </div>
                        <div>
                            <button class="btn">
                                <i class="far fa-heart"></i>
                            </button>
                            <span>${
                              item.likeNumber ? item.likeNumber : ""
                            }</span>
                        </div>
                        <div>
                            <button class="btn">
                            <i class="fas fa-share"></i>
                            </button>
                        </div>
                    </div>
                   
                </div>

            </div>
       
        </li>
        `;
    })
    .join("");
  return result;
};
export default PostItem;
