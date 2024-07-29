"use client"

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between w-full pl-12 pr-12 pt-6 pb-6 bg-blue-50'>
        <div className='flex items-center justify-around w-1/5'>
            <h1>Lichi</h1>
            <a href="">Blog</a>
            <a href="">About</a>
        </div>
        <div className='flex'>
            <a href="">GitHub</a>
        </div>
    </header>
  )
}

export default Header