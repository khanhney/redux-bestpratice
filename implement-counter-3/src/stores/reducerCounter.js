import CounterAction from '../actions/counter';

var initialState = 0;
export const counterReducer  = (state = initialState, action) => {
    switch (action.type) {
        case CounterAction.INCREMENT:
            return state + 1;
        case CounterAction.DECREMENT :
            return state - 1;
        case CounterAction.INCREMENT_OTHERVALUE_6 :
            return state + action.value;
        case CounterAction.DECREMENT_OTHERVALUE_4 :
            return state - action.value;
        case CounterAction.CHANGE_VALUE_WITH_INPUT :
            return state + action.value;
        default:
            return state;
    }
};