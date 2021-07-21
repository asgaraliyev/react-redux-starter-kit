import { useEffect, useState } from 'react';
let count = 0;
export default function ModalPanel() {
  const [runned, setRunned] = useState(false);
  const [isActive, setIsActive] = useState(false);
  let Component;
  function toggleRunned() {
    setRunned(!runned);
  }
  useEffect(() => {
    const modalPromise = function ({ component, leftBtn, rightBtn, title }) {
      const mainPromise = new Promise((resovle, reject) => {});

      mainPromise.__proto__.open = function () {
        window.myModalComponent = component;
        setIsActive(true);
        toggleRunned();
      };
      mainPromise.__proto__.close = function () {
        toggleRunned();
        window.myModalComponent = undefined;
        setIsActive(false);
      };
      return mainPromise;
    };
    window.__proto__.ModalPanel = modalPromise;
  }, [runned]);
  Component = window.myModalComponent;
  return <div id="salam">{isActive && <Component />}</div>;
}
