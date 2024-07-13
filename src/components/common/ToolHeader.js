import styles from './ToolHeader.module.css';

function ToolHeader (props) {
  return (
    <section className={styles.ToolHeader}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </section>
  );
}

export default ToolHeader;