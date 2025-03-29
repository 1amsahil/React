import {createStore} from "redux"

const INITIAL_VALUE = {
    counter : 0,
}

const reducer = (store = INITIAL_VALUE , action) => {

    // console.log("Action perform", action)

    if(action.type === "INCREMENT")
    {
        return {counter : store.counter + 1};
    }

    else if(action.type === "DECREMENT")
    {
        return {counter : store.counter-1};
    }

    else if(action.type === "ADDITION")
    {
        return {counter : store.counter + action.payload.value};
    }

    return store;
}

const counterStore = createStore(reducer);

export default counterStore;