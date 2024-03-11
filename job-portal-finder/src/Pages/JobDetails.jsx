import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const JobDetails = () => {
  const {id}=useParams();
  const [jobs,setJobs]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  
  
  useEffect(()=>{
    setIsLoading(true)
    fetch(`https://assissment-mern.onrender.com/all-jobs/${id}`).then(res=>res.json()).then(data=>{
      setJobs(data)
      setIsLoading(false)
    })
  },[])

  //console.log(jobs.createAt)
  const calculateDaysPassed = () => {
    const currentDate = new Date();
    const createdDate = new Date(jobs.createAt);
    const differenceInTime = currentDate.getTime() - createdDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };
  
  const daysPassed = calculateDaysPassed();
  
    return (
      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* table */}
        {
          isLoading?(<div className='flex item-center'>
            <p>Loading...</p>
          </div>):( <div>
          {
            
            <div> 
              <div className='flex justify-between'>
                <h1 className="text-4xl font-bold mb-3 py-3">
                  {jobs.jobTitle}
                </h1>
                <Link to={`/apply/${id}`}>
                  <button className='bg-primary py-3 px-4 text-white md:rounded-s-none rounded mt-3'>Apply</button>
                </Link>
              </div>
              <img src={jobs.companyLogo} alt='logo'/>
              <h3 className="text-2xl">
                {jobs.companyName}
              </h3>
              <p className='text-primary block mb-2 mt-2 text-lg'>{jobs.employmentType} ({jobs.jobLocation})</p>
              <p>{jobs.salaryType} Salary: ${jobs.minPrice} - ${jobs.maxPrice}</p>
              <p className='border-t-0 align-middle border-l-0 border-r-0 text-xs'>{jobs.description}</p>
              <p className='block mt-2 text-s'>Posted by: {jobs.postedBy} {daysPassed} days ago</p>
              <ul className='border-t-0  align-middle border-l-0 border-r-0 text-xs font-bold'>
                {jobs.skills.map((skill, index) => (
                  <li key={index}>{skill.label}</li>
                ))}
              </ul>
            </div>           
          } 
          </div>)
      }
      </div>
    )
}

export default JobDetails