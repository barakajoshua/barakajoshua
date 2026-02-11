import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    let mysocialMedia = [
        { icon: <FaFacebook />, link: "https://www.facebook.com/baraka.joshua.7" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/baraka_joshua/" },
        { icon: <FaGithub />, link: "https://github.com/barakajoshua" },
        { icon: <FaWhatsapp />, link: "https://wa.me/254712345678" },
    ]
  return (
    <footer id="footer" className="bg-[#04101a] w-full p-10 text-center">
        <ul className="flex flex-col items-center space-y-4">
            <li><h1 className="text-[#64FFDA] font-bold text-4xl">Baraka Joshua</h1></li>
            <li>
                <ul className="flex justify-center space-x-8 mt-4 text-[#CCD6F6] text-xl">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </li>
            <li>
                <ul className="flex justify-center space-x-8 text-[#CCD6F6] text-4xl mt-4">
  {mysocialMedia.map((item, index) => (
    <li
      key={index}
      className="transition-all duration-300 p-3 rounded-full border border-transparent hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 hover:shadow-[0_0_20px_#64FFDA] cursor-pointer"
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full"
      >
        {item.icon}
      </a>
    </li>
  ))}
</ul>

            </li>
            <li>
                    <p className="text-muted text-[#CCD6F6]">© 2025 Baraka Joshua</p>
            </li>
        </ul>
    </footer>
  );
};

export default Footer;





