import React from 'react'

const Button = ({styles, value}) => {
  return (
    <button type='button' className={` rounded-sm py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} `}>
        {value}
    </button>
  )
}

export default Button