import React from 'react'
import Carroussel from './carroussel'

function Ourprojects() {
  return (
    <section className='p-20'>
        <div>
            <h2 className='text-2xl font-bold  self-center text-center p-10 mb-10'>Quelques projects choisis pour vous par notre équipe</h2>
        </div>
        <div>
            <Carroussel/>
        </div>
    </section>
  )
}

export default Ourprojects