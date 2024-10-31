import React, { useState } from 'react';
import { Thumbnail } from "@remotion/player";
import RemotionVideo from './RemotionVideo';
import PlayerDialog from './PlayerDialog';

function VideoList({ videoList }) {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [videoId, setVideoId] = useState();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-6 sm:mt-8 lg:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {videoList.map((video, index) => (
            <div 
              key={video.id || index}
              className="flex justify-center transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setOpenVideoDialog(Date.now());
                setVideoId(video?.id);
              }}
            >
              <div className="w-full max-w-[250px]">
                <Thumbnail
                  component={RemotionVideo}
                  compositionWidth={250}
                  compositionHeight={400}
                  frameToDisplay={30}
                  durationInFrames={120}
                  fps={30}
                  style={{
                    borderRadius: 15,
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '250/400'
                  }}
                  inputProps={{
                    ...video,
                    setdurationInFrame: (v) => console.log(v)
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <PlayerDialog 
        playVideo={openVideoDialog} 
        videoId={videoId} 
        onClose={() => setOpenVideoDialog(false)} 
      />
    </div>
  );
}

export default VideoList;