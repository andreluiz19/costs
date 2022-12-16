import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

function LinkButton(props) {

    const {to, text} = props;

    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    );
}

export default LinkButton;