import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import postStore from './store/postStore';
import App from './containers/App';

const root = (
  <Provider store={postStore()}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
