import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../home/index.css';
import '../../vendors/fontawesome/css/all.css';
import {deleteTuit, likedToggle} from "./tuits-reducer";
import '@fortawesome/fontawesome-free/css/all.css';
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    const initialState = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    const tuitsArray = initialState.tuits;
    const loading = initialState.loading;
    const likedToggleHandler = (liked) => {
        dispatch(likedToggle(liked))
    }
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuitsArray.map(tuitItem =>
                    <li className="list-group-item wd-align-left">
                        <img className="mt-1 wd-pic-right d-flex " alt="" src={`/images/${tuitItem.image}`}/>
                        <div>
                            <i className="bi bi-x-lg float-end wd-icon"
                               onClick={() => deleteTuitHandler(tuitItem._id)}/>

                            <span className="fw-bold">{tuitItem.userName} </span>
                                <i className="fa fa-check-circle"/>
                            <span className="wd-padding-left-3"></span>
                            <span className="wd-text">{tuitItem.handle} • {tuitItem.time}</span>
                            <div className="wd-padding-1"></div>

                            <p className="d-flex wd-text">{tuitItem.tuit}</p>

                            <p className="wd-lightgray wd-padding-left wd-text">

                                <span className="">
                                  <img className="wd-icon" alt="" src="https://img.icons8.com/ios/256/speech-bubble--v1.png"/>
                                  <span className="ps-1">{tuitItem.replies}</span>
                                </span>


                                <span className="wd-padding-left">
                                  <img className="wd-icon" alt="" src="https://img.icons8.com/ios/256/repeat.png"/>
                                  <span className="ps-1">{tuitItem.retuits}</span>
                                </span>


                                <button onClick={() => dispatch(updateTuitThunk({
                                    ...tuitItem,
                                    likes: tuitItem.liked?tuitItem.likes - 1:tuitItem.likes + 1,
                                    liked: !tuitItem.liked
                                }))} className="flex-fill wd-bg-trans border-0 p-0">
                                <span className="wd-padding-left">
                                    <span className={tuitItem.liked ? "wd-red bi bi-heart-fill" : "bi bi-heart"}>
                                    </span>
                                  <span className="ps-1 wd-icon">{tuitItem.likes}</span>
                                </span>
                                </button>


                                <span className="wd-padding-left">
                                  <img className="wd-icon" alt="" src="https://img.icons8.com/ios/256/share-2.png"/>
                                </span>
                            </p>

                        </div>
                    </li>
                )
            }
        </ul>
    );
};

export default TuitList;