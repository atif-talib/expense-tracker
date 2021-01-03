/* eslint-disable import/no-anonymous-default-export */
export default (state,action)=>{
    switch(action.type){
        case 'DELETE':
            return{
                transactions: state.transactions.filter(transaction=>transaction.id !== action.payload)
            }
            case 'ADD':
                return {
                    ...state,
                    transactions: [...state.transactions, action.payload]
                }
        default:
            return state;
    }
}