"use client"

import React from 'react'
import useCardStore from '../store/useCardsStore'
import Card from './Card'

const CardList: React.FC = () => {
    const posts = useCardStore((state) => state.posts);

  return (
    <div>
        {posts.map((post) => (
            <Card key={post.id} post={post} />
        ))}
    </div>
  )
}

export default CardList