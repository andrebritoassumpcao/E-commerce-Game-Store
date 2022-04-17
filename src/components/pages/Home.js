import styles from "./Home.module.css";
import LinkButton from "../layout/LinkButton";
import CardHome from "../layout/CardHome";

import banner from "../../img/banner jogo.jpg";
import frete from "../../img/frete.png";

function Home() {
  const products = require("../../products.json");
  return (
    <section className={styles.home_container}>
      <div>
        <img src={banner} alt="Banner" />
        <LinkButton to="./game/501" text="Disponível" />
      </div>
      <div className={styles.faixa}>
        <img src={frete} alt="Frete" />
        <h1>
          FRETE <span>GRÁTIS</span> PARA TODO BRASIL EM COMPRAS ACIMA DE{" "}
          <span>R$:199,99</span>
        </h1>
      </div>
      <div className={styles.destaques}>
        <h1>Destaques</h1>
        <div className={styles.grid}>
          {products
            .filter((y) => y.destaques === true)
            .map((x) => (
              <CardHome key={x.id} game={x} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
