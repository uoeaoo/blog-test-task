import React from 'react'

const PreBlog: React.FC = () => {
  return (
    <div className='flex flex-column w-full justify-center items-center pt-10 h-full'>
        <div className='flex flex-row w-[90%] justify-around items-center '>
            <div className='flex flex-column justify-center items-center'>
                <h1>Here</h1>
                <p>more info</p>
            </div>
            <div className='flex flex-column justify-center items-center'>
                <h1>And Here</h1>
                <p>more info</p>
            </div>
        </div>
    </div>
  )
}

export default PreBlog