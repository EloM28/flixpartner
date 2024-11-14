'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Video from './Video';

// export const getServerSideProps = async () => {
//   try {
//     const res = await axios.get('https://teramaflix.com/api/posts/0/0/4/');
//     const response = await res.json();
//     console.log('first', response)
//     return { props: { medias: response } };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return { props: { medias: [], error: 'Failed to fetch data' } };
//   }
// };

const SearchVideo = () => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState('')

  
  useEffect(() => {
    async function fetchDatas(){
      try {
        const res = await fetch('http://localhost:3001/api/posts/0/0/8');
        const response = await res.json();
        console.log('first', response)
        if (response){
          setVideos(response)
        }
        else {
          setError('Videos not fetched')
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // return { props: { medias: [], error: 'Failed to fetch data' } };
      }
    }
    fetchDatas()
  }, []);

  return (
    <>
    <div className='mt-16'>
      <form className="max-w-md mx-auto">   
        <label htmlFor="" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Video......" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
      </form>
    </div>
      <div id="load_data" className={`dark:bg-medium border-white pt-[30px] grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 `}>
        {error ? (
          <div>{error}</div>
        ) : videos != null ? (
          videos?.map((video) => {
            if (video.Short === 0 && video.Visible === 1 && video.Image !== null) {
              return <Video key={video.ID} video={video} />;
            }
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default SearchVideo;