import { motion } from "framer-motion";
import ContactForm from "./contactform";
import ContInfo from "./contInfo";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 min-h-screen w-full flex items-center justify-center"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      <div className="w-full max-w-6xl space-y-8 sm:space-y-10 md:space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#64FFDA] text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2">
            <ContInfo />
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
