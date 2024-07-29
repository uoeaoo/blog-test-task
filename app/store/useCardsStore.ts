
import { create } from 'zustand'

export interface Comment {
    id: string;
    text: string;
    createdAt: Date;
}

export interface Post {
    id: string;
    title: string;
    description: string;
    fullText: string;
    comments: Comment[];
    commentsCount: number;
    createdAt: Date;
}

interface PostState {
    posts: Post[];
    addPost: (post: Omit<Post, 'id' | 'createdAt' | 'commentsCount'>) => void;
    addComment: (postId: string, comment: Omit<Comment, 'id' | 'createdAt'>) => void;
}

const staticCard: Post = {
    id: '1',
    title: 'Static Card Title',
    description: 'This is a static card description',
    fullText: 'This is a static card full text This is a static card full text This is a static card full text This is a static card full text This is a static card full text This is a static card full text This is a static card full text This is a static card full text This is a static card full text',
    comments: [
        {
            id: '1',
            text: 'This is a static comment',
            createdAt: new Date(),
        },
    ],
    commentsCount: 1,
    createdAt: new Date(),
}

const useCardStore = create<PostState>((set) => ({
    posts: [staticCard],
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
                commentsCount: post.commentsCount + 1,
            }
            : post
            ),
        })),
}));

export default useCardStore;