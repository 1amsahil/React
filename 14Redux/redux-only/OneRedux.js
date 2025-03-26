const redux = require('redux');

const INITIAL_VALUE = {
    counter : 0
};

// reducer
const reducer = (currStore = INITIAL_VALUE, action) => {

    let newStore = currStore;
    if(action.type === "INCREMENT")
    {
        newStore = {counter : currStore.counter+1 }
    }
    else if (action.type === "DECREMENT")
    {
        newStore = {counter : currStore.counter-1 }
    }
    else if (action.type === "ADDITION")
    {
        newStore = {counter : currStore.counter + action.payload.number }
    }
    return newStore;
}

const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "ADDITION", payload : {number : 7} });
store.dispatch({type : "DECREMENT"});