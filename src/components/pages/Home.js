import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import { Link } from 'react-router-dom'


import banner from '../../img/banner jogo.jpg'
import frete from '../../img/frete.png'
import callofduty from '../../img/call-of-duty-infinite-warfare.png'
import cart from '../../img/shopping-cart.png'

function Home() {
  return(
    <section className={styles.home_container}>
      <div>
       <img src={banner} alt="Banner" />
       <LinkButton to="./" text="Disponível" />
      </div>
      <div className={styles.faixa}>
      <img src={frete} alt="Frete" />
     <h1>FRETE <span>GRÁTIS</span> PARA TODO BRASIL
 EM  COMPRAS ACIMA DE <span>R$:199,99</span></h1> 
     </div>
     <div className={styles.destaques}>
       <h1>Destaques</h1>
       <div className={styles.grid}>
         <div className={styles.box}>
           <img src={callofduty} alt="Call Of Duty" />
           <p>Call Of Duty®: Infinite Warfare</p>
           <div className={styles.btn_pay}>
           <img src={cart} alt='Comprar' />
           <Link to="/">
            <p>R$:199</p>
           </Link>
           </div>
         </div>
         <div className={styles.box}>
           <img src={callofduty} alt="Call Of Duty" />
           <p>Call Of Duty®: Infinite Warfare</p>
           <div className={styles.btn_pay}>
           <img src={cart} alt='Comprar' />
           <Link to="/">
            <p>R$:199</p>
           </Link>
           </div>
         </div>
         <div className={styles.box}>
           <img src={callofduty} alt="Call Of Duty" />
           <p>Call Of Duty®: Infinite Warfare</p>
           <div className={styles.btn_pay}>
           <img src={cart} alt='Comprar' />
           <Link to="/">
            <p>R$:199</p>
           </Link>
           </div>
         </div>
         
       </div>
     </div>
    </section>
    
  )
}

export default Home