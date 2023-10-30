
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Other from './Components/Other/Other'

function App() {


  return (
    <>

    <Routes>
      <Route path='/' element={<Other></Other>}>
 
      </Route>
    </Routes>

    </>
  )
}

export default App
