const Banner = () => {
  return (
    <section  className="relative bg-[url('/cpt.jpg')]  bg-cover flex items-center justify-center h-[70vh]  from-purple-700 via-blue-600 to-indigo-700 text-white overflow-hidden">

      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Create. Imagine. Generate.
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-200">Explore AI Art</p>

        <p className="mt-2 text-sm text-gray-300 max-w-xl mx-auto">
          Turn your imagination into stunning AI-generated images in seconds.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Start Creating
          </button>

          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Explore Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
