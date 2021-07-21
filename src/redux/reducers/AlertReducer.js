const initialState = {
  status: false,
  type: "",
  icon: "",
  title: "",
  details: "",
  seconds: 0,
  close: true,
};
const AlertReducer = (state = initialState, action) => {
  if (action.type === "active") {
    const {status, type, icon, title, details} = action.data;
    return {
      ...state,
      status: status,
      type: type,
      icon: icon,
      title: title,
      details: details,
    };
  }else {
    throw new Error(`Unsupported action type ${action.type}`)
  }
};
export default AlertReducer;
