"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomComponent from './_components/CustomComponent';
import { v4 as uuidv4 } from 'uuid';

// const scriptMockData = "I'd be happy to write a script for a 15-second audio file. Could you give me some direction on what kind of content you're looking for? For example, is this meant to be a commercial, a podcast intro, a short story, or something else? Having a specific theme or purpose in mind would help me craft a more tailored script for you."
const audioFileUrlMockData = 'https://firebasestorage.googleapis.com/v0/b/saas-project-4d7c8.appspot.com/o/OneClickVideo-files%2F450347ca-55d7-4fcd-adc7-70126e2be815.mp3?alt=media&token=bcd4d650-24bf-4897-af2f-c0bf0bd29c31'


function CreateNew() {
  const [formData, setFormData] = useState([]);
  const [Loading, setLoading] = useState(false)
  const [videoScript, setvideoScript] = useState()
  const [audioFileUrl, setaudioFileUrl] = useState()
  const [captions, setcaptions] = useState()
  const onHandleInputChange = (fieldName,fieldValue) =>{
    // console.log(fieldName,fieldValue)
    setFormData({...formData, 
      [fieldName]: fieldValue})
  }

  const onCreateClickHandler = () =>{
    // getVideoScript()

    // getAudioFile(scriptMockData)
    // console.log(formData)
    getAudioCaption(audioFileUrlMockData);
  }

//Get video script
const  getVideoScript = async() =>{
  setLoading(true);
  const prompt = 'Write a prompt to generate '+ formData.duration +' video on topic: '+ formData.topic +' historical story with ai image prompt in '+ formData.imageStyle +' format for each scene and give me result in json format with imagePrompt and contentText as field , No plain text';

  console.log(prompt);

  const result = await axios.post('/api/get-video-script',{
    prompt:prompt
    }).then(resp =>{
      console.log(resp.data.result)
      setvideoScript(resp.data.result);
      getAudioFile(resp.data.result)
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
    console.log(script)

    await axios.post('/api/generate-audio',{
      text:script,
      id:id
    }).then(res =>{
      setaudioFileUrl(res.data.url);
    })
    // setLoading(false);
  };

const getAudioCaption = async(fileUrl)=>{
  setLoading(true);

  await axios.post('/api/generate-caption',{
    audioFileUrl:fileUrl
  }).then(resp =>{
    console.log(resp.data.result)
    setcaptions(resp?.data.result);
  })
  setLoading(false);
}

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