import { useEffect, useState } from "react";
import typeStyles from "./styles";

export default function Panel() {
  const [alertData, setAlertData] = useState({});

  useEffect(() => {
    window.__proto__.panel = function (data) {
      setAlertData(data);
    };
  }, []);

  if (alertData?.status === true)
    return (
      <div id="panel">
        {alertData?.status === true && <Alert data={alertData} />}
      </div>
    );
  else return <></>;
}

function Modal() {
  return <></>;
}

function Alert({ data }) {
  return (
    <>
      {Object.keys(typeStyles).map((type, i) => {
        if (type === data.type) {
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
                  className={data.icon}
                ></i>
              </div>
              <div className="text-area">
                <p style={{ color: styles.title }} className="title">
                  {data.title}
                </p>
                <p className="details" style={{ color: styles.message }}>
                  {data.details}
                </p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
