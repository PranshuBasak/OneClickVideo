import React, { use, useEffect } from 'react'
import { AbsoluteFill, Audio, Img, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion'


function RemotionVideo({script,imageList, captions,audioFileUrl,setdurationInFrame}) {
  

  const {fps} =  useVideoConfig();
  const frame = useCurrentFrame();
  const getDurationInFrames = () =>{
    setdurationInFrame(captions[captions?.length - 1]?.end/1000 * fps);
    return captions[captions?.length - 1]?.end/1000 * fps;
  }

  const getCurrentCaption = () =>{
    let currentTimeStamp = frame/30*1000; //convert frame into milisecond
    let currentCaption = captions.find((word) => currentTimeStamp >= word.start && currentTimeStamp <= word.end);
    return currentCaption?currentCaption?.text:'';
  }

    // useEffect(() => {
    //   console.log("imageList",imageList)
    // },[])

  return (
    <AbsoluteFill className='bg-black'>
      {imageList?.map((image, index) => {
        const startTime = index*getDurationInFrames()/imageList?.length;
        const duration = getDurationInFrames();
        const scale = (index)=> interpolate(
          frame,
          [startTime, startTime + duration/2, startTime + duration], //Zoom in and Zoom Out
          index%2 === 0 ? [1,1.8,1] : [1.8 , 1 , 1.8], //scale 1 to 1.8
          {extrapolateLeft:'clamp',extrapolateRight:'clamp'}
        );
        return(
        <>
          <Sequence key={index} from={startTime} durationInFrames={duration}>
            <Img
              src={image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform:`scale(${scale(index)})`
              }}
            />
            <AbsoluteFill className='text-white text-center flex justify-center mt-[150px] text-2xl'>
              {getCurrentCaption()}
            </AbsoluteFill> 
          </Sequence>
        </>
      )}
      )}
      <Audio src={audioFileUrl} />
    </AbsoluteFill>
  )
}

export default RemotionVideo