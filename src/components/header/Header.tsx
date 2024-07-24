import LogoImg from './logo.png';
import st from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={st.header}>
      <Link to="/">
        <img src={LogoImg} alt="logo" />
        <h2>Haker news</h2>
      </Link>
    </header>
  );
};

export default Header;
