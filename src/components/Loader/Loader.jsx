import css from './loader.module.css';

const Loader = () => {
  return (
    <div className={css.containerStyle}>
      <div className={css.spinnerStyle} />
      <span style={{ marginLeft: '8px' }}>Loading...</span>
    </div>
  );
};
export default Loader;
