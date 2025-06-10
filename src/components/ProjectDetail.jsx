import React from "react";

const ProjectDetail = ({
  title,
  descryption,
  subDescryption,
  href,
  image,
  tags,
  closeModal
}) => {
     console.log(typeof subDescryption)
  return (
    <></>
    // <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
    //   <div
    //     className=" realtive max-w-2xl border shadow-sm
    //   rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
    //   >
    //     <button onClick={closeModal} className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500">
    //       <img src="assets/close.svg" className="w-6 h-6" alt="" />
    //     </button>
    //     <img src={image} alt={title} className="w-full rounded-t-2xl" />
    //     <div className="p-5 ">
    //       <h5 className="mb-2 text-2xl font-bold text-neutral-400 ">{title}</h5>
    //       <p className="mb-3 font-normal text-neutral-400">{descryption}</p>
    //       {/* {subDescryption.map((subDescp, index) => (
    //         <p className="mb-3 font-normal text-neutral-400" key={index}>
    //           {subDescp}
    //         </p>
    //       ))} */}
    //       <div className="flex items-center justify-center mt-4">
    //         <div>
    //           {tags.map((tag) => (
    //             <img
    //               key={tag.id}
    //               src={tag.path}
    //               alt={tag.name}
    //               className="rounded-lg size-10 hover-animation"
    //             />
    //           ))}
    //           <div>
    //             <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animaion " href={href}>View Project <img src="assets/arrow-up.svg"
    //             className="size-4"/></a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  );
};

export default ProjectDetail;
