import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// import redux
import { Provider } from "react-redux";
import { store } from "./stores/index";


ReactDOM.render((
    <Provider store={store}>
        <div>
            <App />
            <button onClick={() => store.dispatch({ type: 'INCREMENT'})}>INCREMENT</button>
            <button onClick={() => store.dispatch({ type: 'DECREMENT'})}>DECREMENT</button>
        </div>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
