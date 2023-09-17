import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center gap-5 w-[100vw] h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] object-cover"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1607081759141-5035e0a710a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
      }}
    >
      {/* <img
        src="https://images.unsplash.com/photo-1607081759141-5035e0a710a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="hero-featured-banner"
        className="w-[100vw] h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] object-cover"
      /> */}

      <div className="text-white pt-10 md:pt-20 xl:pt-24 font-bold md:text-[2rem] lg:text-[3rem] xl:text-[4rem]">
        <h2 className="text-xl md:text-2xl xl:text-4xl 2xl:text-5xl text-center italic">
          <span className="text-2xl md:text-4xl 2xl:text-6xl">W</span>here Learning Meets
          Inspiration, <br /> Alphabetor Guides the Way.
        </h2>
      </div>

      {/* SEARCH MODULE */}
      <div className="flex flex-row items-center gap-2">
        <input
          type="text"
          placeholder="Search for courses.."
          className="w-80 bg-white text-sm px-2 py-2  outline-none"
        />
        <button className="flex flex-row items-center gap-1 px-2 py-1 text-white font-bold bg-cyan-600">Search <FaSearch/> </button>
      </div>
    </div>
  );
};

export default Hero;
