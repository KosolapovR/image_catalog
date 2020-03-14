import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import catalog from "./catalog";
import {reducer as formReducer} from 'redux-form'

export default function configureStore() {
    const rootReducer = combineReducers({catalog, form: formReducer});

    return createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware
        ),
    );
}