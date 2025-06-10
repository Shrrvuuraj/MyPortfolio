import Project from "../components/Project";
import { myProjects } from "../constant";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 section-spacing relative">
      <h2 className="text-4xl font-bold text-center mb-2 headtext">
        MY SELECTED PROJECTS
      </h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full max-w-2xl mx-auto mb-16"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;