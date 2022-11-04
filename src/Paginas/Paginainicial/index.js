import styles from "./PaginaInicial.module.scss";
import Cabecalho from "../../Componentes/Cabecalho";
import Menu from "../../Componentes/Menu";
import banner from "../banner.png";
import Rodape from "../../Componentes/Rodape";
import Galeria from "../../Componentes/Galeria";

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho />;
      <main className={styles.main}>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1 className={styles.h1}>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Imagem da terra vista do espaço"></img>
          </div>
        </section>
      </main>
      <div className={styles.galeria}>
        <Galeria />
      </div>
      <Rodape />
    </>
  );
};

export default PaginaInicial;
