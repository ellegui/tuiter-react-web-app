const NavigationSidebar = () => {
    return(`
   <div class="list-group wd-align">
                    <a href="" class="list-group-item list-group-item-action border-0">
                        <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-twitter-old-logo-a-micro-blogging-web-portal-logo-color-tal-revivo.png" class="wd-icon-t">
                        </br>
                    </a>
                    <a href="../HomeScreen/index.html " class="list-group-item list-group-item-action border-0">
                        <i class="fas fa-home fa-hashtag wd-bg-trans"></i>
                        <span class="d-xl-inline-block d-block d-none d-lg-none wd-left-text">Home</span>
                    </a>
                    <a href="../explore/index.html" class="list-group-item list-group-item-action active border-0" style="background-color: dodgerblue">
                        <i class="fas fa-fw fa-hashtag wd-bg-trans"></i>
                        <span class="d-xl-inline-block d-block d-none d-lg-none wd-bg-trans wd-left-text">Explore</span>
                    </a>

                    <a href="#Notifications" class="list-group-item list-group-item-action border-0">
                        <i class="fas fa-fw fa-bell"></i>
                        <span class="d-xl-inline-block d-block d-none d-lg-none wd-left-text">Navigation</span>
                    </a>

                    <a href="#Messages" class="list-group-item list-group-item-action border-0">
                        <i class="fas fa-fw fa-envelope"></i>
                        <span class="d-xl-inline-block d-block d-none d-lg-none wd-left-text">Messages</span>
                    </a>

                    <a href="#Bookmarks" class="list-group-item list-group-item-action border-0">
                        <i class="fas fa-fw fa-bookmark"></i>
                        <span class="d-xl-inline-block d-block d-none d-lg-none wd-left-text">Bookmarks</span>
                    </a>

                    <a href="#Lists" class="list-group-item list-group-item-action border-0">
                        <i class="fas fa-fw fa-list"></i>
                        <span class="d-xl-inline-block d-block d-none d-lg-none wd-left-text">Lists</span>
                    </a>

                    <a href="#Profile" class="list-group-item list-group-item-action border-0">
                        <i class="fas fa-fw fa-user"></i>
                        <span class="d-xl-inline-block d-block d-none d-lg-none wd-left-text">Profile</span>
                    </a>

                    <a href="#More" class="list-group-item list-group-item-action border-0">
                        <i class="fas fa-fw fa-dot-circle"></i>
<!--                        <img src="https://img.icons8.com/material-outlined/512/connection-status-off.png" class="wd-icon-left">-->
                        <span class="d-xl-inline-block d-block d-none d-lg-none wd-left-text">More</span>
                    </a>
                    </br>

                    <button class="btn btn-primary override-bs" style="background-color: dodgerblue">
                        Tuit
                    </button>

                </div>
 `);
}
export default NavigationSidebar;

