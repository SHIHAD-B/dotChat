
import './App.css'
import { Login } from './assets/pages/login'
import { Main } from './assets/pages/main'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from './assets/pages/signup'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </>
  )
}

export default App
