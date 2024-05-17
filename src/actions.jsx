import {GROSS_PROFIT,CHANGE_NUM} from './actionTypes'
export const grossProfit = ()=>({type:GROSS_PROFIT})

export const change = (num,value) => ({
	type: CHANGE_NUM,
	num,
	value

})