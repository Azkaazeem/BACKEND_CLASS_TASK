import { Routes, Route } from 'react-router-dom'
import SignUp from './Pages/signup.jsx'
import SignIn from './Pages/login.jsx'
import Home from './Pages/home.jsx'
import Blog from './Pages/blog.jsx'
import About from './Pages/about.jsx'
import Contact from './Pages/contact.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
