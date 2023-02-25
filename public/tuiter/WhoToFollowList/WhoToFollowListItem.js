const WhoToFollowListItem = (who) => {
    const result = who.map((item) => {
        return (`
            <li class="list-group-item follow-list-group">
                <div class="d-flex justify-content-start">
                  <div class="d-inline-flex col-2">
                    <img
                        src="${item.avatarIcon}"
                        class="rounded-circle"
                        alt="Rounded Image"
                        width="40px"
                        height="40px"
                    />
                  </div>
                  <div class="d-inline-flex col-7">
                    <div class="d-flex flex-column">
                      <div class="row-6">
                      ${item.userName}
                      <i class="bi bi-patch-check-fill"></i>
                      </div>
                      <div class="row-6">@${item.handle}</div>
                    </div>
                  </div>
                  <div class="d-inline-flex col-3 align-self-center">
                    <a id="follow" href="#" class="btn btn-primary rounded-pill">Follow</a>
                  </div>
                </div>
            </li>
        `)
    }).join('')
    return result
}

export default WhoToFollowListItem;