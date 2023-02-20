import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <div class="list-group rounded-corners-all-around">

                    <a href="" class="list-group-item list-group-item-action border-0">
                        <h6 class="wd-bg-trans wd-who">Who to follow</h6></a>
           ${WhoToFollowListItem(who[0])}
           ${WhoToFollowListItem(who[1])}
           ${WhoToFollowListItem(who[2])}
           ${WhoToFollowListItem(who[3])}
           ${WhoToFollowListItem(who[4])}
           </div>
`); }

export default WhoToFollowList;