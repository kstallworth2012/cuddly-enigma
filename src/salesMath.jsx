import {useSelector,useDispatch,shallowEqual} from 'react-redux'
import {grossProfit} from './actions'



const SalesMath = ()=>{
		const dispatch = useDispatch()
		const profit = ()=> dispatch(grossProfit())
		const {	gross_sales,transactionsNum,items_sold,footfall,hours_open,gross_profit} = useSelector(state=>({
				gross_sales:state.gross_sales,
				transactionsNum:state.transactionsNum,
				items_sold:state.items_sold,
				footfall:state.footfall,
				hours_open:state.hours_open,
				gross_profit:state.gross_profit
		}),shallowEqual)
console.log("Math rendered");

	return(
		<>
		<div>
			<h1>Retail Sales Math</h1>
			<ul>

				<li><b>Average Transaction Value:</b> {(gross_sales / transactionsNum)}</li>
				<li><b>Items per Transaction:</b> {items_sold / transactionsNum} </li>
				<li><b>Conversion Rate:</b> { transactionsNum / footfall}</li>
				<li><b>Sales Per Hour:</b> {gross_sales / hours_open }</li>
				<li><b>Gross Profit: {gross_profit}</b></li>
			</ul>
			<button onClick={profit}>Profit Button</button>
		</div>
</>
			)
}

export default SalesMath