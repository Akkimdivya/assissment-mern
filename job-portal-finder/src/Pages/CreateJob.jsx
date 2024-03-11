import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CreatableSelect from "react-select/creatable"

const CreateJob = () => {
    const [selectedOption,setSelectionOption]=useState(null);

    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills=selectedOption;
        //console.log(data)
        fetch("https://assissment-mern.onrender.com/post-job/",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
            .then(res=>res.json())
            .then((result)=>{
            //console.log(result)
            if(result.acknowledged===true){
                alert('Job Posted Successfully!!!')
            }
            reset()
        })
    }


      const option=[
        {value:"JavaScript",label:"JavaScript"},
        {value:"C++",label:"C++"},
        {value:"Java",label:"Java"},
        {value:"Python",label:"Python"},
        {value:"Ruby",label:"Ruby"},
        {value:"C",label:"C"},
      ]

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/*Form*/}
        <div className='bg-[#FAFAFA] py-10px-4 lg:px-16 py-6 px-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            {/*1st row*/}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Job Title
                    </label>
                    <input className='create-job-input' defaultValue={"Wed Developer"} type="text" placeholder="Job Title" 
                    {...register("jobTitle")} />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Company Name
                    </label>
                    <input className='create-job-input' type="text" placeholder="EX: Microsoft" 
                    {...register("companyName")} />
                </div>
            </div>
            {/*2nd row*/}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Minimum Salary
                    </label>
                    <input className='create-job-input' type="text" placeholder="$20k" 
                    {...register("minPrice")} />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Maximum Salary
                    </label>
                    <input className='create-job-input' type="text" placeholder="$100k" 
                    {...register("maxPrice")} />
                </div>
            </div>
            {/*3rd row*/}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Salary Type
                    </label>
                    <select {...register("salaryType")} className='create-job-input'>
                        <option value="">Choose Your Salary</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Job Location
                    </label>
                    <input className='create-job-input' type="text" placeholder="Seattle" 
                    {...register("jobLocation")} />
                </div>
            </div>

            {/* 4th row*/}

            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Job Posting Date
                    </label>
                    <input className='create-job-input' type="date" placeholder="Ex: 2024-03-03" 
                    {...register("postingDate")} />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Experience Level
                    </label>
                    <select {...register("experienceLevel")} className='create-job-input'>
                        <option value="">Choose Your experience</option>
                        <option value="Any experience">Any experience</option>
                        <option value="Internship">Internship</option>
                        <option value="Work remotely">Work remotely</option>
                    </select>
                </div>
                
            </div>

            {/*5th row */}
            <div>
                <label className='block mb-2 mt-2 text-lg text-primary'>
                    Required Skill Sets
                </label>
                <CreatableSelect 
                onChange={setSelectionOption} 
                options={option} isMulti 
                className='create-job-input py-4' 
                defaultValue={selectedOption}/>
            </div>

            {/*6th row */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Company Logo
                    </label>
                    <input className='create-job-input' type="url" placeholder="paste your company logo" 
                    {...register("companyLogo")} />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Employment Type
                    </label>
                    <select {...register("employmentType")} className='create-job-input'>
                        <option value="">Choose Your experience</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Temporary">Temporary</option>
                    </select>
                </div>
                
            </div>

            {/*7th row */}
            <div className='w-full'>
                <label className='block mb-2 mt-2 text-lg text-primary'>
                    Job Description
                </label>
                <textarea {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none' rows={6} placeholder="Job Description"/>
            </div>
            {/*last*/}
            <div>
                <label className='block mb-2 mt-2 text-lg text-primary'>
                    Job Posted By
                </label>
                <input
                type='email'
                placeholder='your email'
                {...register("postedBy")}
                className='create-job-input'
                />
            </div>

            <input type="submit" className='mt-12 block bg-primary text-white font-semibold px-8 py-2 rounded-sm curser-pointer' />
            </form>
        </div>
    </div>
  )
}

export default CreateJob