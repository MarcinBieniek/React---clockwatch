import styles from './TimeCounter.module.scss';

const TimeCounter = ({time}) => {
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    let milliseconds = ("0" + ((time / 10) % 100)).slice(-2);
    

    return (
        <div className={styles.timeCounter}>
            <div><h1>{hours}:{minutes}:{seconds}:{milliseconds}</h1></div>
        </div>
    );

}

export default TimeCounter;