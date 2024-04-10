import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../blog.json';

const BlogDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const blog = BlogData.find(blog => blog.id === parseInt(id)); // Find the blog with the corresponding id
  
  if (!blog) {
    return <div>Blog not found</div>; // Handle case where blog is not found
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
