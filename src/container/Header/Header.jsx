import React from 'react'
import { AppWrapp } from '../../wrapper'
//import { motion } from 'framer-motion'; USE THIS FOR LATER PROBABLY

import './Header.scss'

const header = () => {
  return (
    <div className='app__header app__flex'>
      <div className='header--text'>
        <h1 className='name'>
          Juan Hernandez
        </h1>
        <h3>
          Full Stack Developer
        </h3>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='logo-icon' viewBox="0 0 375 374.999991"  preserveAspectRatio="xMidYMid meet" version="1.0">
        <defs>
        <clipPath id="id1">
        <path d="M 91.875 91.875 L 282.972656 91.875 L 282.972656 282.972656 L 91.875 282.972656 Z M 91.875 91.875 " clipRule="nonzero"/>
        </clipPath>
        </defs>
        <g clipPath="url(#id1)">
        <path fill="#8d99ae" d="M 187.421875 282.972656 C 161.914062 282.972656 137.894531 273.042969 119.867188 254.980469 C 101.804688 236.953125 91.875 212.933594 91.875 187.421875 C 91.875 161.914062 101.804688 137.894531 119.867188 119.867188 C 137.894531 101.804688 161.914062 91.875 187.421875 91.875 C 212.933594 91.875 236.953125 101.804688 254.980469 119.867188 C 273.042969 137.929688 282.972656 161.914062 282.972656 187.421875 C 282.972656 212.933594 273.042969 236.953125 254.980469 254.980469 C 236.953125 273.042969 212.933594 282.972656 187.421875 282.972656 Z M 187.421875 97.601562 C 163.441406 97.601562 140.871094 106.960938 123.914062 123.914062 C 106.960938 140.871094 97.601562 163.441406 97.601562 187.421875 C 97.601562 211.40625 106.960938 233.976562 123.914062 250.933594 C 140.871094 267.886719 163.441406 277.242188 187.421875 277.242188 C 211.40625 277.242188 233.976562 267.886719 250.933594 250.933594 C 267.886719 233.976562 277.242188 211.40625 277.242188 187.421875 C 277.242188 163.441406 267.886719 140.871094 250.933594 123.914062 C 233.976562 106.960938 211.40625 97.601562 187.421875 97.601562 Z M 187.421875 97.601562 " fillOpacity="1" fillRule="nonzero"/>
        </g>
        <path strokeLinecap="round" transform="matrix(3.024503, 2.225396, -2.222434, 3.020478, 91.874206, 116.989444)" fill="none" strokeLinejoin="miter" d="M 0.499964 -0.000165746 L 62.818077 0.000208933 " stroke="#8d99ae" strokeWidth="1" strokeOpacity="1"/>
      </svg>
    </div>
  )
}

export default AppWrapp(header,'home');