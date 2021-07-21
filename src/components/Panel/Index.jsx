import {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import typeStyles from "./styles";

export default function Panel() {
  const alertPanelRef = createRef();

  const [alertData, setAlertData] = useState({});
  useEffect(() => {
    console.log('inside useeffect')
    window.__proto__.panel = function ({
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
      });
      setTimeout(function () {
        if (alertData?.status === true) setAlertData({});
      }, seconds * 1000);
    };
  }, [alertData?.status]);

  if (alertData?.status === true) {
    console.log("inside if")
    return (
      <div id="panel">
        {alertData?.status && <Alert data={alertData} ref={alertPanelRef} />}
      </div>
    );
  } else return <></>;
}

function Modal() {
  return <></>;
}

const Alert = forwardRef(({ data }, ref) => {
  const alertRef = useRef();

  useImperativeHandle(ref, () => {
    setTimeout(() => {
      console.log("second set time out");
      alertRef.current.style.animation = "close 1s linear";
    }, 3000);
  });

  return (
    <>
      {Object.keys(typeStyles).map((type, i) => {
        if (type === data.type) {
          const styles = typeStyles[type];
          console.log(styles);
          return (
            <div
              ref={alertRef}
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
                {data.details && (
                  <p className="details" style={{ color: styles.message }}>
                    {data.details}
                  </p>
                )}
              </div>
            </div>
          );
        }
      })}
    </>
  );
});
