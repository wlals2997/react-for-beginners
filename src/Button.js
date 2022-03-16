import styles from './Button.module.css'
import Proptypes from 'prop-types';
function Button({text}){
return <button className={styles.btn}>{text}</button>
}
Button.prototypes = {
    text: Proptypes.string.isRequired,
  };
export default Button;