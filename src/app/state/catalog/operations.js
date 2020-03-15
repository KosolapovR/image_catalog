import {
    getImageAC,
    clearImgListAC,
    ungroupImageAC,
    groupImageAC,
    startFetchAC,
    endFetchAC,
    showPopUpAC,
    hidePopUpAC
} from "./actions";
import axios from "axios";
import {reset} from 'redux-form';

const getImage = (tag) => {

    return (dispatch) => {
        dispatch(startFetchAC());

        let promise = axios.get(
            `https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`
        );

        promise
            .then(
                (response) => {
                    if (response.data.data.length === 0) {
                        debugger;
                        dispatch(showPopUpAC({status: 'empty'}));
                    }else{
                        dispatch(getImageAC({tag, url: response.data.data.images.original.url}));
                    }
                })
            .catch(error => {
                dispatch(showPopUpAC({status: 'error'}));
            })
            .finally(()=>{
                dispatch(endFetchAC());
                dispatch(reset('imageSelectForm'));
            });
    }
}

const clearImgList = (formName) => {
    return (dispatch) => {
        dispatch(clearImgListAC());
        dispatch(reset(formName));
    }
};

export {
    getImage,
    clearImgList,
    ungroupImageAC,
    groupImageAC,
    hidePopUpAC
}