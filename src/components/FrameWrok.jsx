import { OrbitingCircles } from "./OrbitingCircles";

function Framework() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((src, idx) => (
          <Icon key={idx} src={src} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((src, idx) => (
          <Icon key={idx} src={src} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
export default Framework;

const Icon = ({ src }) => (
  <img 
    src={`/assets/logos/${src}.svg`}
    alt={src} 
    className="duration-200 rounded-sm hover:scale-110"
  />
);
// to be completetd