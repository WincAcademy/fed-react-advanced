import { makeAutoObservable } from 'mobx'

class CounterStore {
    value = 0

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.value += 1;
    }

    decrement() {
        this.value -= 1;
    }
}

const counterStore = new CounterStore();
export default counterStore;