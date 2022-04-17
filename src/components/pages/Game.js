import React from "react";
import { useParams } from "react-router-dom";
import card from "../../img/credit-card.png";
import styles from "./Game.module.css";

function Game() {
  const products = require("../../products.json");
  const { id } = useParams();
  const idInt = Number.parseInt(id);
  const exist = products.find((x) => x.id === idInt);
  const imageString = require("../../img/" + exist.image);

  return (
    <section className={styles.sectionGame}>
      <img src={imageString} alt="teste" />
      <div className={styles.pagamento}>
        <h2>{exist.name}</h2>
        <hr />
        <br />
        <h1>R$:{exist.price}</h1>
        <h2> no PIX/Boleto</h2>
        <p>R$:{exist.price}</p>
        <br />
        <p>
          até <span>8x</span> de <span>R${exist.price / 8}</span>
        </p>
        <img src={card} alt="Cartão" />
        <u>Mais formas de pagamento</u>
        <br />
        <button>Add to card</button>
      </div>
    </section>
  );
}

export default Game;
