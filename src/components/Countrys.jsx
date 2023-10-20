import React from 'react'
import { Link } from 'react-router-dom'

export default function Countrys() {
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
        <Link to="/list/ae">
          <img className='l:h-20 l:w-40 md:h-16 md:w-32 sm:h-12 sm:w-20 h-10 w-14 object-fill' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/240px-Flag_of_the_United_Arab_Emirates.svg.png" 
          alt="birleşik arap emirlikleri" />
        </Link>
        <Link to="/list/ca">
          <img className='l:h-20 l:w-40 md:h-16 md:w-32 sm:h-12 sm:w-20 h-10 w-14 object-fill' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/240px-Flag_of_Canada.svg.png" 
          alt="kanada" />
        </Link>
        <Link to="/list/cn">
          <img className='l:h-20 l:w-40 md:h-16 md:w-32 sm:h-12 sm:w-20 h-10 w-14 object-fill' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/180px-Flag_of_the_People%27s_Republic_of_China.svg.png" 
          alt="çin" />
        </Link>
        <Link to="/list/de">
          <img className='l:h-20 l:w-40 md:h-16 md:w-32 sm:h-12 sm:w-20 h-10 w-14 object-fill' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/200px-Flag_of_Germany.svg.png" 
          alt="almanya" />
        </Link>
        <Link to="/list/fr">
          <img className='l:h-20 l:w-40 md:h-16 md:w-32 sm:h-12 sm:w-20 h-10 w-14 object-fill' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/180px-Flag_of_Romania.svg.png" 
          alt="romanya" />
        </Link>
        <Link to="/list/gb">
          <img className='l:h-20 l:w-40 md:h-16 md:w-32 sm:h-12 sm:w-20 h-10 w-14 object-fill' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/228px-Flag_of_the_United_States.svg.png" 
          alt="amerika" />
        </Link>
        <Link to="/list/in">
          <img className='l:h-20 l:w-40 md:h-16 md:w-32 sm:h-12 sm:w-20 h-10 w-14 object-fill'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" 
          alt="ingiltere" />
        </Link>
    </div>
  )
}
