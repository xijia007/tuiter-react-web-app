const PostSummaryItem = (post) => {
  const result = post
    .map((item) => {
      return `
        <li class="list-group-item follow-list-group">
            <div class="row justify-content-between py-1 ps-1">
                <div class="col-10">
                    <div class="text-secondary">
                        ${item.topic ? item.topic : ""}
                    </div>
                    <div class="font-size-bold">
                        <strong>${item.userName ? item.userName : ""}</strong>
                        <i class="bi bi-patch-check-fill text-white"></i>
                        <span class="text-secondary">${
                          item.time ? item.time : ""
                        }</span>
                    </div>
                    <div>${item.title ? item.title : ""}</div>
                    <div class="text-secondary">
                        ${item.tweets ? item.tweets : ""}
                    </div>
                </div>
                <div class="col-2">
                    <img
                        src="${item.image ? item.image : ""}",
                        class="rounded wd-post-image"
                        alt="Rounded Image"
    
                    />
                </div>
            </div>
        </li>
        `;
    })
    .join("");
  return result;
};
export default PostSummaryItem;
