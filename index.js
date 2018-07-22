import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import playerReducer from './src/reducers/player';
import App from './src/App';

const store = createStore(playerReducer);

render(<Provider store={store}>
            <App/>
       </Provider>,
    document.getElementById('container')
);