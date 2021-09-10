import React, {useRef} from 'react';
import './App.css';
import MyInput from "../n2-components/input/MyInput";
import MyButton from "../n2-components/button/MyButton";
import List from "../n2-components/List";
import {useDispatch} from "react-redux";
import {getBalance} from "../../m2-bll/app-reduser";

function App() {
    const dispatch = useDispatch();

    const addHandler = () => {
        if(inputRef.current) {
            dispatch(getBalance(inputRef.current.value));
            inputRef.current.value = '';
        }
    }

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="App">
            <h1>MadFish Test Task</h1>
            <div className="row-container">
                <MyInput ref={inputRef} placeholder="Enter your pkh here..."/>
                <MyButton onClick={addHandler}>
                    Add
                </MyButton>
            </div>
            <List/>
        </div>
    );
}

export default App;
