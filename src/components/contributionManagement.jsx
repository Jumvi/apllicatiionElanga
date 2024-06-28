import React from 'react'
import ContributionList from './contributionListe';
import Sidebar from './sidebare';
import ContributionDetails from '../pages/contributionDetails';

const ContributionManagement = () => {
  return (
    <div className='flex'>
      <div className=' max-w-[20%]'>
        <Sidebar/>
      </div>
      <div className='w-[80%]'>
        <ContributionDetails/>
      </div>
    </div>
  )
}

export default ContributionManagement;