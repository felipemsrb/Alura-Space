import styles from "./Tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    </div>
  );
};

export default Tags;
