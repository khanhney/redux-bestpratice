export default class CounterAction {
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static INCREMENT_OTHERVALUE_6 = 'INCREMENT_OTHERVALUE_6';
    static DECREMENT_OTHERVALUE_4  = 'DECREMENT_OTHERVALUE_4';
    static CHANGE_VALUE_WITH_INPUT = 'CHANGE_VALUE_WITH_INPUT';

    // dispatch
    static increment = () => {
        return {
            type: 'INCREMENT'
        }
    }

    static decrement = () => {
        return {
            type: 'DECREMENT'
        }
    }

    static incrementOtherValue6 = () => {
        return {
            type: 'INCREMENT_OTHERVALUE_6',
            value: 6
        }
    }

    static decrementOtherValue4 = () => {
        return {
            type: 'DECREMENT_OTHERVALUE_4',
            value: 4
        }
    }

    static changeValueWithInput = value => {
        return {
            type: 'CHANGE_VALUE_WITH_INPUT',
            value: value
        }
    }
};