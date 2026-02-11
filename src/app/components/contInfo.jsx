import { MdMail, MdPhone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContInfo = () => {
  const items = [
    {
      icon: <MdMail size={28} className="text-[#0A192F]" />,
      title: "Mail Us",
      text: "balakajoshuah@gmail.com",
    },
    {
      icon: <MdPhone size={28} className="text-[#0A192F]" />,
      title: "Contact Us",
      text: "+250 736 560 886",
    },
    {
      icon: <FaMapMarkerAlt size={28} className="text-[#0A192F]" />,
      title: "Location",
      text: "Gasabo, Kigali, Rwanda",
    },
  ];

  return (
    <ul className="w-full">
      <li>
        <h1 className="text-3xl sm:text-4xl mb-6 font-bold text-[#64FFDA]">
          Contact <span className="text-amber-500">Info</span>
        </h1>
      </li>
      {items.map((item, idx) => (
        <motion.li
          key={item.title}
          className="flex gap-4 items-center mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
        >
          <div className="p-2 bg-amber-500 flex justify-center items-center rounded-full w-12 h-12 shadow-md hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-[#64FFDA] hover:scale-110 transition duration-300">
            {item.icon}
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#CCD6F6]">{item.title}</h1>
            <p className="text-[#CCD6F6]">{item.text}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ContInfo;
