

const ContactDesign = ({ href, label, bgColor ,img}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 ${bgColor} text-white rounded`}
    >
    <img src={img} alt={label} />

      {label}
    </a>
  );
};

export default ContactDesign