const ContactDesign = ({ href, label, color, img }) => {
  // Color mapping
  const colorClasses = {
    green: {
      bg: 'bg-green-500',
      border: 'border-green-600'
    },
    pink: {
      bg: 'bg-pink-500',
      border: 'border-pink-600'
    },
    yellow: {
      bg: 'bg-yellow-500',
      border: 'border-yellow-600'
    }
  };

  const { bg, border } = colorClasses[color] || colorClasses.green;

  return (
    <div className={`
      w-[65%] sm:w-48 md:w-36 lg:w-40 xl:w-44
      h-20 sm:h-28 md:h-32 lg:h-36
      border-2 rounded-2xl 
      ${bg} ${border}
      flex items-center justify-center
      overflow-hidden
      mx-auto
      transition-all 
      duration-300
      ease-in-out
      transform
      hover:scale-105 
      hover:shadow-lg
      hover:brightness-110
      group
    `}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex items-center justify-center flex-col p-2 transition-colors duration-200"
      >
        <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <img 
            src={img} 
            alt={label} 
            className="w-8 sm:w-10 md:w-8 lg:w-10" 
          />
        </div>
        <p className="font-medium text-sm sm:text-base mt-1 sm:mt-2 text-white transition-opacity duration-300 group-hover:opacity-90">
          {label}
        </p>
      </a>
    </div>
  );
};

export default ContactDesign;