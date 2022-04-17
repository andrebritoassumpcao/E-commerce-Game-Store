import React from "react";
import { Link } from "react-router-dom";
import cart from "../../img/shopping-cart.png";
import styles from "../pages/Home.module.css";

function CardHome(props) {
  var game = props.game;
  const imageString = require("../../img/" + game.image);

  var linkString = "./game/" + game.id;
  return (
    <div className={styles.box}>
      <img src={imageString} alt={game.name} />
      <p>{game.name}</p>
      <div className={styles.btn_pay}>
        <img src={cart} alt="Comprar" />
        <Link to={linkString}>
          <p>R$:{game.price}</p>
        </Link>
      </div>
    </div>
  );
}
export default CardHome;
