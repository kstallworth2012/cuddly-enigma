import {useSelector,useDispatch,shallowEqual} from "react-redux"


const ReturnOnAssets = ()=>{
	return(
				<>
					<div>
						<h1>Return On Assets</h1>
						<ol>
							<li><b>Before Tax & Interest:</b></li>
							<li><b>After Tax & Interest:</b></li>
							<li><b>Return On Net Assets (RONA):</b></li>
							

						</ol>
					</div>
				</>
		)
}

export default ReturnOnAssets