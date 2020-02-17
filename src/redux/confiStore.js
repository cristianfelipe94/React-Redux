import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configStore(initialStore) {
    // This allow DevTools for Redux.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialStore,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}
