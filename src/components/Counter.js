import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const disptach = useDispatch();
 const counter = useSelector(state => state.counter.counterr);
 const show = useSelector(state => state.counter.showCounter);

 const incrementHndler = () => {
  disptach(counterActions.increment())
 }

const increaseHandler = () => {
  disptach(counterActions.increase(10))
}

 const decrementHndler = () => {
  disptach(counterActions.decrement())
 }

  const toggleCounterHandler = () => {
    disptach(counterActions.toggleCounter())
  };

/*  const incrementHndler = () => {
  disptach({type: 'increment'})
 }

const increaseHandler = () => {
  disptach({type: 'increase' , amount:10 })
}

 const decrementHndler = () => {
  disptach({type: 'decrement'})
 }

  const toggleCounterHandler = () => {
    disptach({type: 'toggle'})
  }; */

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHndler}>+</button>
      <button onClick={increaseHandler}>increase 10</button>
      <button onClick={decrementHndler}>-</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
