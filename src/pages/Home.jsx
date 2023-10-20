import React, { useEffect ,useState} from 'react'
import Countrys from '../components/Countrys'
import { getTopNews } from '../utils/api'
import News from '../components/News'

export default function Home() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getApi()
  },[])

  const getApi = async () => {
    const abc = await getTopNews('us')
    setNews(abc.articles)
    setLoading(true)

  }
  if(loading)
  return (
    <div className=''>
      <p className='text-center text-lg p-2'>Başlıca Gündemdeki Ülkeler</p>
      <Countrys />
      <p className='text-lg p-2'>Günün Manşetleri</p>
      <div className='flex flex-wrap gap-3 justify-center'>
        {
          news.map((item,index)=>(
            <News item={item}  key={index} />
          ))
        }      
      </div>
    </div>
  )
  else{
    return(
      <span class="loader"></span>
    )
  }
}
