import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden px-5 md:px-20 lg:px-40">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#9514FA] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm font-medium px-5 py-2 rounded-full">
            [icon] New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span className="">
               Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  px-4 py-2 rounded-2xl font-semibold text-md flex items-center gap-3 group text-white cursor-pointer">
              Explore Products
            </button>
            <button className="bg-white transition-all px-4 py-2 rounded-2xl font-semibold text-md flex items-center gap-3 group text-black border border-[#9514FA] cursor-pointer">
              [icon] Watch Demo
            </button>
            
          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-2xl"
              src={BannerImage}
              alt="Clicking for the best tools"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;