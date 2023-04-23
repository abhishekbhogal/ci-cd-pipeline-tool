//import operatorsStore from './operators.store.json';
import * as operatorsStore from './operators.store.json' assert { type: "json" };


export const getOperator = ( operatorId ) => {

    const operator = operatorsStore.default.find( 
        operator => operator.id === operatorId
    );

    return operator;
};
