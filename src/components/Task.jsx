import PropTypes from "prop-types";
import "../styles/Task.css";

export function TaskCard(props) {
  return (
    <div className="card">
      <h1 style={{ fontWeight: "lighter" }}>Mi primera tarea</h1>
      <p className={props.ready === true ? "bg-green" : "bg-red"}>
        {props.ready === true
          ? "La tarea ha sido realizada"
          : "Tarea pendiente"}
      </p>
    </div>
  );
}

TaskCard.propTypes = {
  ready: PropTypes.bool,
};

TaskCard.defaultProps = {
  ready: false,
};
