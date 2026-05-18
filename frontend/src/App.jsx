import { Routes, Route } from 'react-router-dom'
import SignUp from './Pages/signup.jsx'
import SignIn from './Pages/login.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
