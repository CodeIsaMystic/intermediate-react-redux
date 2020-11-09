/** set the theme function 
 * with the state default setting
 * 
 * => really testable => dependant
 * 
 * as pure function => make sure to return something 
 */
export default function theme(state = "darkblue", action) {
  if (action.type === 'CHANGE_THEME') {
    return action.payload;
  } else {
    return state;
  }
}