const Project = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
}) => {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/50">
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-neutral-300 mb-4">{description}</p>

        {/* Sub-description list */}
        <ul className="mb-4 space-y-2">
          {subDescription.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span className="text-neutral-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Link (if available) */}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;