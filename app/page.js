import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      <div className="h2">
        Hello World 
      </div>
      <div className="">
        <Button>
          Click Me
        </Button>
        <UserButton />
      </div>
    </div>
  );
}
