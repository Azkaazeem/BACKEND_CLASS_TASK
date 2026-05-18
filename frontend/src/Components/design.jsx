const Design = ({ text = 'Apka Text Yahan' }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center text-center px-6">
      <h1 className="m-0 text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight">
        {text}
      </h1>
    </div>
  )
}

export default Design