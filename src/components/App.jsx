import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import axios from 'axios';
import css from './app.module.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchImage = () => {
      if (!query) {
        return;
      }
      const perPage = 12;
      const url = `https://pixabay.com/api/?key=36728050-69418dd1094caf8b20b02b737&q=${encodeURIComponent(
        query
      )}&page=${page}&&orientation=horizontal&per_page=${perPage}`;
      setLoading(true);
      axios.get(url).then(response => {
        const totalPages = Math.round(response.data.totalHits / perPage);
        const loadedImages = response.data.hits;
        setTotalPages(totalPages);
        setImage(prevImage => [...prevImage, ...loadedImages]);
        setLoading(false);
      });
    };
    fetchImage();
  }, [query, page]);

  const handleSearch = searchValue => {
    if (searchValue !== '') {
      if (searchValue !== query) {
        setQuery(searchValue);
        setPage(1);
        setImage([]);
      } else {
        setQuery(searchValue);
      }
    }
  };

  const handleClick = largeImageUrl => {
    setLargeImageUrl(largeImageUrl);
    setModalOpen(true);
  };

  const handleClickCloseModal = e => {
    if (e.target.id === 'modal' && modalOpen) {
      setModalOpen(false);
    }
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const getMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} onOpenModal={handleClick} />
      )}
      {modalOpen && (
        <Modal
          largeImageUrl={largeImageUrl}
          onClose={handleModalClose}
          onClickClose={handleClickCloseModal}
        />
      )}
      {totalPages > 1 && page < totalPages && (
        <Button getMoreImages={getMoreImages} />
      )}
    </div>
  );
};

export default App;
