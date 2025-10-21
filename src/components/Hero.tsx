import heroImage from "figma:asset/e42ac190168274dd05695d8234b304c863e63d84.png";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-16"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-8">
        <h1 className="text-white text-[8vw] md:text-[100px] tracking-wider uppercase mb-12 leading-none text-center">
          JOJOSCENTSATION
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-16">
          <div className="bg-[#8B6F47] px-8 md:px-12 py-6 md:py-8">
            <h2 className="text-white text-[12vw] md:text-[100px] tracking-wide uppercase leading-none">
              SERENE
            </h2>
          </div>
          <div className="bg-[#E5DDD5] px-8 md:px-12 py-6 md:py-8">
            <h2 className="text-[#4A3728] text-[12vw] md:text-[100px] tracking-wide uppercase leading-none">
              SMELLS
            </h2>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="border-2 border-white text-white uppercase tracking-wider px-12 py-4 hover:bg-white hover:text-[#8B6F47] transition-colors duration-300"
        >
          WELCOME
        </button>
      </div>
    </section>
  );
}