import { Instagram, Mail, MessageCircle } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logoImage from "figma:asset/fa3a3bad3c4db1d2c96a17f912b0dcbb877e018b.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-8 md:px-16 py-20 bg-[#9B8B7E]"
    >
      
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Logo and Map */}
        <div className="flex flex-col items-center justify-start">
          <div className="w-64 h-64 flex items-center justify-center mb-8">
            <img src={logoImage} alt="JojoScentsation Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="w-full max-w-sm">
            <h3 className="text-white text-center mb-4 tracking-wider">Jojoscentsation</h3>
            <p className="text-white text-center mb-6 tracking-wide">Serene Smells</p>
            <div className="bg-white/90 rounded-lg p-4 aspect-[4/3]">
              <iframe
                className="w-full h-full rounded"
                src="https://www.youtube.com/embed/YmVQdYlvCv0"
                title="JojoScentsation Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        
        {/* Right Column - About Text and Table */}
        <div className="flex flex-col">
          <div className="flex justify-end gap-6 mb-8">
            <a 
              href="https://www.instagram.com/jojoscentsation?igsh=MW9zOHJuZmRraGpneg==" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              <Instagram className="w-8 h-8 text-white cursor-pointer hover:text-[#D4AF37] transition-colors" />
            </a>
            <a 
              href="https://www.tiktok.com/@jojoscentsation?_t=ZS-90RQMs3axx1&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our TikTok"
            >
              <FaTiktok className="w-8 h-8 text-white cursor-pointer hover:text-[#D4AF37] transition-colors" />
            </a>
            <a 
              href="https://wa.me/+2347043038203" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-8 h-8 text-white cursor-pointer hover:text-[#D4AF37] transition-colors" />
            </a>
            <a 
              href="mailto:Olajumokejoy1025@gmail.com"
              aria-label="Send us an email"
            >
              <Mail className="w-8 h-8 text-white cursor-pointer hover:text-[#D4AF37] transition-colors" />
            </a>
          </div>
          
          <h2 className="text-white text-5xl mb-8 tracking-wide">About us</h2>
          
          <p className="text-white text-justify mb-12 leading-relaxed">
            JoJoScentsation is a perfume store based in Abuja, Nigeria. Our mission is to provide luxury fragrances at affordable prices, making every customer feel elegant and confident. We specialize in authentic undiluted oil perfumes, designer fragrances, and everyday body mists. With a passion for quality and customer satisfaction, we also provide reliable delivery services across Abuja and nationwide.
          </p>
          
          <div className="bg-[#9B8B7E]/80 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#6B5B4F]">
                  <th className="text-left p-4 text-white uppercase tracking-wider">Location</th>
                  <th className="text-center p-4 text-white uppercase tracking-wider">Fee</th>
                  <th className="text-center p-4 text-white uppercase tracking-wider">Days</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#6B5B4F]/50">
                  <td className="p-4 text-white">Within Abuja</td>
                  <td className="text-center p-4 text-white">1,500</td>
                  <td className="text-center p-4 text-white">1-2 DAYS</td>
                </tr>
                <tr className="border-b border-[#6B5B4F]/50">
                  <td className="p-4 text-white">Outside Abuja</td>
                  <td className="text-center p-4 text-white">3,000</td>
                  <td className="text-center p-4 text-white">3-5 DAYS</td>
                </tr>
                <tr>
                  <td className="p-4 text-white">National Wide Express</td>
                  <td className="text-center p-4 text-white">5,000</td>
                  <td className="text-center p-4 text-white">3-1 WEEK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}