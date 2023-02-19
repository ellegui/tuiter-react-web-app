import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
const PostSummaryList = () => {
    return (`
           <div class="list-group">

           ${PostSummaryItem(post[0])}
           ${PostSummaryItem(post[1])}
           ${PostSummaryItem(post[2])}
           ${PostSummaryItem(post[3])}
           
           </div>
`); }

export default PostSummaryList;