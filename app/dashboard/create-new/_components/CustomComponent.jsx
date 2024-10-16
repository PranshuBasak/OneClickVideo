import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from "next/image"
  

function CustomComponent({loading}) {
  return (
    <AlertDialog open={loading}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
            <div className="flex flex-col items-center justify-center h-full">
                <Image src="/soon.gif" alt="Loading..." width={100} height={100} />
                <h2 className="">Generating video do not refresh the page...</h2>
            </div>
        </AlertDialogContent>
    </AlertDialog>

  )
}

export default CustomComponent