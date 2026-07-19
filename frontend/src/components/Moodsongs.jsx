import React, { useState, useRef } from 'react'

const Moodsongs = ({ songs }) => {
   const [isPlaying, setIsPlaying] = useState(null);
   const audioRefs = useRef([]);

   const handleplaypause = (index) => {
      const audio = audioRefs.current[index];
      if (isPlaying === index) {
         audio.pause();
         setIsPlaying(null);
      } else {
         if (isPlaying !== null) {
            audioRefs.current[isPlaying]?.pause();
         }
         audio.play();
         setIsPlaying(index);
      }
   }
  
    
  


  return (
    <div className='p-10'>
        <h2 className='font-bold mb-5  text-2xl  text-red-500 '>Recommended Songs</h2>
        
           {songs.map((song, index) => (
               <div key={index}>
                   <div className='flex justify-between '>
                  <div className='mb-4  font-normal text-yellow-500 text-xl'>
                      <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                  </div>
                   <div className='flex gap-5'>
                      <audio
                        ref={(el) => (audioRefs.current[index] = el)}
                        className='hidden'
                      src={song.audio} controls
                      ></audio>

                        
                    <button onClick={()=> handleplaypause(index)}>
                      {isPlaying === index ? '⏸️' : '▶️'}
                    </button>
                   </div>

                   
                    </div>
                     </div>

                
            ) ) }
        
    </div>
)
}


export default Moodsongs
