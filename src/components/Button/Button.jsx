import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ onClick, disabled }) => {
  return (
    <button className={styles.Button} disabled={disabled} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
