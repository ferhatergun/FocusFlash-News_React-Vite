import React ,{useState}from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [search, setSearch] = useState('')
  return (
    <div className='bg-white h-14 flex items-center px-5 gap-[4%] shadow-sm w-full z-10 top-0 sticky'>
      <Link to="/" className='font-bold'>FocusFlash News</Link>
      <Link to="/">Anasayfa</Link>
      <div className="flex">
        <input
          type="text"
          placeholder="Ara"
          className="border border-gray-300 rounded-l-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-red-400"
          onChange={(e) => setSearch(e.target.value)}
        />
        <a href={`/search/${search}/1`}  className="bg-red-500 text-white rounded-r-md px-4 py-1">
          Ara
        </a>
    </div>

    </div>
  )
}
