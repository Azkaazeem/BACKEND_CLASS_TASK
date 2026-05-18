const Design = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center text-center px-6">
      <div className="m-0 text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight">
        {children || 'Your Text Here'}
      </div>
    </div>
  )
}

export default Design