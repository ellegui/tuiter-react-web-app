import NavigationSidebar from "../NavigationSidebar/index.js";
import Post from "../PostList/PostList.js";
import PostSummaryList from "../PostSummaryList/index.js";

function HomeScreen() {
    $('#wd-home-screen').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--   <h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar({home: true, explore: false})}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
    ${Post()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white"> 
    ${PostSummaryList()}
   </div>
  </div>
   `);
}
$(HomeScreen);