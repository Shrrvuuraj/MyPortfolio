import React from "react";

const Contact = () => {
  return (
    <section className=" h-[50vh] border-amber-300 border-2 p-20 ">
      <a
        href="https://api.whatsapp.com/send/?phone=918700743873&text=Hi+there%21+I+want+to+talk+to+you.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        WhatsApp
      </a>
      <a
        href="https://instagram.com/shrrvvuu_raj"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-pink-500 text-white rounded"
      >
        Instagram
      </a>
      <a
        href="mailto:shrrvuurajput@gmail.com?subject=Hello&body=Hi%20there"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Email Me
      </a>
      <a href='sms:+911234567890?body=Hi%20there' target='_blank' rel='noopener noreferrer'>I want free Bitcoins</a>
    </section>
  );
};

export default Contact;
