import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Player } from "@remotion/player";
import RemotionVideo from "./RemotionVideo";
import { Button } from "@/components/ui/button";
import { VideoDataMain } from "@/configs/schema";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import Link from "next/link";


function PlayerDialog({playVideo,videoId}) {
    
    const router = useRouter();
    const [openDialog, setOpenDialog] = useState(false);
    const [videoData, setvideoData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [durationInFrame, setdurationInFrame] = useState(100);


    useEffect(() => {
        if (playVideo) {
            setOpenDialog(true);  // Directly set to true to open
            videoId && getVideoData();
        }
    }, [playVideo]);

    const getVideoData = async () => {
      try {
          setIsLoading(true);
          const result = await db.select().from(VideoDataMain).where(eq(VideoDataMain.id, videoId));
          // console.log("result", result[0]);
          setvideoData(result[0]);
      } catch (error) {
          console.error("Error fetching video data:", error);
      } finally {
          setIsLoading(false);
      }
  };

//   if (!router.isReady) return null; 

  return (
    <Dialog open={openDialog}>
        <DialogContent className="bg-white flex flex-col items-center">
            <DialogHeader>
            <DialogTitle className="text-3xl font-bold my-5">Your Video is ready</DialogTitle>
            <DialogDescription>
             {isLoading ? (
                  <div className="flex items-center justify-center h-[450px] w-[300px]">
                      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"/>
                  </div>
              ) : videoData ? (
                  <Player
                      component={RemotionVideo}
                      durationInFrames={Number(durationInFrame.toFixed(0))}
                      compositionWidth={300}
                      compositionHeight={450}
                      fps={30}
                      controls={true}
                      inputProps={{
                        ...videoData,
                        setdurationInFrame: (frameValue) =>setdurationInFrame(frameValue)
                      }}
                  />
              ) : (
                  <div className="flex items-center justify-center h-[450px] w-[300px]">
                      <div>Error loading video data</div>
                  </div>
              )}
              <div className="flex gap-10 mt-10">
                  <Button variant="ghost" onClick={()=>{
                    router.replace('/dashboard');
                    setOpenDialog(false);
                    }}>Cancel</Button>
                <Button>Export</Button>
              </div>

            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>

  )
}

export default PlayerDialog