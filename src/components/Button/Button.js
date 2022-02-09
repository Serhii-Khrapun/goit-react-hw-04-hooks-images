import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={styles.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
export default Button;
