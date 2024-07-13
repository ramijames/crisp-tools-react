import { Link } from 'react-router-dom';
import styles from './BackTo.module.css';

function BackTo (props) {
  return (
    <section className={styles.backBar}>
      <Link to={props.to} className={styles.backButton}>{props.children}</Link>
    </section>
  )
}

export default BackTo;