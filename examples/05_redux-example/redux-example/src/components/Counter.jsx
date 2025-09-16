import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../features/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    );
}