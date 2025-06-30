import React from "react";
import ContactDesign from "../components/ContactDesign";

const Contact = () => {
  return (
    <section className=" h-[50vh] border-amber-300 border-2 p-20 flex items-center justify-center">
      <ContactDesign
  href="https://api.whatsapp.com/send/?phone=918700743873&text=Hi+there!"
  label="WhatsApp"
  bgColor="bg-green-500"
  img="/assets/socials/whatsApp.svg" 
/>

<ContactDesign
  href="https://instagram.com/shrrvvuu_raj"
  label="Instagram"
  bgColor="bg-pink-500"
   img="/assets/socials/instagram.svg"
/>

<ContactDesign
  href="sms:+911234567890?body=Hi%20there"
  label="SMS Me"
  bgColor="bg-yellow-500"
   img="/assets/socials/sms.png"
/>
</section>
  );
};

export default Contact;
