import { Link } from 'react-router-dom'
import styles from './LinkPay.module.css'

function LinkPay ({to, text}) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkPay