import PropTypes from "prop-types";
import "./Button.scss";

function Button({ onClick, children, lang = "en", type = "button" }) {
  const className = `btn ${lang === "jp" ? "jp" : "en"}`;

  return (
    <div className={className} onClick={onClick} type={type}>
      {children}
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  lang: PropTypes.oneOf(["en", "jp"]),
  type: PropTypes.string,
};

export default Button;
