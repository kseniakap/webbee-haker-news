import LoaderImg from './loaderImg.gif';
import st from './Loader.module.scss';

const Loader = () => {
  return <img className={st.loader} src={LoaderImg} alt="loader" />;
};

export default Loader;
