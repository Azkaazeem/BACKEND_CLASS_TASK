import SignUp from './Pages/signup.jsx'
import SignIn from './Pages/login.jsx'
import Home from './Pages/home.jsx'
import Blog from './Pages/blog.jsx'
import About from './Pages/about.jsx'
import Contact from './Pages/contact.jsx'
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/about" element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      } />

      <Route path="/blog" element={
        <ProtectedRoute>
          <Blog />
        </ProtectedRoute>
      } />

      <Route path="/contact" element={
        <ProtectedRoute>
          <Contact />
        </ProtectedRoute>
      } />

    </Routes>
  );
}

export default App;