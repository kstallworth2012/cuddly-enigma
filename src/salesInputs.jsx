import {useState} from 'react'
import {useSelector, useDispatch,shallowEqual} from 'react-redux'
import {CHANGE_NUM} from './actionTypes'


const SalesInputs = ()=>{

	const dispatch = useDispatch()

	const {	gross_sales,transactionsNum,items_sold,footfall,hours_open} = useSelector(state=>({
				gross_sales:state.gross_sales,
				transactionsNum:state.transactionsNum,
				items_sold:state.items_sold,
				footfall:state.footfall,
				hours_open:state.hours_open
		}),shallowEqual)
	const [inputs,setInputs] = useState({gross_sales,transactionsNum,items_sold,footfall,hours_open})

      const handleChange = (e)=>{
      	const {value,name} = e.target
      	setInputs(inputs=>({...inputs, [name]:+value}))
      }

      const changeNum = (num)=>{
      	dispatch({
      		type:'CHANGE_NUM',
      		num,
      		value:inputs[num]
      	})
      }


	return(
		<>
			<div>


				<div>
					<label htmlFor="gross_sales">Gross Sales: </label>
					<input
						type="number"
						id="gross_sales"
						name="gross_sales"
						value={inputs.gross_sales}
						onChange={handleChange} 
						/>
						<button onClick={()=> changeNum('gross_sales')}>Update</button>
				</div>
						

					<div>
					<label htmlFor="transactionsNum">Transactions Number: </label>
					<input
						type="number"
						id="transactionsNum"
						name="transactionsNum"
						value={inputs.transactionsNum}
						onChange={handleChange} 
						/>
						<button onClick={()=> changeNum('transactionsNum')}>Update</button>
				</div>
				<div>
					<label htmlFor="items_sold">Items Sold: </label>
					<input
						type="number"
						id="items_sold"
						name="items_sold"
						value={inputs.items_sold}
						onChange={handleChange} 
						/>
						<button onClick={()=>changeNum('items_sold')}>Update</button>
				</div>
				
				<div>
					<label htmlFor="footfall">Foot Fall: </label>
					<input
						type="number"
						id="footfall"
						name="footfall"
						value={inputs.footfall}
						onChange={handleChange} 
						/>
						<button onClick={()=> changeNum('footfall')}>Update</button>
				</div>

								<div>
					<label htmlFor="hours_open">Hours Open: </label>
					<input
						type="number"
						id="hours_open"
						name="hours_open"
						value={inputs.hours_open}
						onChange={handleChange} 
						/>
						<button onClick={()=> changeNum('hours_open')}>Update</button>
				</div>

		


			</div>
		</>

		)
	} 

export default SalesInputs