import { observer } from 'mobx-react-lite'
import counterStore from '../counterStore'

const Counter = () => {
    return (
        <>
            <h2>Count: {counterStore.value}</h2>
            <button onClick={() => counterStore.increment()}>+</button>
            <button onClick={() => counterStore.decrement()}>-</button>
        </>
    )
}

export default observer(Counter);