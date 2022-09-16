import logo from "../../assets/img/logo.svg";
import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta - FAO</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/filipe-alves-oliveira"> Filipe Alves</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
