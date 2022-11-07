import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./Fotos.json";

import Cards from "./Cards";
import { useState } from "react";

const Galeria = () => {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    });

    setItens(novasFotos);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags filtraFotos={filtraFotos} tags={tags} />
      <Cards item={itens} styles={styles} />
    </section>
  );
};

export default Galeria;
