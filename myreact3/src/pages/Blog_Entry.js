import axios from 'axios';
import React, { useEffect, useState } from 'react'



function Blog_Entry() {
    const [inputs, setInputs] = useState({});

    function handleChange(e){
        let name = e.target.name;
        let value = e.target.value;
        setInputs(values =>({...values, [name]:value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        // alert("yes tumi parso");
        // useEffect(() => {
        //     blogPost();
        // }, [])
        blogPost();
    }

    const blogPost = () => {
        axios.post("http://localhost/1293874/React_api/api/blog/addBlog.php", inputs).then(function(response){
            alert(response.data);
        })
    }

  return (
    <div className='container'>
        <h2>Blog Entry</h2>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={inputs.title} name='title' className='form-control' placeholder='Enter Title'/> 
            <textarea name='details' onChange={handleChange} value={inputs.details}  className='form-control'></textarea>
            <input type='submit'  className='btn btn-primary'/> 
        </form>
        {console.log(inputs)}
        
    </div>
  )
}

export default Blog_Entry