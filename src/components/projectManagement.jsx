import React from 'react'
import ProjectList from './projectList';

const ProjectManagement = () => {
  return (
    <div className='p-5 border border-green-600 m-5'>
      <h3 className="text-xl font-bold mb-4 flex flex-col items-center "></h3>
          <ProjectList/>
    </div>
  )
}

export default ProjectManagement;