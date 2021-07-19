import { useSelector } from 'react-redux';
export default function Panel() {
  const alert = useSelector((state) => state.AlertReducer);
  //TODO:check modal status by or
  if (alert?.status === true)
    return (
      <div id="panel" className={`${alert.status === true ? 'alert-panel' : 'modal-panel'}`}>
        {alert?.status === true && <Alert data={alert} />}
      </div>
    );
  else return <></>;
}

function Modal() {
  return <></>;
}

function Alert({ data }) {
  const { type } = data;

  const typeStyles = {
    success: {
      title: 'white',
      message: 'white',
      boxShadow: 'greeen',
      background: 'green',
      iconColor: 'green',
    },
    primary: {
      title: 'white',
      message: 'white',
      boxShadow: 'blue',
      background: 'blue',
      iconColor: 'blue',
    },
    info: {
      title: 'black',
      message: 'black',
      boxShadow: 'light-blue',
      background: 'light-blue',
      iconColor: 'light-blue',
    },
    danger: {
      title: 'white',
      message: 'white',
      boxShadow: 'red',
      background: 'red',
      iconColor: 'red',
    },
    warning: {
      title: 'black',
      message: 'black',
      boxShadow: 'yellow',
      background: 'yellow',
      iconColor: 'yellow',
    },
  };

  return (
    <>
      {Object.keys(typeStyles).map((type,i) => {
        if (type === data.type) {
          const styles = typeStyles[type];
          console.log(styles);
          return (
            <div id="alert" key={i} style={{boxShadow: styles.boxShadow}}>
              <i style={{ color: styles.iconColor }} className="fa fa-check"></i>
              <p style={{ color: styles.title }} className="title">
                {data.title}
              </p>
              <p className="details">{data.details}</p>
            </div>
          );
        }
      })}
    </>
  );
}
