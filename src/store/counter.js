/* import { createStore } from 'redux'; */
import { createSlice } from '@reduxjs/toolkit';


const initialCounterState = {counterr:0, showCounter: true }


const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state){
            state.counterr++;
        },
        decrement(state){
            state.counterr--;
        },
        increase(state,action){
            state.counterr =state.counterr + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }

    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

/* const counterReducer = (state = initialState , action) => {

if (action.type === 'increment'){
    return{
        counter: state.counter + 1,
        showCounter: state.showCounter
    };
}

if (action.type === 'decrement'){
    return{
        counter: state.counter - 1,
        showCounter: state.showCounter
    };
}

if (action.type === 'increase'){
    return{
        counter: state.counter + action.amount,
        showCounter: state.showCounter
    };
}

if (action.type === 'toggle'){
    return{

        showCounter: !state.showCounter,
        counter: state.counter
    };
}

    return state;
}

const store = createStore(counterReducer) */

/* const store = configureStore({
    reducer: counterSlice.reducer
})
 */