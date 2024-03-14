import React from 'react'
import Sidebar from '../Components/Sidebar'
import AllTasks from '../Components/AllTasks'
import style from '../CSS/Dashboard.module.css'
const Dashboard = () => {
  return (
    <div className={style.container}>

      <div className={style.sidebar}>
        <Sidebar />
      </div>

      <div className={style.allTasks}>
        <AllTasks />
      </div>

      
    </div>
  )
}

export default Dashboard
