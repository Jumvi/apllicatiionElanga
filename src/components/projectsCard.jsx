// // src/components/ProjectCard.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProjectCard = ({ project }) => {
//   const Navigate = useNavigate();

//   const handleDetailsClick = () => {
//     Navigate(`/projects/${project.id}`);
//   };

//   return (
//     <div className="bg-white shadow rounded p-4 flex flex-col">
//       <img src={project.mainImage} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
//       <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//       <p className="text-gray-700 mb-4">{project.description}</p>
//       <div className="mt-auto">
//         <button
//           onClick={handleDetailsClick}
//           className="flex items-center text-blue-500 hover:text-blue-700"
//         >
//           Lire les détails
//           <svg
//             className="w-4 h-4 ml-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

