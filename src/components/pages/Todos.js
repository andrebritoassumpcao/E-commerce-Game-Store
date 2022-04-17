import styles from "./Home.module.css";
import CardHome from "../layout/CardHome";

function Todos() {
  const products = require("../../products.json");
  return (
    <section>
      <div className={styles.destaques}>
        <h1>Destaques</h1>
        <div className={styles.grid}>
          {products.map((x) => (
            <CardHome key={x.id} game={x} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Todos;
