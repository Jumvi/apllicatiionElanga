import React from 'react'
import Carroussel from './carroussel'

export default function Beproject() {
  return (
    <section className='p-20 bg-emerald-100'>
        <div className='flex flex-col mb-10 '>
            <h2 className='text-2xl font-bold  self-center'>Découvrer différents projets reussis
                <p className='ml-12'> grâce au concours des</p> 
                <p>utilisateurs de notre plateforme</p>
            </h2>
        </div>
        <Carroussel/>
    </section>
  )
}
