function Home() {
  return (
    <div className="relative w-full h-screen bg-neutral-900 text-cyan-200">
      <img
        src="https://ik.imagekit.io/sdkyquy76/Fotos%20RH%20TwoGroup/imgHome.png?updatedAt=1740529133488"
        alt="Fundo"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 
                      flex flex-col gap-6 justify-center items-center 
                      w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] min-h-[50vh] 
                      pl-16 sm:pl-20"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 text-center">
          Seja bem-vinde!
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-[#B1FFF8] text-center">
          O jeito perfeito de gerenciar seus colaboradores!
        </p>

        <div className="px-6 py-2 flex justify-center items-center">
          <button
            className="w-40 sm:w-44 md:w-48 h-12 sm:h-14 text-lg sm:text-xl 
                             bg-cyan-400 text-neutral-900 font-semibold 
                             rounded-bl-2xl rounded-se-2xl hover:bg-cyan-300 transition"
          >
            Conheça a equipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
