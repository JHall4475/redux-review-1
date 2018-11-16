import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './ducks/store';

import List from './components/List/List';

function App() {

    return (
        <Provider store={store} >
            <div className="App">
                <List />
            </div>
        </Provider>
    );
}

export default App;
