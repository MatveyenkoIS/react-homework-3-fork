import { useCounter } from "../hooks/use-counter";
import styles from "./counter.module.css";

export const CounterWithHook = () => {
    const {count, increment, decrement, reset } = useCounter();

    return (
        <div className={styles.counterContainer}>
            <button className={styles.counterBtn} onClick={decrement}>-</button>
            <span className={styles.countSpan} >{count}</span>
            <button className={styles.counterBtn} onClick={increment}>+</button>
            <button className={styles.resetBtn} onClick={reset}>Сброс (хук)</button>
        </div>
    );
}