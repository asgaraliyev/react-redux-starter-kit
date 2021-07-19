const initialState = {
  status: true,
  type: 'warning',
  icon: 'fa-clipboard-check',
  title: 'You successfully send this message',
  details: 'aksjd ansdas aksjd ',
  seconds: 3,
  close: true,
};
const AlertReducer = (state = initialState, action) => {
  return initialState;
};
export default AlertReducer;
