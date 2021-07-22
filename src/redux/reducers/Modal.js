const initialState = [];
const ModalReducer = (state = initialState, action) => {
  const copy = [...state];
  close: if (action.type === 'active') {
    let item = { active: true, id: action.id };
    const index = copy.findIndex(() => item.id);
    if (index !== -1) break close;
    copy.push(item)
    return copy;
  } else if (action.type === 'deactive') {
    let item = { active: false, id: action.id };
    const index = copy.findIndex(() => item.id);
    if (index === -1) break close;
    console.log(index,"indexxx")
    copy.splice(index,1)
    return copy;
  }
  return state;
};
export default ModalReducer;
