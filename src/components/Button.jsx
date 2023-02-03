import PropTypes from "prop-types";

export function Button({ text, user }) {
  return (
    <button
      onClick={function () {
        console.log("Hola " + user);
      }}
    >
      {text} - {user}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string,
};

Button.defaultProps = {
  text: "Mi Botón",
  user: "User",
};
