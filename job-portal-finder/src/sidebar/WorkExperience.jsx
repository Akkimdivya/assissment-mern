import React from 'react'
import InputField from '../components/InputField'

const WorkExerience = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Experience Level</h4>
        <div className='text-black'>
            <InputField 
                handleChange={handleChange} 
                value="" 
                title="ALL" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value="Any experience" 
                title="Any experience" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value="Intership" 
                title="Intership" 
                name="test" 
            />
           
            <InputField 
                handleChange={handleChange} 
                value="Work remotely" 
                title="Work remotely" 
                name="test" 
            />
           
        </div>
    </div>
  )
}

export default WorkExerience