import React from 'react'
import SelectTopic from './_components/SelectTopic'

function CreateNew() {
  return (
    <div className='md:px-20'>
      <h2 className="font-bold text-4xl text-center text-primary">
        Create New
      </h2>
      <div className="mt-10 shadow-md p-10 ">
        {/* Select topic Component */}
        <SelectTopic />

        {/* Select Style Component */}
          

        {/* Durations Component */}

        {/* Create Button */}
      </div>
    </div>
  )
}

export default CreateNew