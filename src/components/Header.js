import PropTypes from "prop-types";

const Header = ({ title }) => {
  //destructuring props, makes it so we dont have to do props.
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "trackr",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
