import { routeActions, syncHistory, routeReducer } from 'react-router-redux';
import {
  browserHistory,
  Router,
  Route,
  Link,
  Redirect,
  IndexRoute,
  IndexLink,
  IndexRedirect
} from 'react-router';

const moduleName = 'router';

const builtins = {
  Router,
  Route,
  Link,
  Redirect,
  IndexRoute,
  IndexLink,
  IndexRedirect
};

const middleware = syncHistory(browserHistory);
const getRouterState = (state) => state.get(moduleName).location;

export default {
  ...builtins,
  history: browserHistory,
  reducers: {
    [moduleName]: routeReducer
  },
  actions: {
    [moduleName]: routeActions
  },
  middleware,
  hook: (store) => {
    middleware.listenForReplays(store, getRouterState);
    return store;
  }
};
