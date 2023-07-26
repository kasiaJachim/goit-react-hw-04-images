import css from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ getMoreImages }) => {
  return (
    <div className={css.btn}>
      <button className={css.button} onClick={getMoreImages}>
        Load more
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
  getMoreImages: PropTypes.func.isRequired,
};
