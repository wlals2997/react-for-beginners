import styles from '../components/Main.module.css';
function Main({ rating, alt, title }) {
  return (
    <div className={styles.rating_container}>
      <img className={styles.img} src={rating} alt={alt} ></img>
      <span className={styles.title}>{title.length > 14 ? `${title.slice(0,14)}...` :{title} }</span>
    </div>
    
  );
}
export default Main;
