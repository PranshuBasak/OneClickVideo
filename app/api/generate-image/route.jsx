import { NextResponse } from "next/server";
import Replicate from "replicate";
import { storage } from "@/configs/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


export async function POST(req) {
    try {
        const { prompt } = await req.json();
        const filePath = 'Image-files/'+Date.now()+'.jpg';
        // Initialize Replicate
        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
        });

        // Generate image using Replicate
        const output = await replicate.run(
            "bytedance/sdxl-lightning-4step:5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",
            {
                input: {
                    prompt: prompt,
                    height: 1280,
                    width: 1024,
                    num_outputs: 1,
                    negative_prompt: "bad anatomy, bad proportions, blurry text, cropped, out of frame, worst quality, low quality"
                }
            }
        );

        if (!output || !output[0]) {
            throw new Error('No output from image generation');
        }

        // Fetch the image and convert to buffer
        const response = await fetch(output);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Create a reference to Firebase Storage
        const storageRef = ref(storage, filePath);

        // Upload the buffer to Firebase Storage
        await uploadBytes(storageRef, buffer, {
            contentType: 'image/jpg'
        });

        // Get the download URL
        const downloadUrl = await getDownloadURL(storageRef);

        console.log("Image uploaded successfully:", downloadUrl);

        return NextResponse.json({
            'result': downloadUrl,
            'success': true
        });

    } catch (error) {
        console.error("Error generating/saving image:", error);
        return NextResponse.json({
            'error': error.message,
            'success': false
        });
    }
}