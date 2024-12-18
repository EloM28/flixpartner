import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImageComp from './ImageComp'
import { useRouter, useSearchParams } from 'next/navigation'

const usePeriod = (Created_at)=>{
  const today   = new Date();
  const createDate = new Date(Created_at);
  const nombre = (today-createDate)/(1000)
  let number = 0
  switch (true){
    case nombre<60:
      number = nombre.toFixed(0)+' secondes ago'
      break
    case nombre>=60 && nombre<3600:
      number = (nombre /60).toFixed(0) +' munites ago'
      break
    case nombre>=3600 && nombre<(3600*24):
      number = (nombre /(3600)).toFixed(0) +' hours ago'
      break
    case nombre>=(3600*24) && nombre<(3600*24*7):
      number = (nombre /(3600*24)).toFixed(0) +' days ago'
      break
    case nombre>(3600*24*7) && nombre<(3600*24*30):
      number = (nombre /(3600*24*7)).toFixed(0) +' weeks ago'
      break
    case nombre>=(3600*24*30) && nombre<(3600*24*30*12):
      number = (nombre /(3600*24*30)).toFixed(0) +' months ago'
      break
    default:
      number = (nombre /(3600*24*30*12)).toFixed(0) +' years ago'
      break
}
return number
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

//handle update time format
function formatTime(time) {
  const hours = Math.floor(time / 3600);
  time %= 3600;

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  let formattedTime = '';

  if (hours > 0) {
    formattedTime += hours < 10 ? `0${hours}:` : `${hours}:`;
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  formattedTime += `${formattedMinutes}:${formattedSeconds}`;

  return formattedTime;
}

function Video({video}) {
  const period = usePeriod(video.Created_at)
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const [error, setError] = useState('')

  const handleDetail = async(id, views) => {
    try {
      const params = new URLSearchParams(searchParams)
      params.set('v', id)
      params.set('vw', views)
      push(`/client/dashboard/sharing-video/detail-video?${params.toString()}`)
    } catch (error) {
      console.error(error)
      setError('Error')
    }
  }
  return (
    <>
       <div className='dark:bg-medium dark:border-2 dark:border-slate-800 bg-white rounded-md '>
        
          <div className="imag relative w-[100%] sm:h-[170px] h-[220px] flex justify-center items-center  sm:rounded bg-gray-300  overflow-hidden">
             {
              video.Short == 1 ?
              <button href='#' onClick={()=>handleDetail(video.uniid, video.Views)}> 
                 <ImageComp src={video.Image} w={800} h={800} a={'video'} />
              </button>
              :
              <button href='#' onClick={()=>handleDetail(video.uniid, video.Views)}>
                <ImageComp src={video.Image} w={800} h={800} a={'video'} />
              </button>
             }
             {video.Time>0 && (<span className='bg-black bg-opacity-70 text-white text-sm  absolute left-2 bottom-1 px-1 rounded-md'>{formatTime(video.Time)}</span> ) }
          </div>
          <div className='dark:bg-medium id  py-2 pl-4'>
          <h1 title={video.Title} className="dark:text-white font-bold text-slate-900 text-lg ml-2 mb-2 sm:ml-0">{truncateText(video.Title, 25)}</h1>
            <Link href={`#`}>
            <div className="flex gap-2 justify-start mb-4  ml-2 sm:ml-0">
              {
                  video.Photo ? 
                  <Image width={500} height={500} alt='profile' 
                  className=" w-10  h-10 my-1 ml-15 rounded-full " 
                  src={`http://localhost:3001/Thumbnails/${video.Photo}`}
                  priority={true} placeholder='blur' 
                  blurDataURL="data:image/png;base64,...(base64-encoded image data)"/>
                  :
                  <Image width={500} height={500} alt='profile' 
                  className=" w-10  h-10 my-1 ml-15 rounded-full " 
                  src={`/img/logo.png`} 
                  priority={true} placeholder='blur'
                  blurDataURL="data:image/png;base64,...(base64-encoded image data)"/>
                }
            <div className="flex flex-col  space-y-2">
                <div className="right-5">
                    <div className="dark:text-white text-md text-slate-900 opacity-90  font-bold">{video.PageName}</div>
                    <span className="dark:text-white text-xs text-slate-900 opacity-70 font-semibold">{video.Views} Views  {period}</span>
                </div>
            </div>
            </div>
        </Link>
          </div>
          
    </div> 
    </>
  )
}

export default Video