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
  

function SelectTopic({onUserSelect}) {


  const options = ['Custom Prompt', 'Random AI Story','Sacry ', 'Sci-fi ', 'Fantasy ', 'Mystery ', 'Horror ', 'Comedy ', 'Romance ', 'Thriller ', 'Action ', 'Dramatic ', 'Musical ', 'Documentary ', 'Biography ', 'Historical ', 'Adventure ', 'Crime ', 'War ', 'Family ', 'Political ','Bed Time ','Motivational '] ;

  const uniqueThemeOptions = [
  'Custom Prompt','Retro-futuristic Workplace Comedy','Eco-thriller in an Underwater City','Time-traveling Food Critic\'s Adventures','Intergalactic Pet Adoption Agency','Noir Mystery in a Steampunk World','AI Love Story in a Dystopian Society','Magical Realism in Everyday Office Life','Absurdist Political Satire with Puppets','Silent Film-style Sci-fi Epic','Mockumentary about Cryptozoologists','Musical Journey Through Historical Eras','Psychological Thriller in Virtual Reality','Animated Biopic of an Inanimate Object','Adventure Crime Drama','Surrealist Cooking Show Competition','Found Footage Horror in Space','Minimalist Western Set in the Future','Reverse Aging Romance across Decades','Parallel Universe Family Sitcom','Philosophical Action Movie with Time Loops'
];

    const [selectedOption, setselectedOption] = useState();

  return (
    <div className=''>
        <h2 className="font-bold text-2xl text-primary p-2">
            Content
        </h2>
        <p className="text-gray-500 p-2">Select a topic to create content for.</p>
        <Select onValueChange={(value) =>{
          setselectedOption(value);
          value != "Custom Prompt" && onUserSelect('topic', value)
        }}>
            <SelectTrigger className="w-full mt-2 p-6 text-lg text-center text-gray-500 bg-[#fff7f1] border-2 border-primary rounded-lg">
                <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent className="bg-[#d16105] ">
              {options.map((option, index) => (
                <SelectItem key={index} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
        </Select>

        {selectedOption=="Custom Prompt" &&
          <Textarea className="mt-3 "
          onChange = {(e) => onUserSelect('topic', e.target.value)}
          placeholder="write your custom prompt here"/>
        }

    </div>
  )
}

export default SelectTopic