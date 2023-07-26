import css from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onImgClick }) => {
  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryImg}
        src={image.webformatURL}
        alt={image.tags}
        data-largeimg={image.largeImageURL}
        onClick={e => {
          onImgClick(e.target.dataset.largeimg);
        }}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
