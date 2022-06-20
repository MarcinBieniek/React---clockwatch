import styles from './Button.module.scss';

const ButtonReset = props => {

    return (
        <button className={styles.button} onClick={() => props.reset()}>{props.children}</button>
    )

}

export default ButtonReset;