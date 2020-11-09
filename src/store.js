import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  /** if we're in the browser and redux dev tools exist
   *   ==> use it 
   *   ==> if not use this bug's function
   * ( useful also for Saga or Thunks )
  **/
  typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);



export default store;