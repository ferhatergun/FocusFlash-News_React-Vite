import React, { useEffect ,useState} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { getKeywordNews } from '../utils/api'
import News from '../components/News'
import { Pagination } from '@mui/material'


export default function Search() {
    const params = useParams()
    const [news, setNews] = useState([])
    const [page, setPage] = useState(params.page)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        getApi()
    },[page,params])

    const getApi = async () => {
       const abc = await getKeywordNews(params.keyword,page)
       setNews(abc) 
       setLoading(true)
    }

    const handlePage = (value) => {
      navigate(`/search/${params.keyword}/${value}`)
      setPage(value)
      setLoading(false)
    }
    console.log(news)
    if(loading)
  return (
    <div>
       <p className='text-lg p-2'>{news.totalResults} Adet Sonuç Bulundu</p>
        <div className='flex flex-wrap gap-3 justify-center'>
          {
            news.articles.map((item,index)=>(
                <News item={item} key={index} />
            ))
            }      
        </div>
        <Pagination count={news.totalResults > 500 ? 5 : ( news.totalResults > 100 ? (parseInt(news.totalResults/100)) : 1)} page={parseInt(params.page)} color="primary" onChange={(e,v)=>handlePage(v)}  className='w-full flex justify-center mt-8' />
    </div>
  )
  else{
      return(
          <div>
              <span class="loader"></span>
          </div>
      )
  }
}
