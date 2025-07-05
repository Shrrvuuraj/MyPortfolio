const ContactDesign = ({ href, label, color, img }) => {
  return (
    <div className={`
      w-[75%] sm:w-48 md:w-36 lg:w-40 xl:w-44  /* 75% width on mobile, then responsive sizes */
      h-20 sm:h-28 md:h-32 lg:h-36
      border-2 rounded-2xl 
      bg-${color}-500 border-${color}-600 
      flex items-center justify-center
      transition-all duration-300
      hover:scale-105 hover:shadow-lg
      hover:backdrop-blur-sm hover:bg-opacity-80
      overflow-hidden
      mx-auto  /* Centers the component */
    `}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex items-center justify-center flex-col p-2"
      >
        <div className="flex items-center justify-center">
          <img 
            src={img} 
            alt={label} 
            className="w-8 sm:w-10 md:w-8 lg:w-10 transition-transform duration-300 hover:scale-110" 
          />
        </div>
        <p className="font-medium text-sm sm:text-base mt-1 sm:mt-2">{label}</p>
      </a>
    </div>
  );
};

export default ContactDesign;