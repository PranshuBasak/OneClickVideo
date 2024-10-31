"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function SelectDuration({onUserSelect}) {
    const options = ['30 Seconds', '45 Seconds', '60 Seconds'];
    const [selectedOption, setselectedOption] = useState();
    return (
        <div className=''>
            <h2 className="font-bold text-2xl text-primary p-2 pt-7">
                Duration
            </h2>
            <h2 className="text-gray-500 p-2">Select a time duration for your contant</h2>
            <Select onValueChange={(value) =>{
              setselectedOption(value);
              onUserSelect('duration', value)
            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg text-gray-500 text-center bg-[#fff7f1] border-2 border-primary rounded-lg">
                    <SelectValue placeholder="Content Duration" />
                </SelectTrigger>
                <SelectContent className="bg-[#d16105]">
                  {options.map((option, index) => (
                    <SelectItem key={index} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
            </Select>
    
        </div>
      )
}

export default SelectDuration