import * as types from './types';

const initialState = {
    images: [],
    isFetch: false,
    request: {}
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_IMAGE: {
            return {...state, images: [...state.images, {tag: action.payload.tag, url: action.payload.url}]}
        }
        case types.CLEAR_IMG_LIST: {
            return {...state, images: []}
        }
        case types.START_FETCHING: {
            return {...state, isFetch: true}
        }
        case types.END_FETCHING: {
            return {...state, isFetch: false}
        }
        case types.SHOW_POP_UP: {
            return {...state, request: {status: action.payload.status}}
        }
        case types.HIDE_POP_UP: {
            return {...state, request: {}}
        }
        default:
            return state
    }
};

export default catalogReducer;