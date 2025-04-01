import {createStore} from "redux"

const INITIAL_VALUE = {
    counter : 0,
    privacy : false
}

const reducer = (store = INITIAL_VALUE , action) => {

    // console.log("Action perform", action)

    if(action.type === "INCREMENT")
    {
        return {...store, counter : store.counter + 1};
    }

    else if(action.type === "DECREMENT")
    {
        return {...store, counter : store.counter-1};
    }

    else if(action.type === "ADDITION")
    {
        return {...store, counter : store.counter + action.payload.value};
    }

    else if(action.type === "PRIVACY_TOGGLE")
    {
        return {...store, privacy : !store.privacy};
    }

    return store;
}

const counterStore = createStore(reducer);

export default counterStore;