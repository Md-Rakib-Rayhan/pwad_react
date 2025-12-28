import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';




function Blog_Entry1() {
    const {register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) =>{
        // console.log(data);
        blogPost(data);
    }

    const blogPost = (data) => {
        axios.post("http://localhost/1293874/React_api/api/blog/addBlog.php", data).then(function(response){
            alert(response.data);
        })
    }

  return (
    <div className='container'>
        <br/><br/>
        <h2>New Blog Entry</h2>
        <form className='form' onSubmit={handleSubmit(onSubmit)} >
            <input type='text' {...register("title")} className='form-control' placeholder='Enter Title'/> <br/>
            <textarea {...register("details")} className='form-control'></textarea><br/>
            <input type='submit'  className='btn btn-primary'/> 
        </form>
        
    </div>
  )
}

export default Blog_Entry1