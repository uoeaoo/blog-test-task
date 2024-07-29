"use client";

import React, {useState} from 'react'
import useCardStore from '../store/useCardsStore'
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

const AddPostForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fullText, setFullText] = useState('');
    const addPost = useCardStore((state) => state.addPost);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addPost({title, description, fullText, comments: []});
        setTitle('');
        setDescription('');
        setFullText('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <Input 
            label='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={10}
        />
        <Input 
            label='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            maxLength={100}
        />
        <TextArea 
            label='Full text'
            value={fullText}
            onChange={(e) => setFullText(e.target.value)}
            required
            maxLength={1000}
        />
        <Button 
            label="Add Post"
            type="submit"
            onClick={() => {}}
            isEnabled={true}
        />
    </form>
  )
}

export default AddPostForm