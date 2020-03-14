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
        let response = axios.get(`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`);
        response.then((response) => {
            dispatch(getImageAC({tag, url: response.data.data.embed_url}));
            //dispatch(getImageAC({tag, url: 'https://bipbap.ru/wp-content/uploads/2017/08/LEpwl8j7fQ.jpg'}));
            if (!response.data) {
                dispatch(showPopUpAC({status: 'empty'}));
            }
            dispatch(endFetchAC());
        }).catch(error => {
            dispatch(showPopUpAC({status: 'error'}));
            dispatch(endFetchAC());
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