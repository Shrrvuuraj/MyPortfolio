import React from "react";
import ContactDesign from "../components/ContactDesign";

const Contact = () => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-8 md:px-20 lg:px-32 flex flex-col items-center justify-center">
      {/* Responsive gradient text heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-8 md:mb-12 text-center">
        Get In Touch
      </h2>
      
      {/* Responsive contact cards container */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
        <ContactDesign
          href="https://api.whatsapp.com/send/?phone=918595219941&text=Hi+there!"
          label="WhatsApp"
          color="green"
          img="/assets/socials/whatsApp.svg"
        />
        <ContactDesign
          href="https://instagram.com/shrrvvuu_raj"
          label="Instagram"
          color="pink"
          img="/assets/socials/instagram.svg"
        />
        <ContactDesign
          href="sms:+918595219941?body=Hi%20there"
          label="SMS Me"
          color="yellow"
          img="/assets/socials/sms.png"
        />
      </div>
    </section>
  );
};

export default Contact;