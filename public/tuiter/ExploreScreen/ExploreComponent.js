import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                        <div class="input-group mb-3 wd-search">
                    <div class=" position-relative">
                        <span class="input-group-image" ><img src="images/search.png" class="wd-icon-gear" style="height: 15px" ></span>
                    </div>
                    <input type="text" class="form-control wd-search " placeholder="Search Tuiter" aria-describedby="basic-addon1">
                    <div class="input-group-append">
                        <span class="input-group-image" ><img src="images/gear.png" class="wd-icon-gear" style="height: 19px"></span>
                    </div>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#For you"> <span class="wd-underline">For you</span> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Trending">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#News">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Sports">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Entertainment">Entertainment</a>
                    </li>
                </ul>

           </ul>
           <div class="list-group-item wd-border">
                    <img src="images/starship.jpeg" class="card-img wd-pic-ss" alt="starship">
                    <div class="card-img-overlay d-flex align-items-end" style="background-color: transparent">
                        <h3 class="wd-space">SpaceX's Starship</h3>
                    </div>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

