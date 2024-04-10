import React from 'react';
import { Link } from 'react-router-dom'; 
import BlogData from '../blog.json';

const Blog = () => {
  return (
    <>
    <div className='main-section-blog'>
      <div className='container max-w-[1200px] w-full mx-auto px-[15px]'>
        <div className='row'>
        <h5 className='text-Primary'>Latest blog articles</h5>
          <h1>Our latest articles.</h1>
          <p className='bottom'>Get insights on the latest trending CVE's, our own novel security research and everything which related to bolstering the security posture of your externally facing assets.</p>
        </div>
        <div className='row newrow'>
          {BlogData.map(blog => (
            <div key={blog.id} className='col-md-4 swiper-slide bg-price-bg'>
              <div className="Blogpost">
                <div className='img'>
                  <img src={blog.imgSrc} alt="blog" />
                </div>
                <div className='div-block-text'>

                <div className='catesflex'>
                  <div className='cayes text-Primary'>{blog.category}</div>
                  <div className='date'>{blog.date}</div>
                </div>
                <div className="content">
                  {/* Use Link to wrap the blog title */}
                  <Link to={`/blog/${blog.id}`}>
                    <h3 className='text-white'>{blog.title}</h3>
                  </Link>
                  <p className='text-size-small text-align-left'>{blog.content}</p>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="newrow-bottom">
        <div class="bg-HR-bg h-px w-full  bg-center bg-no-repeat"></div>

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
  )
}

export default Blog;
