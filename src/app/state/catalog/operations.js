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

        let first_response = axios.get(
            `https://api.giphy.com/v1/gifs/random?api_key=FVwr5zg2EoernKOx58Dd1JiyLAxyz7rV&tag=${tag}`
        );

        first_response
            .then(
                (response) => {

                    dispatch(getImageAC({tag, url: response.data.data.images.original.url}));

                    if (!response.data) {
                        dispatch(showPopUpAC({status: 'empty'}));
                    }
                    dispatch(endFetchAC());
                    dispatch(reset('imageSelectForm'));
                })
            .catch(error => {
                dispatch(showPopUpAC({status: 'error'}));
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