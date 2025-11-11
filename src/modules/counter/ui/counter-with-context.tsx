import { useCounterContext } from "../hooks/use-counter-context";
import styles from "./counter.module.css";

export const CounterWithContext = () => {
    const {count, increment, decrement, reset } = useCounterContext();

    return (
        <div className={styles.counterContainer}>
            <button className={styles.counterBtn} onClick={decrement}>-</button>
            <span className={styles.countSpan} >{count}</span>
            <button className={styles.counterBtn} onClick={increment}>+</button>
            <button className={styles.resetBtn} onClick={reset}>Сбросить (контекст)</button>
        </div>
    );
};