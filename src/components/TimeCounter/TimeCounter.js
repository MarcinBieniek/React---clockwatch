import styles from './TimeCounter.module.scss';

const TimeCounter = ({start}) => {

    return (
        <div className={styles.timeCounter}>
            <span>00</span>    
            :<span>00</span>
            :<span>00</span>
            .<span>0</span>
        </div>
    )

}

export default TimeCounter;