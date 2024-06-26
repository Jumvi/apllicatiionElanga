import React from 'react'
import Sidebar from '../components/sidebare';
import UserManagement from '../components/userManagement';
import ProjectManagement from '../components/projectManagement';
import ContributionManagement from '../components/contributionManagement';
import Statistics from '../components/statistic';
import HeaderDashboard from '../components/headerDasbord';

const Dashboard = () => {
  return (
    <div>
      <div>
        <HeaderDashboard/>
      </div>
      <div className='flex justify-between'>
      <div>
        <Sidebar/>
      </div>
      <div>
        <div className='flex gap-2'>
          <ProjectManagement/> 
          <UserManagement/>
          <ContributionManagement/>
        </div>
        <div>
          <Statistics/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard ;