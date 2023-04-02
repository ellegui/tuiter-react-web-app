import React from "react";
import {likedToggle} from "./tuits-reducer"
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        post ={
            "_id": 567,
            "userName":"Robert Zubrin",
            "avatar":"../userImg1.jpeg",
            "topic": "Whatever",
            "handle": "robert_zubrin",
            "time":"23h",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula consectetur viverra. ",
            "img": "../tuiter/res/img/classroom2.jpeg",
            "title":"Maecenas sapien ex, hendrerit facilisis lectus",
            "details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula consectetur viverra. Duis in sapien metus. Integer ante quam, semper eget rutrum nec, dapibus eu sapien. In vitae tempus magna, quis fermentum est. Donec semper, tortor vel venenatis faucibus, ipsum magna condimentum erat, in iaculis elit metus in felis.",
            "comment":"22",
            "retweet":"128",
            "like":"11",
            "liked": true
        }
    }
) =>{
    const dispatch = useDispatch();
    const toggleTuitLike = (tuit) => dispatch(likedToggle(tuit))
    return (
        <div className="d-flex m-2 ms-5" style={{color: "grey"}}>
            <div className="">
                <i className="fa fa-comment"></i>
                <span> {post.comment}</span>
            </div>
            <div className="">
                <i className="fa-solid fa-retweet"></i>
                <span> {post.retweet}</span>
            </div>
            <div className="">
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
                <span> {post.like}</span>
            </div>

            <div className="">
                <i className="fa-solid fa-share"></i>
            </div>
        </div>

    )
}

export default TuitStats;