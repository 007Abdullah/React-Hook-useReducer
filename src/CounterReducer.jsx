const CounterReducer = (state, action) => {
    switch (action) {
        case "INCREMENT":
            return state + 1
        case "Decrement":
            if (state <= 0) {
                return state = 0
            }
            else {
                return state - 1
            }
        default:
            throw new Error();
    }
}
export default CounterReducer;