import logo from '../crisp-logo.svg';
import './header.css';

function Header() {
  return (
    <header className="TopBar">
      <img src={logo} className="CrispLogo" alt="Crisp Tools" />
    </header>
  );
}

export default Header;