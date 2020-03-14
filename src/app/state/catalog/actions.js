import * as types from './types';

const getImageAC = (payload) => ({
    type: types.GET_IMAGE,
    payload
});

const groupImageAC = () => ({
    type: types.GROUP_IMAGE
});

const ungroupImageAC = () => ({
    type: types.UNGROUP_IMAGE
});

const clearImgListAC = () => ({
    type: types.CLEAR_IMG_LIST
});

const startFetchAC = () => ({
    type: types.START_FETCHING
});

const endFetchAC = () => ({
    type: types.END_FETCHING
});

const showPopUpAC = (payload) =>({
    type: types.SHOW_POP_UP,
    payload
});

const hidePopUpAC = () =>({
    type: types.HIDE_POP_UP
});

export {
    getImageAC,
    groupImageAC,
    ungroupImageAC,
    clearImgListAC,
    startFetchAC,
    endFetchAC,
    showPopUpAC,
    hidePopUpAC
}