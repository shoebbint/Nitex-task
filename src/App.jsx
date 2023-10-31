
import { Route, Routes } from 'react-router-dom'
import './App.css'


import Header from './Components/Shared/Header/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import Footer from './Components/Shared/Footer/Footer'

function App() {


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}>

        </Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
