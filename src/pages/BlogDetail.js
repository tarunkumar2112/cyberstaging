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
    <>
        <div className='main-section-blog blog-detail'>

    <div className="container max-w-[1200px] w-full mx-auto px-[15px]">
      <div className="row">
        <div className="col-md-8 offset-md-2">
        <div className="categoryanddate">
            <div className='cates className="btn bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]'>
            {blog.category}
            </div>
            <div className='dates text-Primary'>
            {blog.date}
            </div>
        </div>
          <div className='title'>
            <h1>{blog.title}</h1>
          </div>
          <div className='content-area'>
            <h3>{blog.content}</h3>
            <p>{blog.belowtitle}</p>
            <div className='image-bolg'>
            <img src={blog.detailPageImg} alt={blog.title} />
            </div>
            <p>{blog.longDescription}</p>
          </div>
          <div className='after-content'>
          <p>{blog.finalDescription}</p>
          </div>
        </div>
      </div>
      <div className="newrow-bottom">
        <div className="bg-HR-bg h-px w-full  bg-center bg-no-repeat"></div>

          <div className='fullcolumn'>
          <h5 className='text-Primary'>The security first platform</h5>
            <h2>Supercharge your security</h2>
            <p>Identify, Secure and Continuously Monitor your Externally Facing Attack Surface.
              Significantly Improve your security posture within minutes with an easy, smooth onboarding process.</p>
              <a href='/' className="btn bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Get Started</a>
          </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default BlogDetail;
