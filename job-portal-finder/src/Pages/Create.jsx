import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const Create = () => {
    const [selectedOption]=useState(null);
    const {id}=useParams();
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills = selectedOption;
        data.jobId = id;
    
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            // Append all form data fields
            formData.append(key, data[key]);
        });
    
        // Append resume file if it exists
        if (data.resume) {
            formData.append('resume', data.resume[0]);
        }
    
        fetch("https://assissment-mern.onrender.com/post-jobApplication/", {
            method: "POST",
            body: formData  // Send form data as FormData
        })
        .then(res => res.json())
        .then((result) => {
            if (result.acknowledged === true) {
                alert('Job Posted Successfully!!!');
            }
            reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/*Form*/}
        <div className='bg-[#FAFAFA] py-10px-4 lg:px-16 py-6 px-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            {/*1st row*/}
            <input type="hidden" {...register("jobId")} value={id} />
            <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        First Name
                    </label>
                    <input className='create-job-input' type="text" placeholder="Samantha" 
                    {...register("firstName")} />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Last Name
                    </label>
                    <input className='create-job-input' type="text" placeholder="EX: Johnson" 
                    {...register("lastName")} />
                </div>
            </div>
            {/*2nd row*/}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Email
                    </label>
                    <input className='create-job-input' type="email" placeholder=" sam.johnson123@example.com" 
                    {...register("email")} />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Phone Number
                    </label>
                    <input className='create-job-input' type="text" placeholder="+1 (555) 123-4567" 
                    {...register("phoneNo")} />
                </div>
            </div>

            {/*4th row */}
            <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        City
                    </label>
                    <input className='create-job-input' type="text" placeholder=" Oaksville" 
                    {...register("city")} />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 mt-2 text-lg text-primary'>
                        Address
                    </label>
                    <input className='create-job-input' type="text" placeholder="123 Maple Street, Apt 4B" 
                    {...register("address")} />
                </div>
            </div>

            {/*5th row */}
            <div className='w-full'>
                <label className='block mb-2 mt-2 text-lg text-primary'>
                    Job Description
                </label>
                <textarea {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none' rows={6} placeholder="Additional info"/>
            </div>
           

            {/* New row for resume upload */}
    <div>
        <label className='block mb-2 mt-2 text-lg text-primary'>
            Upload Resume
        </label>
        <input
            type='file'
            accept='.pdf,.doc,.docx'
            {...register("resume")} // Add register for resume field
            className='create-job-input'
        />
    </div>

            <input type="submit" className='mt-12 block bg-primary text-white font-semibold px-8 py-2 rounded-sm curser-pointer' />
            </form>
        </div>
    </div>
  )
}

export default Create