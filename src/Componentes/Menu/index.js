import styles from "./Menu.module.scss";
import home from "./home-ativo.png";
import curtidas from "./mais-curtidas-inativo.png";
import vistas from "./mais-vistas-inativo.png";
import novas from "./novas-inativo.png";
import surpreendame from "./surpreenda-me-inativo.png";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={home} alt="Imagem"></img>
          <a href="/">Início</a>
        </li>
        <li>
          <img src={curtidas} alt="Imagem"></img>
          <a href="/">Mais curtidas</a>
        </li>
        <li>
          <img src={vistas} alt="Imagem"></img>
          <a href="/">Mais vistas</a>
        </li>
        <li>
          <img src={novas} alt="Imagem"></img>
          <a href="/">Novas</a>
        </li>
        <li>
          <img src={surpreendame} alt="Imagem"></img>
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
