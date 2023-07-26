import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image, index) => (
        <ImageGalleryItem key={index} image={image} onImgClick={onOpenModal} />
      ))}
    </ul>
  );
};
export default ImageGallery;
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
