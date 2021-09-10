import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./app-reduser";
import { composeWithDevTools } from 'redux-devtools-extension';
import {loadState, saveState} from "../m0-utils/localstorage-utils";

const reducers = combineReducers({
    app: appReducer,
});

const store = createStore(reducers, loadState(), composeWithDevTools(
    applyMiddleware(thunk)));

store.subscribe(() => {
    saveState({
        app: store.getState().app
    })
})

export type AppRootStateType = ReturnType<typeof reducers>

export default store;