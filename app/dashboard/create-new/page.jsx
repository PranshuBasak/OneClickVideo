"use client"
import { useContext, useEffect, useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomComponent from './_components/CustomComponent';
import { v4 as uuidv4 } from 'uuid';
import { VideoDataContext } from '@/app/_context/VideoDataContext';
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs/db';
import { Users, VideoDataMain } from '@/configs/schema';
import PlayerDialog from '../_components/PlayerDialog';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { eq } from 'drizzle-orm';
import { toast } from 'sonner';

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
  const [playVideo, setplayVideo] = useState()
  const [videoId, setVideoId] = useState()
  const {VideoData, setVideoData} = useContext(VideoDataContext);
  const {userDetail, setUserDetail}  = useContext(UserDetailContext);
  const {user} = useUser();
  const onHandleInputChange = (fieldName,fieldValue) =>{
    // console.log(fieldName,fieldValue)
    setFormData({...formData, 
      [fieldName]: fieldValue})
  }

  const onCreateClickHandler = () =>{

    // Check if userDetail exists and has valid credits
    if (!userDetail) {
      toast.error("Unable to fetch user details. Please try again.");
      return;
    }

    // Check if credits is less than 1
    if (userDetail.credits < 1) {
      toast.error("You don't have enough credits to create a video");
      return;
    }
    // await UpdateUserCredits()
    // Check if all required fields are filled
    if (!formData.topic || !formData.imageStyle || !formData.duration) {
      toast.error("Please fill in all required fields");
      return;
    }

    // If all checks pass, proceed with video creation
    getVideoScript();

    
    // getAudioFile(scriptMockData)
    // console.log(formData)
    // getAudioCaption(audioFileUrlMockData);
    // getImage(imageMockScript);
  }

//Get video script
const  getVideoScript = async() =>{
  setLoading(true);
  const prompt = 'Write a prompt to generate '+ formData.duration +' video on topic: '+ formData.topic +' with ai image prompt in '+ formData.imageStyle +' format for each scene and give me result in json format with imagePrompt and contentText as field , No plain text';

  console.log("Raw Prompt",prompt);

  await axios.post('/api/get-video-script',{
    prompt:prompt
    }).then(resp =>{
      console.log("Prompt Result",resp.data.result);
      
      toast.success("Prompt generated successfully");
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
      toast.success("Audio File generated successfully");
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
    toast.success("Caption generated successfully");
    setcaptions(resp?.data?.result);
    resp.data.result && getImage(videoScriptData);
  })
  
}

const getImage = async (videoScriptData) => {
  // setLoading(true);
  let images = []
  try {
    // Create array of promise functions
    const promiseFunctions = videoScriptData.map(ele => () => 
      axios.post('/api/generate-image', {
        prompt: ele?.imagePrompt
      })
    );

    // Execute promises sequentially
    for (const promiseFunction of promiseFunctions) {
      try {
        const response = await promiseFunction();
        
        if (!response.data.success) {
          throw new Error(response.data.error || 'Failed to generate image');
        }
        
        images.push(response.data.result);
        console.log('Current image added:', response.data.result);
        // toast.success("Image generated successfully");
      } catch (error) {
        console.error('Error generating image:', error);
        images.push(null);
      }
    }

    // Validate if we have any successful images
    const validImages = images.filter(url => url !== null);
    if (validImages.length === 0) {
      throw new Error('No images were generated successfully');
    }
      console.log("Final imageList:", images);
      toast.success("Image generated successfully");
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
    console.log("VideoData",VideoData)
    if(Object.keys(VideoData).length == 4){
      SaveVideoData(VideoData);
    }
  },[VideoData])

  const SaveVideoData = async(videoData) => {
    try {
      
      setLoading(true);
      if (!videoData || !videoData.videoscript || !videoData.audioFileUrl || 
        !videoData.captions || !videoData.imageList) {
      throw new Error('Missing required video data fields');
    }
      const result = await db.insert(VideoDataMain).values({
        script:videoData?.videoscript,
        audioFileUrl:videoData?.audioFileUrl,
        captions:videoData?.captions,
        imageList:videoData?.imageList,
        createdBy:user?.primaryEmailAddress?.emailAddress,
      }).returning({id:VideoDataMain?.id})
      console.log("Video Data Saved",result)
      
      toast.success("Video data saved successfully");
      await UpdateUserCredits();
      setVideoId(result[0].id);
      setplayVideo(true);
    } catch (error) {
      console.error("Error saving video data:", error.message);
      throw error;
    } finally {
      
      setLoading(false);
    }
  }

  const UpdateUserCredits = async() => {
    try {
      console.log("Updating credits for user:", user?.primaryEmailAddress?.emailAddress);
      console.log("Current credits:", userDetail?.credits);
      
      if (!user?.primaryEmailAddress?.emailAddress) {
        throw new Error("User email not found");
      }
  
      const result = await db.update(Users)
        .set({
          credits: (userDetail?.credits || 1) - 1
        })
        .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
  
      console.log("Update result:", result);
  
      if (!result || result.length === 0) {
        throw new Error("Failed to update credits in database");
      }
  
      // Update local state only after successful DB update
      setUserDetail(prev => ({
        ...prev,
        credits: (prev?.credits || 1) - 1
      }));
      setVideoData({});
      toast.success("Credits updated successfully");
      
    } catch (error) {
      console.error("Error updating credits:", error);
      toast.error("Failed to update credits: " + error.message);
      throw error; // Re-throw to handle in calling function
    }
  };

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

      {/* {loading component} */}
      <CustomComponent loading={Loading}/>

      {/* {Open Dialog Box with } */}
      <PlayerDialog playVideo={playVideo} videoId={videoId}/>
    </div>
  )
}

export default CreateNew