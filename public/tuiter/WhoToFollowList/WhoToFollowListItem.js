const WhoToFollowListItem = (who) => {
    return(`
   <a href="" class="list-group-item list-group-item-action border-0">
        <table>
            <td><button class="btn btn-primary override-bs position-absolute me-2 mt-2 end-0">Follow</button></td>
            
            <tbody>

            <tr class="wd-align">
                <td><img class="wd-pic-right ms-1 mt-1" src="images/${who.avatarIcon}"></td>
                <td><h6> ${who.userName} <img src="images/verify.png" class="wd-icon-verify"> </h6>
                    @${who.handle}
                </td>
            </tr>
            </tbody>
        </table>
    </a>
 `);
}
export default WhoToFollowListItem;