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
      <div id="load_data" className={`dark:bg-medium dark:border-medium dark:border-t-white border-4 border-t-blue-500  border-white pt-[30px] grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16  gap-3 `}>
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