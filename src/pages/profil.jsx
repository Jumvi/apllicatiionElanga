import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/userProfile';
import { useSelector } from 'react-redux';
import axios from 'axios';

 function Profil() {
    const user = useSelector((state)=>state.auth.user);
    const apiUrl = 'http://localhost:3000/projects';
    const[projects, setProject] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(()=>{
      async function fecthData(){
        const response = await axios.get(apiUrl);
        setProject( [...projects, response.data]);
        
      }
      fecthData()
    },[])
    console.log(user);
  return (
    <div>
        <div>
            <dir className='p-10'>
              <ProfileHeader user={user}/>
            </dir>
            <div className='flex flex-col ml-10'> 
              <div className='flex gap-3  '>
                <p className='font-bold'>{user.nom}</p>
                <p className='font-bold'>{user.postNom}</p>
              </div>
              <p>Tel:{user.telephone}</p>
            </div>
                
            
            <section>
                <h2>Listes des mes projets</h2>
                {
                  projects.map((project)=>{
                    <div key={project.id}>
                      
                    </div>
                  })
                }
            </section>
        </div>
    </div>
  )
}

export default Profil;

