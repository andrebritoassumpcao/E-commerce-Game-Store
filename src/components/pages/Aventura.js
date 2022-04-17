import React from "react";
import styles from "./Home.module.css";
import CardHome from "../layout/CardHome";

function Aventura() {
  const products = require("../../products.json");

  return (
    <section>
      <div className={styles.destaques}>
        <h1>Destaques</h1>
        <div className={styles.grid}>
          {products
            .filter((y) => y.aventura === true)
            .map((x) => (
              <CardHome key={x.id} game={x} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Aventura;
