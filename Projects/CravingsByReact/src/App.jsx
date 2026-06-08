const App = () => {
  return (
    <>
     <div className="bg-[url('/rest.webp')] bg-cover h-screen w-full flex justify-center items-center"></div>
     <div className="w-5xl mx-auto p-20 bg-white/70 rounded-2x1 flex flex-col justify-center items-center gap-5">
     <p className="text-3xl font-bold text-gray-800">Welcome to Cravings!</p>
     <p className="text-lg text-gray-600">Your one-stop destination for delicious recipes and food inspiration.</p>
     </div>
      



      <button className="bg-blue-500 text-white px-5 py-2 mt-3 mx-5  rounded hover:bg-blue-700 active:bg-blue-600">Explore Recipes</button>

    </>
  )
}

export default App