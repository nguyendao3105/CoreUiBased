import danhhieuReducer from "./danhhieu";
import requestsReducer from "./requests";
import usersReducer from "./users";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
  danhhieu: danhhieuReducer,
  requests: requestsReducer,
});

export default rootReducer;
