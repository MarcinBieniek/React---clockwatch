import styles from './Button.module.scss';

const ButtonStart = props => {

    return (
        <button className={styles.button} onClick={() => props.start()} >{props.children}</button>
    )

}

export default ButtonStart;