

function Home() {
  return (
    <div className="min-h-screen">
      

      <main
        className="relative flex min-h-[calc(100vh-80px)] items-center justify-center bg-cover bg-center px-4 py-16 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-xl">
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700">
              Sign Up
            </button>
            <button className="rounded-md bg-white px-6 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100">
              Order Now
            </button>
          </div>

          <div className="mt-8 w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-lg text-gray-800 outline-none placeholder:text-gray-500 shadow-md"
            />
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default Home;