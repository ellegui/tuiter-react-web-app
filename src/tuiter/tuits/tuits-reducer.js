import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        likedToggle(state,action){
            const tuitItem = state.find((tuitItem) => tuitItem._id === action.payload._id)
            tuitItem.liked = !tuitItem.liked
            tuitItem.likes += tuitItem.liked ? 1 : -1;
        },
    }
});

export const {createTuit, deleteTuit, likedToggle} = tuitsSlice.actions;
export default tuitsSlice.reducer;