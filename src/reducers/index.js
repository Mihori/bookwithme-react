import * as redux from 'redux';

export const init = () => {
  const reducer = redux.combineReducers({

  });

  const store = redux.createStore(reducer);

  return store;
}