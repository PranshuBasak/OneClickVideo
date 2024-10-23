"use client"
import React, { useContext, useEffect, useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomComponent from './_components/CustomComponent';
import { v4 as uuidv4 } from 'uuid';
import { VideoDataContext } from '@/app/_context/VideoDataContext';

// const scriptMockData = "I'd be happy to write a script for a 15-second audio file. Could you give me some direction on what kind of content you're looking for? For example, is this meant to be a commercial, a podcast intro, a short story, or something else? Having a specific theme or purpose in mind would help me craft a more tailored script for you."
// const audioFileUrlMockData = 'https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/OneClickVideo-files%2F450347ca-55d7-4fcd-adc7-70126e2be815.mp3?alt=media&token=bcd4d650-24bf-4897-af2f-c0bf0bd29c31'
// const imageMockScript = [
//   {
//     "imagePrompt": "A lone knight in shining armor stands on a cliff overlooking a vast, desolate wasteland. Sun setting in the background, casting long shadows.",
//     "contentText": "Once, this land was a paradise, teeming with life. But the ancient curse has left it barren, a wasteland of broken dreams."
//   },
//   {
//     "imagePrompt": "A shimmering portal, pulsing with blue energy, opens in the center of the wasteland. A young woman emerges, clutching a glowing orb.",
//     "contentText": "Legend told of a chosen one, a savior who would break the curse. And now, she has arrived."
//   }
// ]

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [videoScript, setvideoScript] = useState();
  const [audioFileUrl, setaudioFileUrl] = useState();
  const [captions, setcaptions] = useState();
  const [imageList, setimageList] = useState();
  const {VideoData, setVideoData} = useContext(VideoDataContext);
  const onHandleInputChange = (fieldName,fieldValue) =>{
    // console.log(fieldName,fieldValue)
    setFormData({...formData, 
      [fieldName]: fieldValue})
  }

  const onCreateClickHandler = () =>{
    getVideoScript()

    // getAudioFile(scriptMockData)
    // console.log(formData)
    // getAudioCaption(audioFileUrlMockData);
    // getImage();
  }

//Get video script
const  getVideoScript = async() =>{
  setLoading(true);
  const prompt = 'Write a prompt to generate '+ formData.duration +' video on topic: '+ formData.topic +' with ai image prompt in '+ formData.imageStyle +' format for each scene and give me result in json format with imagePrompt and contentText as field , No plain text';

  console.log("Raw Prompt",prompt);

  await axios.post('/api/get-video-script',{
    prompt:prompt
    }).then(resp =>{
      console.log("Prompt Result",resp.data.result)
      setVideoData(prev=>({
        ...prev,
        'videoscript':resp.data.result
      }))
      setvideoScript(resp.data.result);
      resp.data.result &&  getAudioFile(resp.data.result)
    })
  // setLoading(false);
}

//Generate Audio File
const getAudioFile = async(videoScriptData) =>{
  // setLoading(true);
  let script = '';
  const id = uuidv4();
  videoScriptData.forEach((item) => {
    script += item.contentText + ' ';
  })
    console.log("Audio Script ",script)

    await axios.post('/api/generate-audio',{
      text:script,
      id:id
    }).then(res =>{
      setVideoData(prev=>({
        ...prev,
        'audioFileUrl':res.data.result
      }))
      setaudioFileUrl(res.data.result);
      res.data.result && getAudioCaption(res.data.result,videoScriptData)
    })
    // setLoading(false);
  };

const getAudioCaption = async(fileUrl,videoScriptData)=>{
  setLoading(true);
  console.log("AudiofileUrl",fileUrl)
  await axios.post('/api/generate-caption',{
    audioFileUrl:fileUrl
  }).then(resp =>{
    setVideoData(prev=>({
      ...prev,
      'captions':resp.data.result
    }))
    console.log("Captions ",resp.data.result)
    setcaptions(resp?.data?.result);
    resp.data.result && getImage(videoScriptData);
  })
  
}

const getImage = async (videoScriptData) => {
  // setLoading(true);
  let images = []
  try {
      const imagePromises = videoScriptData.map(async (ele) => {
          try {
              const response = await axios.post('/api/generate-image', {
                  prompt: ele?.imagePrompt
              });
              
              console.log('ImageUrl: ', response.data.result);
              images.push(response.data.result);
              if (!response.data.success) {
                  throw new Error(response.data.error || 'Failed to generate image');
              }
              
              
          } catch (error) {
              console.error('Error generating image:', error);
              return null;
          }
      });

      const results = await Promise.all(imagePromises);
      const validImages = results.filter(url => url !== null);
      
      if (validImages.length === 0) {
          throw new Error('No images were generated successfully');
      }

      setimageList(images);
      setVideoData(prev=>({
        ...prev,
        'imageList':images
      }))
      console.log('Images Array: ', images, "video script: ", videoScript, "Audio file url: ", audioFileUrl, "captions: ",captions);
  } catch (error) {
      console.error('Image generation process failed:', error);
      // Handle error appropriately in your UI
  } finally {
      setLoading(false);
  }
};

  useEffect(() => {
    console.log(VideoData)
  },[VideoData])

  return (
    <div className='md:px-20'>
      <h2 className="font-bold text-4xl text-center text-primary">
        Create New
      </h2>
      <div className="mt-10 shadow-md p-10 ">
        {/* Select topic Component */}
        <SelectTopic onUserSelect={onHandleInputChange}/>

        {/* Select Style Component */}
        <SelectStyle onUserSelect={onHandleInputChange}/>

        {/* Durations Component */}
        <SelectDuration onUserSelect={onHandleInputChange} />
        {/* Create Button */}
        <Button className="mt-10 w-full truncate" onClick={onCreateClickHandler} text="Create" >Create Short Video</Button>
      </div>

      <CustomComponent loading={Loading}/>
    </div>
  )
}

export default CreateNew