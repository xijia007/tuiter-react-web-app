import PostItem from "./PostItem.js";
import post from "./posts.js";
const PostList = () => {
    return (`
    <ul class="list-group">
        ${PostItem(post)}
    </ul>
    `)
}

export default PostList;