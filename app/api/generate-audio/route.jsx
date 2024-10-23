import { storage } from "@/configs/FirebaseConfig";
import textToSpeech from "@google-cloud/text-to-speech";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// const fs = require('fs');
// const util = require('util');
import { NextResponse } from "next/server";

const client = new textToSpeech.TextToSpeechClient({
    apiKey:process.env.GOOGLE_API_KEY
});

export async function POST(req){

    const {text,id} = await req.json();
    
    const storageRef = ref(storage,'OneClickVideo-files/'+id+'.mp3')
    // Construct the request
    const request = {
        input: {text: text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
        // select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);

    const audioBuffer = Buffer.from(response.audioContent, 'binary');

    await uploadBytes(storageRef,audioBuffer,{contentType:'audio/mp3'})

    const downloadUrl = await getDownloadURL(storageRef);

    console.log("downloadUrl :",downloadUrl);
    // Write the binary audio content to a local file
    // const writeFile = util.promisify(fs.writeFile);
    // await writeFile('output.mp3', response.audioContent, 'binary');
    // console.log('Audio content written to file: output.mp3');

    return NextResponse.json({'result':downloadUrl});
}