import "./Cabecalho.css";
import search from "./search.png";
import logo from "./logo.png";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Logo do site"></img>
      <div className="cabecalho__container">
        <input placeholder="O que você procura?"></input>
        <img src={search} alt="Imagem da lupa para pesquisa"></img>
      </div>
    </header>
  );
};

export default Cabecalho;
