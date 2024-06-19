// // src/components/ProjectCard.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Carroussel from './carroussel';
// import { useSelector } from 'react-redux';

// const ProjectCard = () => {
//   const Navigate = useNavigate();
//   const project = useSelector((state)=>state.auth.projet);
//   console.log(project);

//   const handleDetailsClick = () => {
//     Navigate(`/projects/${project.id}`);
//   };

//   return (
//     <div className="bg-white shadow rounded p-4 flex flex-col">
//       <Carroussel project={project}/>
//       <Carroussel project={project}/>
//       <Carroussel project={project}/>
//       <Carroussel project={project}/>

//     </div>
//   );
// };

// export default ProjectCard;

