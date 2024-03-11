import React from 'react'

const Buttons = ({onClickHandler,value,title}) => {
  return (
    <button onClick={onClickHandler} value={value} className='px-4 py-1 border text-base hover:bg-primary hover-text-black text-black'>
      {title}
    </button>
  )
}

export default Buttons