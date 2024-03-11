import Buttons from './Buttons'
import React from 'react'
import InputField from '../components/InputField'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>
            Salary
        </h4>
        <div className='mb-4'>
            <Buttons onClickHandler={handleClick} value="Hourly" title="Hourly"/>
            <Buttons onClickHandler={handleClick} value="Monthly" title="Monthly"/>
            <Buttons onClickHandler={handleClick} value="Yearly" title="Yearly"/>
        </div>
        <div className='text-black'>
        
            <InputField 
                handleChange={handleChange} 
                value='' 
                title="ALL" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value={30} 
                title="< 30000k" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value={50} 
                title="< 50000k" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value={80} 
                title="< 80000k" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value={100} 
                title="< 1000000k" 
                name="test" 
            />
        </div>
    </div>
  )
}

export default Salary