import React, { useState } from 'react'
import {NavLink,Link} from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import './Navbar.css'
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    const handleMenuToggler=()=>{
        setIsMenuOpen(!isMenuOpen)
    };
    const navItems=[
      {
        path:"/",title:"Start a search"
      },
      {
        path:"/my-job",title:"My Jobs"
      },
      {
        path:"/salary",title:"Salary Estimate"
      },
      {
        path:"/post-job",title:"Post A Job"
      },
    ]
  return (
    <header>
        <nav className='main-nav'>
            <a href='/'><img src="https://res.cloudinary.com/ddzkomshk/image/upload/v1711200162/rp6vmmqbiwtq90q8bzdo.png" className='logo'/></a>
            {/* nav items */}
            <div>
            <ul className='hidden md:flex gap-6 space'>
              {
                navItems.map(({path,title})=>(
                  <li key={path} className='text-base text-primary'>
                    <NavLink
                      to={path}
                      className={({ isActive}) =>
                        isActive
                          ? "active": ""
                      }
                    >
                      {title}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
            </div>

           {/* Signup and login 
           <div className='text-base text-primary font-medium space-x-5 hidden md:block '>
              <Link to='/login' className='py-2 px-5 border rounded'>Log in</Link>
              <Link to='/sign-up'className='py-2 px-5 border rounded bg-primary text-white'>Sign up</Link>
            </div>
            */}
           
            {/*mobile menu*/}
            <div className='md:hidden block'>
              <button onClick={handleMenuToggler}>
                {
                  isMenuOpen?<FaXmark className='w-5 h-5 text-primary'/>:<FaBars className='w-5 h-5 text-primary'/> 
                }
              </button>
            </div>
        </nav>
        
        {/*navitems for moblie*/}
        <div className={`px-4 py-5 rounded-sm ${isMenuOpen?"":"hidden"}`}>
          <ul>
          {
                navItems.map(({path,title})=>(
                  <li key={path} className='text-base py-1'>
                    <NavLink
                      to={path}
                      className={({isActive}) =>
                        isActive
                          ? "active": ""
                      }
                    >
                      {title}
                    </NavLink>
                  </li>
                ))
              }
              {/*
              <li className='py-1'>
                <Link to='/login'>Log in</Link>
              </li>
              <li className='py-1'>
                <Link to='/signup'>Sign Up</Link>
              </li>
            */}
          </ul>
        </div>
    </header>
  )
}

export default Navbar

