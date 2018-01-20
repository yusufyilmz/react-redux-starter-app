
import { createStore, applyMiddleware } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import rootReducer from 'reducers';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore() {
    
    const persistedState = localStorage.getItem('app-redux-state')
    ? JSON.parse(localStorage.getItem('app-redux-state'))
    : {}
    
    const store = createStoreWithMiddleware(rootReducer, persistedState);

    store.subscribe(() => {
        localStorage.setItem('chart-redux-state', JSON.stringify(store.getState()))
    })


    // store.dispatch(getAllProducts())


    //    if (module.hot) {
    //      module.hot.accept('../reducers', () => {
    //        store.replaceReducer(rootReducer);
    //      });
    //    }

    return store;
}