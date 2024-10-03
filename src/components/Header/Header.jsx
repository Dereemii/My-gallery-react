
import PropTypes from 'prop-types';

/**
 * Returns header that displays a <h1> tag
 * @param {string} props.text - h1 text
 * @returns {JSX.Element} - The JSX for the header component 
 */
const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header