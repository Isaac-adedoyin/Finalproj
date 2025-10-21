import { useState } from "react";
import contactImage from "figma:asset/e42ac190168274dd05695d8234b304c863e63d84.png";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    contactMethod: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("https://formspree.io/f/xeorpbop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          contactMethod: formData.contactMethod,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          gender: "",
          contactMethod: "",
          message: ""
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-8 md:px-16 py-20"
      style={{
        backgroundImage: `url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 max-w-3xl w-full">
        <h2 className="text-white text-5xl mb-8 text-center tracking-wide">CONTACT US</h2>
        
        <p className="text-white text-center mb-12 text-lg">
          We'd love to hear from you! Whether you want to place an order or ask a question, reach out to us.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-white uppercase tracking-wider block mb-2">Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border border-white/50 text-white px-4 py-3 rounded focus:border-white focus:outline-none placeholder:text-white/50"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label className="text-white uppercase tracking-wider block mb-2">Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border border-white/50 text-white px-4 py-3 rounded focus:border-white focus:outline-none placeholder:text-white/50"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label className="text-white uppercase tracking-wider block mb-2">Phone:</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-transparent border border-white/50 text-white px-4 py-3 rounded focus:border-white focus:outline-none placeholder:text-white/50"
              placeholder="+234 XXX XXX XXXX"
              required
            />
          </div>
          
          <div className="flex gap-8">
            <label className="flex items-center text-white uppercase tracking-wider cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-5 h-5 mr-3 accent-white"
              />
              Male
            </label>
            <label className="flex items-center text-white uppercase tracking-wider cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-5 h-5 mr-3 accent-white"
              />
              Female
            </label>
          </div>
          
          <div>
            <label className="text-white uppercase tracking-wider block mb-4">Preferred Contact Method:</label>
            <div className="flex gap-8">
              <label className="flex items-center text-white uppercase tracking-wider cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.contactMethod === "email"}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.checked ? "email" : "" })}
                  className="w-5 h-5 mr-3 accent-white"
                />
                Email
              </label>
              <label className="flex items-center text-white uppercase tracking-wider cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.contactMethod === "phone"}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.checked ? "phone" : "" })}
                  className="w-5 h-5 mr-3 accent-white"
                />
                Phone
              </label>
            </div>
          </div>
          
          <div>
            <label className="text-white uppercase tracking-wider block mb-2">Message:</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-transparent border border-white/50 text-white px-4 py-3 rounded focus:border-white focus:outline-none placeholder:text-white/50 resize-none"
              placeholder="Your message here..."
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-[#8B6F47] uppercase tracking-wider py-4 rounded hover:bg-white/90 transition-colors text-center flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
          
          {submitStatus === "success" && (
            <div className="text-center text-white bg-green-500/80 py-3 px-4 rounded">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="text-center text-white bg-red-500/80 py-3 px-4 rounded">
              Oops! Something went wrong. Please try again or contact us directly.
            </div>
          )}
        </form>
        
        <div className="flex justify-center gap-6 mt-12">
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
      </div>
    </section>
  );
}