import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPosting from './JobPosting'
import WorkType from './WorkType'
import WorkExerience from './WorkExperience'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div>
        <h3 className='text-black font-bold mb-2 text-lg'>Filter</h3>
        {/*<Location handleChange={handleChange}/>*/}
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        {/*<JobPosting handleChange={handleChange}/>*/}
        <WorkType handleChange={handleChange}/>
        <WorkExerience handleChange={handleChange}/>
    </div>
    
  )
}

export default Sidebar