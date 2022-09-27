/*
 * @Author: 小石头
 * @Date: 2022-09-26 17:26:56
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-26 17:34:35
 * @Description:
 */

import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import rootReducer from './rootReducer';

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(require("redux-logger").createLogger());
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
);

const store = createStore(rootReducer, enhancer)

export default store;
