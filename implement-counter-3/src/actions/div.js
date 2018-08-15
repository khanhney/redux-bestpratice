export default class Div {
    static DIVFOR4 = 'DIVFOR4';
    static DIVFOR2 = 'DIVFOR2';
    static DIVWITHVALUE = 'DIVWITHVALUE';
    static INITVALUE_DIV = 'INITVALUE_DIV';

    static divFor4 = () => {
        return {
            type: 'DIVFOR4',
            val: 4
        }
    }

    static divFor2 = () => {
        return {
            type: 'DIVFOR2',
            val: 2
        }
    }

    static divForValue = val => {
        return {
            type: 'DIVWITHVALUE',
            val: val
        }
    }

    static initForDiv = () => {
        return {
            type: 'INITVALUE_DIV'
        }
    }
}