import DIV_ACTION from '../actions/div';

var initialState = 0;
export const divReducer = (state = initialState, action) => {
    switch(action.type) {
        case DIV_ACTION.INITVALUE_DIV:
            return state + 100;
        case DIV_ACTION.DIVFOR2:
            return state / action.val;
        case DIV_ACTION.DIVFOR4:
            return state / action.val;
        case DIV_ACTION.DIVWITHVALUE:
            return state / action.val;
        default:
            return state;
    }
}