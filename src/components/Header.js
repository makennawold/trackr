import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showTaskEditorButton }) => {
  //destructuring props, makes it so we dont have to do props.

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showTaskEditorButton ? "red" : "green"}
        text={showTaskEditorButton ? "close" : "add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "trackr",
};

Header.propTypes = {
  title: PropTypes.string,
};
// can do .isRequired and make sure that prop is being passed down, whch will only error if you don't have a default props

export default Header;
