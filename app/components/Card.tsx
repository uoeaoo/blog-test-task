"use client"

import React, {useState} from 'react'
import { Post } from '../store/useCardsStore'
import { format } from 'date-fns'
import Button from './Button'
import Modal from './Modal'

interface CardProps {
  post: Post
}
const Card: React.FC<CardProps> = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <h2>
        {post.title}
      </h2>
      <p>
        {post.description}
      </p>
      <span>
        Created at: {format(new Date(post.createdAt), 'MM/dd/yyyy, hh:mm:ss a')}
      </span>
      <div>
        <span>
          {post.commentsCount} {post.commentsCount === 1 ? 'comment' : 'comments'}
        </span>
      </div>
      {post.comments.length > 0 ? (
        <div>
          {post.comments.map((comment) => (
            <div key={comment.id}>
              <p>
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          No comments here yet
        </div>
      )}
      <Button 
        label='Read more'
        type='button'
        onClick={openModal}
        isEnabled={true}
      />
      <Modal 
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title={post.title}
        description={post.description}
        fullText={post.fullText}
      />
    </div>
  )
}

export default Card