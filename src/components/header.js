import logo from '../crisp-logo-white.svg';
import style from './header.module.css';

function Header() {
  return (
    <header className={style.TopBar}>
      <section className={style.TopBarContainer}>
        <img src={logo} className={style.CrispLogo} alt="Crisp Tools" />
      </section>
    </header>
  );
}

export default Header;