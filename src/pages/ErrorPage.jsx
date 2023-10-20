import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] w-full">
      <img 
        src="/error.png"
        width={400}
        alt="resim bulunamadı"
      />
      <h2>Oops! Bir Hata Oluştu</h2> <br/>
      <Link to="/" className="text-red-700">Ana Sayfaya Git</Link>
    </div>
  )
}
