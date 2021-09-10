import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './m1-ui/n1-app/App';
import {Provider} from "react-redux";
import store from "./m2-bll/store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);