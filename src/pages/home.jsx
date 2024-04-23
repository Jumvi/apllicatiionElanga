import React from 'react'
import Header from '../components/Header';
import Hersection from '../components/herSection';

export default function Home() {
  return (
    <main className='w-full'>
      <div className='w-full'>
        <Header/>
      </div>
      <div>
        <Hersection/>
      </div>
    </main>
  )
}
