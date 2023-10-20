import React from 'react'
import { Link } from 'react-router-dom';

export default function News({item}) {
    const textContainerStyle = {
        whiteSpace: 'normal', // Metin alt satıra geçebilir
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3, // Yükseklik sınırı (3 satır)
      };

  return (
    <Link to="/detail" state={item} className='md:w-52 sm:w-36 w-28 shadow-md rounded-md p-2 md:h-56 sm:h-48
    hover:shadow-2xl'>
       <img className='md:h-32 sm:h-24 h-16' src={item.urlToImage} alt="news" />
       <p className='sm:text-base text-sm' style={textContainerStyle}>{item.title}</p> 
    </Link>
  )
}
