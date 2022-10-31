import styles from "./Cabecalho.module.scss";
import search from "./search.png";
import logo from "./logo.png";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo do site"></img>
      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          placeholder="O que você procura?"
        ></input>
        <img src={search} alt="Imagem da lupa para pesquisa"></img>
      </div>
    </header>
  );
};

export default Cabecalho;
