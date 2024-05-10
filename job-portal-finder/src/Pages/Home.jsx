import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import {useState} from "react";
import Card from '../components/Card';
import Jobs from './Jobs';
//import Sidebar from '../sidebar/Sidebar';
import Newletter from '../components/Newletter';

const Home = () => {
  const [selectedCategary,setSelectedCategory]=useState(null);
  const [jobs,setJobs]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [currentPage,setCurrentPage]=useState(1);
  const itemsPerPage=6;
  
  useEffect(()=>{
    setIsLoading(true);
    fetch("https://assissment-mern.onrender.com/all-jobs/").then(res=>res.json()).then(data=>{
      setJobs(data)
      setIsLoading(false)
    })
  },[])
  //console.log(jobs)

  const [query,setQuery]=useState("");
  const handleInputChange=(event)=>{
    setQuery(event.target.value)
  }

  //job filter

  const filteredItems=jobs.filter(
    (job)=>job.jobTitle)  ;
  
  
  //radio filter
  const handleChange=(event)=>{
    setSelectedCategory(event.target.value)
  }
  //button filter
  const handleClick=(event)=>{
    setSelectedCategory(event.target.value)
  }

  const calculatePageRange=()=>{
    const startIndex=(currentPage-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;
    return {startIndex, endIndex};
  }

  //function for next page
  const nextPage=()=>{
    if(currentPage<Math.ceil(filteredItems.length/itemsPerPage)){
      setCurrentPage(currentPage+1);
    }
  }

  //function for previous page

  const prevPage=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }

  //main function

  const filteredData=(jobs,selected,query)=>{
    let filterJobs=jobs;
    //filter input items 
    if(query){
      filterJobs=filteredItems;
    }
    if(selected){
      filterJobs=filterJobs.filter(({jobLocation,maxPrice,
        experienceLevel,salaryType,employmentType,postingDate})=>
          jobLocation===selected||
          parseInt(maxPrice)<=parseInt(selected)||
          parseInt(postingDate)<=parseInt(selected)||
          salaryType===selected||
          employmentType===selected||
          experienceLevel===selected
        );
      //console.log(filterJobs)
    }
    
    

    //slice the data

    const {startIndex,endIndex}=calculatePageRange();
    filterJobs=filterJobs.slice(startIndex,endIndex);
    return filterJobs.map((data,i)=><Card key={i} data={data}/>)
  }
  const result= filteredData(jobs,selectedCategary,query)
  return (
    <div className='text-primary'>
      <Banner query={query} handleInputChange={handleInputChange} />
       {/*Main content*/}
       <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/*Left card
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
          </div>
         
        Job card*/}
        <div className='bg-white p-4 rounded'><Newletter/></div> 
        <div className='col-span-2 bg-white rounded '>
          {
            isLoading?(<p>Loading...</p>):result.length>0 ? (<Jobs result={result}/>):
            <>
              <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
              <p className=''>No data found!</p>
            </>
          }

          {/* Pagination here */}

          {
            result.length>0?(
              <div className='flex justify-center mt-4 space-x-8 text-black/80'>
                <button onClick={prevPage} disabled={currentPage===1} className='haver:underline'>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length/itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage===Math.ceil(filteredItems.length/itemsPerPage)} className='haver:underline'>Next</button>
              </div>  
            ):""
          }
          
        </div>
        {/*Right card*/}
        
       </div>
    </div>
  )
}

export default Home
