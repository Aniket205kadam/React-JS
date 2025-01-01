import React from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from '../index';
import { DatabasesService } from '../../appwrite/database';
import { FileService } from '../../appwrite/fileUpload';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { useEffect } from 'react';

function PostForm({post}) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
        title: post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status: post?.content || 'active',
    }
  });
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.userData);

  async function onSubmit(data) {
    // update the post
    if (post) {
        const file = data.image[0] ? FileService.uploadFile(data.image[0]) : null;
        // after uploading new file we can delete old file
        if (file) {
            FileService.deleteFile(post.featuredImage)
        }
        const dbPost = await DatabasesService.updatePost(post.$id, {...data, featuredImage: file ? file.$id : undefined});
        if (dbPost) {
            navigate(`/post/${dbPost.$id}`)
        }
    }
    // save the post 
    else {
        const file = data.image[0] ? await FileService.uploadFile(data.image[0]) : null;
        if (file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            const dbPost = await DatabasesService.createPost({
                ...data,
                userId: userData.$id
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof(value) === 'string')
        return value
                    .trim()
                    .toLowerCase()
                    .replace(/^[a-zA-Z\d\s]+/g, '-')
                    .replace(/\s/g, '-');
    return '';
  }, []);

  useEffect(() => {
    const subscription = watch((value, name) => {
        if (name === 'title') {
            setValue('slug', slugTransform(value.title), {shouldValidate: true})
        }
    });


    return () => {
        subscription.unsubscribe();
    }
  }, [watch, slugTransform, setValue]);

  return (
    <div>PostForm</div>
  )
}

export default PostForm;