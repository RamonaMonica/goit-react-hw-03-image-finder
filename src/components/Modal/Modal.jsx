import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  handleCloseClick = event => {
    if (event.target.tagName !== 'IMG') {
      this.props.onClose();
    }
  };

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleCloseClick}>
        <div className={styles.Modal}>
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
