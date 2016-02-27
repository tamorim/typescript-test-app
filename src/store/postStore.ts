import { createStore, compose } from 'redux';
import rootReducer from '../reducers/reducers';

const finalCreateStore = compose(
  window['devToolsExtension'] ? window['devToolsExtension']() : f => f
)(createStore);

export default function postStore(initialState?: any): Redux.Store {
  const store = finalCreateStore(rootReducer, initialState);

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers').default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
};
