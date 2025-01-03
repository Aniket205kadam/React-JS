import React from 'react';
import { useEffect, useState } from 'react';
import databaseService from '../appwrite/database';
import { PostCard, Container } from '../components';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        databaseService.getAllActivePost().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
                setLoading(false);
            }
        })
    }, []);


    if (authStatus) {
        if (loading) {
            // TODO: implement better loading
            return (
                <h1>Loading...</h1> 
            )
        } else if (posts.length === 0 && !loading) {
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
    } else {
        return (
            <div>First Login</div>
        )
    }
  
}

export default Home