import React from 'react';
import { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import databaseService from '../appwrite/database';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            databaseService.getPost(id).then((post) => {
                if (post) {
                    console.log("post: ", post);
                    
                    setPost(post);
                }
            });
        } else {
            navigate('/');
        }
    }, [id, navigate]);
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost