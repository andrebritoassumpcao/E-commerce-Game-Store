import { Link } from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'

import logo from '../../img/logo.png'
import world from '../../img/world.png'
import swords from '../../img/swords.png'
import adventure from '../../img/adventure.png'
import football from '../../img/football.png'
import chess from '../../img/chess.png'
import price from '../../img/price-tag.png'
import cart from '../../img/shopping-cart.png'
import conversa from '../../img/conversation.png'
import usuario from '../../img/user.png'

function Navbar() {
  return (
    <nav className={styles.navbar}>
     <Container>
       <Link to="/">
         <img className={styles.logo} src={logo} alt="Game Store" />
       </Link>
       <div className={styles.fale_conosco}>
         <img src={conversa} alt="Conversa"/>
       <h2>Fale conosco</h2>
       </div>
       <div className={styles.bem_vindo}>
       <img src={usuario} alt="Usuario"/>
       <h2>Bem-vindo(a)</h2>
       </div>
       <div className={styles.cart}>
         <Link to="/carrinho">
       <img src={cart} alt="Carrinho"/>
       </Link>
       </div>
     
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/todos"><img className={styles.todos} src={world} alt='todos' /> Todos</Link>
            
          </li>
          <li className={styles.item}>
            <Link to="/acao"><img className={styles.acao} src={swords} alt='acao' />Ação</Link>
          </li>
          <li className={styles.item}>
            <Link to="/aventura"><img className={styles.aventura} src={adventure} alt='aventura' />Aventura</Link>
          </li>
          <li className={styles.item}>
            <Link to="/esportes"><img className={styles.esportes} src={football} alt='esportes' />Esportes</Link>
          </li>
          <li className={styles.item}>
            <Link to="/estrategia"><img className={styles.estrategia} src={chess} alt='estrategia' />Estratégia</Link>
          </li>
          <li className={styles.item}>
            <Link to="/ofertas"><img className={styles.ofertas} src={price} alt='ofertas' />Ofertas</Link>
          </li>
        </ul>
        
     </Container>
    </nav>
  )
}

export default Navbar