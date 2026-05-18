import Design from '../Components/design.jsx'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Design>
        <div className="flex flex-col items-center">
          
          {/* Main Heading */}
          <h1 className="m-0 text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight">
            Home
          </h1>
          
          {/* Links Container */}
          <div className="flex justify-center gap-8 mt-6">
            <Link to="/login" className="text-white text-sm hover:text-gray-300 hover:underline transition">
              Sign in
            </Link>
            <Link to="/signup" className="text-white text-sm hover:text-gray-300 hover:underline transition">
              Sign up
            </Link>
          </div>

        </div>
      </Design>
    </>
  )
}

export default Home