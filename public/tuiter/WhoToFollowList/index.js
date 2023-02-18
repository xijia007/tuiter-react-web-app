import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
        
    <ul class="list-group">
        <div class="list-group-item list wd-who-to-follow-bolded">Who to follow</div>
        ${WhoToFollowListItem(who)}
    </ul>
    
    `)
}

export default WhoToFollowList;