import {useSelector, useDispatch,shallowEqual} from 'react-redux'


const ProfitMath = ()=>{
    
    
    const { gross_profit,
        net_profit_after_tax,
        shrink,
        gross_sales
          } = useSelector((state)=>({
        gross_profit:state.gross_profit,
        net_profit_after_tax:state.net_profit_after_tax,
        shrink:state.shrink,
        gross_sales:state.gross_sales
    }),shallowEqual)
	return(
	<>
	   <h1>Retail Profit Math</h1>
	   <ol>
	   <li><b>Gross Profit: </b>{gross_profit}</li>
	   <li><b>Gross Profit Margin: </b>{gross_profit / gross_sales}</li>	
	   <li><b>Net Profit Margin:</b>{net_profit_after_tax / gross_sales}</li>
	   <li><b>Maintained Gross Profit:</b>{gross_profit - shrink}</li>
	   <li><b>Maintained Gross Margin:</b>{(gross_profit - shrink) / gross_sales}</li>



	   </ol>	
	</>

	)
}


export default ProfitMath