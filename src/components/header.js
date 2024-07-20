import logo from '../crisp-logo-white.svg';
import style from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={style.TopBar}>
      <section className={style.TopBarContainer}>
        <Link to="/"><img src={logo} className={style.CrispLogo} alt="Crisp Tools" /></Link>
      </section>
    </header>
  );
}

export default Header;