const PostSummaryItem = (post) => {
    return(`
    <a href="" class="list-group-item list-group-item-action border-0">
        <table class="wd-font ">
            <td><img class="position-absolute wd-image ms-1 mt-1 me-2 end-0" src=${post.image} /></td>
            <tbody>
         
            <td style="float: left" class="col-10">
                <div class="wd-class">${post.topic}</div>
                <div class="wd-account ">${post.userName}
                    ${post.userName?`<img src="../explore/images/verify.png" class="wd-icon-verify">`:''}
                    <span class="wd-font"> ${post.time} </span>
                </div>
                <div class="wd-title ">${post.title}</div>
                <div class="wd-class">${post.tweets}</div>
            </td>

             
            </tbody>
        </table>
    </a>
 `);
}
export default PostSummaryItem;

