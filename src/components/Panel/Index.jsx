import { useSelector } from 'react-redux';
import typeStyles from "./styles"
export default function Panel() {
  const alert = useSelector((state) => state.AlertReducer);
  //TODO:check modal status by or
  if (alert?.status === true) return <div id="panel">{alert?.status === true && <Alert data={alert} />}</div>;
  else return <></>;
}

function Modal() {
  return <></>;
}

function Alert({ data }) {
  console.log(data);
  return (
    <>
      {Object.keys(typeStyles).map((type, i) => {
        if (type === data.type) {
          const styles = typeStyles[type];
          console.log(styles)
          return (
            <div id="alert" className="alert-panel" key={i} style={{ boxShadow: `${styles.boxShadow} 0 0 10px`, backgroundColor: styles.background }}>
              <i style={{ color: styles.iconColor }} className={data.icon}></i>
              <p style={{ color: styles.title }} className="title">
                {data.title}
              </p>
              <p className="details" style={{ color: styles.message }}>
                {data.details}
              </p>
            </div>
          );
        }
      })}
    </>
  );
}
