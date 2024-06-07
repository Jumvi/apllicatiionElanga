import React from 'react'
import ProfileHeader from '../components/userProfile';
import ActiveProjects from '../components/activeProduct';
import ProjectDetails from '../components/projetDetails';

 function Profil({data}) {
  return (
    <div>
        <div>
            <header>
                <ProfileHeader/>
            </header>
            <section>
                {/* <ActiveProjects/>
                <ProjectDetails/> */}
            </section>
        </div>
    </div>
  )
}

export default Profil;

