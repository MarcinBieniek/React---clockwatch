import styles from './Button.module.scss';

const ButtonStop = props => {

    return (
        <button className={styles.button} onClick={() => props.stop()}>{props.children}</button>
    )

}

export default ButtonStop;