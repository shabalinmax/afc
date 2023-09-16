import {useState} from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={classes.Counter} onClick={() => setCount(prevState => prevState + 1)}>
            {count}
        </div>
    );
};

