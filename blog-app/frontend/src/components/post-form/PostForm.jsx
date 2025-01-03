import React from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from '../index';
import databaseService from '../../appwrite/database';
import  fileService from '../../appwrite/fileUpload';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { useState } from 'react';

function PostForm({post}) {
  const [loading, setLoading] = useState(false);  
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

   const onSubmit = async (data) => {
    // update the post
    setLoading(true);
    if (post) {
        const file = data.image[0] ? fileService.uploadFile(data.image[0]) : null;
        // after uploading new file we can delete old file
        if (file) {
            fileService.deleteFile(post.featuredImage)
        }
        const dbPost = await databaseService.updatePost(post.$id, {...data, featuredImage: file ? file.$id : undefined});
        if (dbPost) {
            setLoading(false);
            navigate(`/post/${dbPost.$id}`)
        }
    }
    // save the post 
    else {
        const file = data.image[0] ? await fileService.uploadFile(data.image[0]) : null;
        if (file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            const dbPost = await databaseService.createPost({
                ...data,
                userId: userData.$id
            })
            if (dbPost) {
                setLoading(false);
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
                    .replace(/\s/g, '-');
    return '';
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
        if (name === 'title') {
            setValue('slug', slugTransform(value.title), {shouldValidate: true})
        }
    });


    return () => {
        subscription.unsubscribe();
    }
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={fileService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {loading ?
                        <div class="button-loading">
                            <div class="login-loading"></div>
                        </div>
                    : 
                    post ? (<p>Update</p>) : (<p>Submit</p>)
                    }
                </Button>
            </div>
        </form>
  )
}

export default PostForm;