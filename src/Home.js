import React from 'react'
import { useState ,useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
  const[blogs,setBlogs] =useState(null);
     
  const [name,setName] =useState('mario')

     
    useEffect(() =>{
      fetch('http://localhost:8000/blogs')
      .then(resp=>{
        return resp.json();
      })
       .then(data=>{
         setBlogs(data)
       });
    },[]);
   
  return ( 
    <div className='home'>
       {blogs && <BlogList blogs={blogs} title="All blogs!" />}
      </div>
  );
}

export default Home