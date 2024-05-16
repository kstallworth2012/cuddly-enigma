import {CHANGE_NUM,GROSS_PROFIT} from './actionTypes'

const INITIAL_STATE = {
		num1:0, 
		num2:0,
		gross_sales:25780,
		transactionsNum:1200,
		items_sold:38100,
		footfall:36300,
		hours_open:1954,
		cogs:8800,
		gross_profit:0}

function rootReducer(state=INITIAL_STATE,action){
	switch(action.type){
	case CHANGE_NUM:
		return {...state, [action.num]: action.value}

	case GROSS_PROFIT:
		 return {...state, gross_profit: state.gross_sales - state.cogs}

	default:
		return state
	}
}


export default rootReducer