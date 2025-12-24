import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Blog() {

    const[blogs, setBlogs] = useState([]);

    useEffect(()=>{
        getBlogs()
    },[])

    function getBlogs(){
        // Change This URL with yours -------------------------------------------------------___----_______
        axios.get("http://localhost/1293874/React_api/api/blog/").then(function(response){
            // console.log(response.data);
            setBlogs(response.data)
            
        });
    }

  return (
    <div className='container-fluid py-5' >
        <div className='container'>
            <h1>Blog Items</h1>
            {/* {console.log(blogs)} */}

            <table>
                <tr>
                <th>Id</th>
                <th>Titles</th>
                <th>Details</th>
                </tr>

                {blogs.map((blog)=>(

                    <tr>
                        <td>{blog.id}</td>
                        <td>{blog.title}</td>
                        <td>{blog.details}</td>
                        
                    </tr>

                ))}

            </table>

        </div>
    </div>
  )

}

export default Blog