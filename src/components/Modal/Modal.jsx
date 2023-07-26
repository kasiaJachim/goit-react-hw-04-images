import { useEffect } from 'react';
import css from './modal.module.css';
import PropTypes from 'prop-types';

const Modal = props => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.keyCode === 27) {
        props.onClose();
      }
    };

    document.removeEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [props]);

  return (
    <div id="modal" onClick={props.onClickClose} className={css.overlay}>
      <div className={css.modal}>
        <img src={props.largeImageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func,
  largeImageUrl: PropTypes.string.isRequired,
};
