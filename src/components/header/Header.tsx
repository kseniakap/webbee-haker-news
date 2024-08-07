import LogoImg from './logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={LogoImg} alt="logo" />
        <h2>Haker news</h2>
      </div>
    </header>
  );
};

export default Header;
