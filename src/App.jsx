import { useEffect } from 'react'
import './App.css'
import { getTopNews } from './utils/api'
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ListNews from './pages/ListNews'
import ErrorPage from './pages/ErrorPage'
import Search from './pages/Search'
import NewsDetail from './pages/NewsDetail'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:code" element={<ListNews />} />
          <Route path="/search/:keyword/:page" element={<Search />} />
          <Route path="/detail" element={<NewsDetail />} />
          <Route path="/list" element={<ErrorPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
