import { useEffect, useState } from 'react';

export default function Login() {
  const [modal, setModal] = useState(null);
  const [modal2, setModal2] = useState(null);
  useEffect(()=>{
    const myModal = new window.ModalPanel({ component: MyComponent1 });
    setModal(myModal)
  },[])
  useEffect(()=>{
    const myModal2 = new window.ModalPanel({ component: MyComponent2 });
    setModal2(myModal2)
  },[])
  return (
    <div id="login">
      <button onClick={() => {
          modal.open()
      }}>1Ac</button>
      <button
        onClick={() => {
          modal.close();
        }}
      >
        1Bagla
      </button>
      <button onClick={() => {
          modal2.open()
      }}>2Ac</button>
      <button
        onClick={() => {
          modal2.close();
        }}
      >
        2Bagla
      </button>
      <h1>Login</h1>
    </div>
  );
}

function MyComponent1() {
  return <h1>Salam Aleykum1 </h1>;
}
function MyComponent2() {
    return <h1>Salam Aleykum2 </h1>;
  }
  