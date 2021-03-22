

const CounterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1

        default:
            throw Error
    }
}

export default CounterReducer