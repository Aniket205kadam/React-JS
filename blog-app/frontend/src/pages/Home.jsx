import React from 'react';
import { useEffect, useState } from 'react';
import { DatabasesService } from '../appwrite/database';
import { AuthService } from '../appwrite/auth';
import { PostCard, Container } from '../components';

function Home() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        DatabasesService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts);
            }
        })
    }, []);

    if (posts.lenght === 0) {
        return (
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            There is no Post
                        </h1>
                    </div>
                </div>
            </Container>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
  
}

export default Home