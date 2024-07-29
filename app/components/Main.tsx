"use client"

import React from 'react'
import CardList from './CardList'
import AddPostForm from './AddPostForm'

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-between p-14 w-[90%]">
        <div className='w-full flex flex-col'>
            <AddPostForm />
        </div>
        <div className="w-full flex flex-col">
            <h1>
                You can see all posts here:
            </h1>
            <CardList />
        </div>
    </main>
  )
}

export default Main