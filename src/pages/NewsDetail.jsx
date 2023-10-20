import React from 'react'
import { useLocation ,Link} from 'react-router-dom'

export default function NewsDetail() {
    const item = useLocation().state
    console.log(item)

    const date = new Date(item.publishedAt)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const newData = date.toLocaleDateString('tr-TR', options);

  return (
    <div>
        <p className='text-center text-lg mt-5'>{item.title}</p>
        <div className='flex flex-wrap mt-5 md:w-[90%] w-full justify-center'>
            <img className='md:w-[40%] sm:w-[50%] w-[90%]' src={item.urlToImage} alt="news" />
            <div className='text-base p-2 sm:w-[50%] w-full'>
                <p className='text-sm'>
                    <span className='font-bold'>Yazar</span> {item.author}
                </p>
                <p className='text-sm'>
                    <span className='font-bold'>Yazılma Tarihi</span> {newData}
                </p>
                <p>
                 <span className='font-bold'>Haber Açıklaması</span>   {item.content}
                </p>

            </div>
        </div>
        <Link to={item.url}>
            <p className='w-full text-center mt-10 hover:text-red-700'>
                Haberin Kaynağı İçin Tıklayınız
            </p>
        </Link>
    </div>
  )
}
