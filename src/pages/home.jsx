import React from 'react'
import Header from '../components/Header';
import Hersection from '../components/herSection';
import Beproject from '../components/beproject';
import Ourprojects from '../components/ourprojects';
import Equipesection from '../components/equipesection';

export default function Home() {
  return (
    <main className='w-full'>
      <div className='w-full'>
        <Header/>
      </div>
      <div>
        <Hersection/>
      </div>
      <div>
        <Beproject/>
      </div>
      <div>
        <Ourprojects/>
      </div>
      <div>
        <Equipesection/>
      </div>
    </main>
  )
}
