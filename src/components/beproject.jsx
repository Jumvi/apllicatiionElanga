import React from 'react'
import Carroussel from './carroussel'

export default function Beproject() {
  return (
    <section className='p-20 bg-emerald-100'>
        <div className='flex flex-col mb-10  '>
            <h2 className='text-2xl font-bold  self-center text-center '>Découvrer différents projets reussis
                <p className=''> grâce au concours des utilisateurs</p> 
                <p> de notre plateforme</p>
            </h2>
        </div>
        <Carroussel/>
    </section>
  )
}
