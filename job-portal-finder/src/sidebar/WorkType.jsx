import React from 'react'
import InputField from '../components/InputField'

const WorkType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Work Type</h4>
        <div className='text-black'>

            <InputField 
                handleChange={handleChange} 
                value="" 
                title="ALL" 
                name="test" 
            />
            
            <InputField 
                handleChange={handleChange} 
                value="Part-time" 
                title="Part-time" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value="Temporary" 
                title="Temporary" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value="Full-time" 
                title="Full-time" 
                name="test" 
            />
           
        </div>
    </div>
  )
}

export default WorkType