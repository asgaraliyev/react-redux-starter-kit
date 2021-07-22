import { useEffect, useState } from 'react';
import ModalPanel from '../components/Panel/ModalPanel';
export default function Login() {
  return (
    <div id="login">
      <ModalPanel body={ModalComp} id="1">
        <button onClick={()=>{
          ModalPanel.open("1")
        }}>First me</button>
      </ModalPanel>
      <ModalPanel body={ModalComp2} id="2">
        <button onClick={()=>{
          ModalPanel.open("2")
        }}>Second me</button>
      </ModalPanel>
      <h1>Login</h1>
    </div>
  );
}

function ModalComp() {
  return (
    <>
      <header> First Modal</header>
      <button
        onClick={() => {
          ModalPanel.close("1");
        }}
      >
        Close First Modal
      </button>
      <button onClick={()=>{
        ModalPanel.close("1")
      }}>I am 100% sure pls close</button>
    </>
  );
}

function ModalComp2() {
  return (
    <>
      <header> Second Modal</header>
      <button
        onClick={() => {
          ModalPanel.close("2");
        }}
      >
        Close Second Modal
      </button>
      <button onClick={()=>{
        ModalPanel.close("2")
      }}>I am 100% sure pls close</button>
    </>
  );
}
