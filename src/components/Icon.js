import React, { useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { FaPlus } from 'react-icons/fa'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const Icon = ({ handleSearchNote }) => {
    
  const [toggle, setToggle] = useState(true)


     const openNav = () => {
       // navRef.current.style.width = ${240};
       document.getElementById('mySidebar').style.width = '100%'
     }
     const closeNav = () => {
       document.getElementById('mySidebar').style.width = '0px'

       // navRef.current.style.width = ${0}px;
     }
     const handleToggle = () =>{
        setToggle(!toggle)
        if(toggle === true){
            openNav()
        }
        else{
            closeNav()
        }
     }
  return (
    <div className='parent-icon'>
      <div className='sub-icon'>
        <div className='search'>
          <FaSearch onClick={handleToggle} className="delete-icon"/>
          <input
            onChange={(event) => handleSearchNote(event.target.value)}
            type='text'
            placeholder='type to search...'
            id='mySidebar'
          />
        </div>
        <BiDotsVerticalRounded />
      </div>
    </div>
  )
}

export default Icon
