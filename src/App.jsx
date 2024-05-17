import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SalesMath from './salesMath'
import SalesInputs from './salesInputs'

import ProfitMath from './profitMath'
import EmpProductivity from './empProductivity'
import InventoryProductivity from './inventoryProductivity'
import ReturnOnAssets from './returnOnAssets'
import SpaceProductivity from './spaceProductivity'

function App() {

  return (
    <>
     <SalesMath />
     <SalesInputs />
     <hr />
     <ProfitMath />
     <hr />
     <EmpProductivity  />
     <hr />
     <InventoryProductivity />
     <hr />
     <ReturnOnAssets />
     <hr />
     <SpaceProductivity />
    </>
  )
}

export default App
