/** set the location function 
 * with the state default setting
 * 
 * => really testable => dependant
 * 
 * as pure function => make sure to return something 
 */
export default function location(state = "Seattle, WA", action) {
  if (action.type === 'CHANGE_LOCATION') {
    return action.payload;
  } else {
    return state;
  }
}