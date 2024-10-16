import { AssemblyAI } from 'assemblyai';
import { NextResponse } from 'next/server';


export async function POST(req){


    try {
        const client = new AssemblyAI({
        apiKey: process.env.NEXT_PUBLIC_CAPTION_API,
        });
        // console.log(process.env.NEXT_PUBLIC_CAPTION_API)
        const {audioFileUrl} =  await req.json();
        // console.log(audioFileUrl)
        const FILE_URL = audioFileUrl;
        // console.log(FILE_URL)
        const data = {
            audio: FILE_URL
        }
        // console.log(data)
        const transcript = await client.transcripts.transcribe(data);
        console.log(transcript.words);
        return NextResponse.json({'result': transcript.words});
    } catch (error) {
        // console.error('AssemblyAI API Error:', error);
        return NextResponse.json({'error': error.message});
    }
}