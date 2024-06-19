// // src/pages/ProjectDetails.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProjectDetails = ({ projects }) => {
//   const { id } = useParams();
//   const project = projects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return <div>Projet non trouvé</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {project.images.map((image, index) => (
//           <img key={index} src={image} alt={`Project ${index}`} className="w-full h-64 object-cover rounded" />
//         ))}
//       </div>
//       <p className="text-gray-700 mt-4">{project.details}</p>
//       <div className="mt-4">
//         <h2 className="text-2xl font-bold">Commentaires</h2>
//         <ul className="list-disc pl-5">
//           {project.comments.map((comment, index) => (
//             <li key={index} className="text-gray-700 mt-2">{comment}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
