import { useEffect, useState } from "react";
import typeStyles from "./styles";

const AlertPanel = () => {
  const [alertData, setAlertData] = useState({});

  useEffect(() => {
    window.__proto__.alertPanel = function ({
      status = true,
      type = "info",
      icon = "fa fa-info-circle",
      title,
      details = null,
      seconds = 3,
    }) {
      setAlertData({
        title,
        details,
        type,
        icon,
        status,
        seconds,
      });
    };
  }, []);

  useEffect(() => {
    if (alertData?.status === true) {
      setTimeout(function () {
        setAlertData({});
      }, alertData.seconds * 1000);
    }
  }, [alertData.seconds, alertData?.status]);

  const endSec = alertData.seconds * 1000;

  useEffect(() => {
    if (alertData.status === true) {
      const alertEl = document.querySelector("#panel #alert");
      console.log(alertEl);
      setTimeout(function () {
        alertEl.classList.add("animation-end");
      }, endSec - 500);

      setTimeout(function () {
        alertEl.classList.remove("animation-end");
      }, endSec - 100);
    }
  }, [alertData.status, endSec]);

  if (alertData?.status === true) {
    return (
      <div id="panel">
        {alertData?.status
          ? Object.keys(typeStyles).map((type, i) => {
              if (type === alertData.type) {
                const styles = typeStyles[type];
                return (
                  <div
                    id="alert"
                    className="alert-panel"
                    key={i}
                    style={{
                      backgroundColor: styles.background,
                    }}
                  >
                    <div className="icon-area">
                      <i
                        style={{ color: styles.iconColor }}
                        className={alertData.icon}
                      ></i>
                    </div>
                    <div className="text-area">
                      <p style={{ color: styles.title }} className="title">
                        {alertData.title}
                      </p>
                      {alertData.details && (
                        <p
                          className="details"
                          style={{ color: styles.message }}
                        >
                          {alertData.details}
                        </p>
                      )}
                    </div>
                  </div>
                );
              }
            })
          : null}
      </div>
    );
  } else return <></>;
};
export default AlertPanel;
