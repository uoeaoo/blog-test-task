// в хранилище должны находиться такие состояния как, карточки (посты), изначально она будет одна созданная мной, далее, 
// titles, descriptions, full-texts, comments, comments count, isEditing

import { createStore } from 'zustand/vanilla'
import { create } from 'zustand'

interface Comment {
    id: string;
    text: string;
    createdAt: Date;
}

interface Card {
    id: string;
    title: string;
    description: string;
    fullText: string;
    comments: Comment[];
    commentsCount: number;
    createdAt: Date;
}

interface CardState {
    posts: Card[];
    addPost: (post: Omit<Card, 'id' | 'createdAt' | 'commentsCount'>) => void;
    addComment: (postId: string, comment: Omit<Comment, 'id' | 'createdAt'>) => void;
}

const useCardStore = createStore<CardState>((set) => ({
    posts: [],
    addPost: (post) => 
        set((state) => ({
            posts: [
                ...state.posts,
                {
                    ...post,
                    id: `${Date.now()}`,
                    createdAt: new Date(),
                    commentsCount: 0,
                    comments: [],
                },
            ],
        })),
    addComment: (postId, comment) => 
        set((state) => ({
            posts: state.posts.map((post) => 
            post.id === postId 
            ? {
                ...post, 
                comments: [
                    ...post.comments,
                    {
                        ...comment,
                        id: `${Date.now()}`,
                        createdAt: new Date()
                    },
                ],
                commentsCount: totalComments([...post.comments, comment]),
            }
            : post
            ),
        })),
}));

function totalComments (comments: Comment[]): number {
    return comments.length;
}

export default useCardStore;