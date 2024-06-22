import React from 'react'
import HeaderDashboard from '../components/headerDasbord';
import Sidebar from '../components/sidebare';
import UserManagement from '../components/userManagement';
import ProjectManagement from '../components/projectManagement';
import Statistics from '../components/statistic';

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
            <div className='border border-gray-8OO shadow m-5  p-5'>
              <div className='flex'>
                 <Statistics/>
                <UserManagement/>
                <ProjectManagement/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;