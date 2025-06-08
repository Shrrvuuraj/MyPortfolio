import React from "react";
import Cart from "../components/Cart";
import { useRef } from "react";

const About = () => {
  const grid2container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grids-col-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top[1rem]
                         md:scale-[3] md:left-50 md:inset-y-0 
                         lg:scale-[2.5rem]
               "
          />
          <div className="z-10">
            <p className="headtext">Hello I'm Shravan Rajput</p>
            <p className="subtext">
              Over the last year, I have developed my frontend and backend
              skills to deliver dynamic software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none h-1/2 -bottom-4  sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* grid2 */}
        <div className=" grid-default-color grid-2">
          <div
            ref={grid2container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-400">
              Code is Craft
            </p>
            <Cart
              style={{ rotate: "-10deg", top: "10%", left: "10%" }}
              text="Grasp"
              containerRef={grid2container}
            />
            <Cart
              style={{ rotate: "45deg", bottom: "20%", left: "60%" }}
              text="solid"
              containerRef={grid2container}
            />
            <Cart
              style={{ rotate: "-30deg", top: "30%", left: "40%" }}
              text="hello"
              containerRef={grid2container}
            />
            <Cart
              style={{ rotate: "45deg", top: "55%", left: "-1%" }}
              text="dudep"
              containerRef={grid2container}
            />
            <Cart
              style={{ rotate: "0deg", top: "50%", left: "70%" }}
              text="bhpppp"
              containerRef={grid2container}
            />
            <Cart
              style={{ rotate: "40deg", top: "0%", left: "80%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2container}
            />
            <Cart
              style={{ rotate: "33deg", top: "60%", left: "50%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2container}
            />
            <Cart
              style={{ rotate: "33deg", top: "55%", left: "50%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2container}
            />
          </div>
        </div>
        {/* grid3 */}
        <div className=" grid-black-color grid-3"></div>
        {/* grid4 */}
        <div className=" grid-special-color grid-4"></div>
        {/* grid5 */}
        <div className=" grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
