import {useSelector,useDispatch} from 'react-redux'


const SpaceProductivity = ()=>{
	return(

				<>
					<h1>Space Productivity</h1>
					<div>
					<h3>Sales Per Store</h3>
					<ul>
						<li>Sales Per Store:</li>
					</ul>
					</div>

					<div>
						<h3>Sales Per Sqaure Foot</h3>
						<ul>
							<li>Selling Area</li>
							<li>Total Area</li>
						</ul>
					</div>

				<div>
					<h3>Gross Profit Per Square Foot</h3>
					<ul>
							<li>Selling Area</li>
							<li>Total Area</li>
					</ul>
				</div>

				<div>
					<h3>Transactions Per Sqaure Foot</h3>
					<ul>
							<li>Selling Area</li>
							<li>Total Area</li>
					</ul>
				</div>
				</>
		)
}

export default SpaceProductivity