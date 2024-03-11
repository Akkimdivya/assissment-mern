import React from 'react'
import {Link} from 'react-router-dom';
import {FiCalendar, FiClock, FiDollarSign, FiMapPin,} from "react-icons/fi"

const Card = ({data}) => {
  const {_id,companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,employmentType,description}=data;  
  return (
    <section className='card'>
        <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
            <img src={companyLogo} alt={companyName}/>
            <div>
                <h4 className='mb-1 text-primary'>{companyName}</h4>
                <h3 className='text-lg font-semibold mb-2 text-black'>{jobTitle}</h3>
                <div className='text-base flex flex-wrap gap-2 mb-2'>
                    <span className='text-primary flex items-center gap-2'>
                        <FiMapPin/>{jobLocation}
                    </span>
                    <span className='text-primary flex items-center gap-2'>
                        <FiClock/>{employmentType}
                    </span>
                    <span className='text-primary flex items-center gap-2'>
                        <FiDollarSign/>{minPrice}-{maxPrice}
                    </span>
                    <span className='text-primary flex items-center gap-2'>
                        <FiCalendar/>{postingDate}
                    </span>
                </div>
            </div>
        </Link>
    </section>
  )
}

export default Card