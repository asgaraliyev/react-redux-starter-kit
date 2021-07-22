import {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../redux/index';
function ModalPanel({ children, body,id }) {
  const MyBody = body;
  const [modal,setModal]=useState({})
  const state = useSelector((state) => state.modal);
  useEffect(() => {
    const modal=state.find((item)=>item?.id===id)
    setModal(modal)
  }, [state])
  return (
    <>
      {modal?.active && (
        <div id="modal-panel">
          <div className="body">{MyBody && <MyBody />}</div>
        </div>
      )}
      {children}
    </>
  );
}
ModalPanel.__proto__.close = function (id) {
  store.dispatch({ type: 'deactive' ,id});
};
ModalPanel.__proto__.open =  function (id) {
  store.dispatch({ type: 'active' ,id});
};
export default ModalPanel;
