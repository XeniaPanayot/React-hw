import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, {StateType, StoreType} from "./data/state"

let rerenderTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderTree(store.getState());
// @ts-ignore
store.subscribe(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
