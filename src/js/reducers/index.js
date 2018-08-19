import { combineReducers } from "redux"
// import 'bootstrap/dist/css/bootstrap.min.css';

import tweets from "./tweetsReducer"
import user from "./userReducer"

export default combineReducers({
  tweets,
  user,
})
