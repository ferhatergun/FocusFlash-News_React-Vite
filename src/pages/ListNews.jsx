import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getTopNews } from '../utils/api'
import News from '../components/News'

export default function ListNews() {
    const [news, setNews] = useState([])
    const params = useParams().code
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getApi()
    },[])

    const getApi = async () => {
        const abc = await getTopNews(params)
        setNews(abc.articles)
        setLoading(true)
    }
    if(loading)
  return (
    <div>
        <p className='text-lg p-2'>{news.length} Adet Sonuç Bulundu</p>
        <div className='flex flex-wrap gap-3 justify-center'>
            {
            news.map((item,index)=>(
                <News item={item} key={index} />
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
