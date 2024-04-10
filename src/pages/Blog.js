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
          <h2>Our latest articles.</h2>
          <p className='bottom'>placeholder</p>
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
          <h5 className='text-Primary'>placeholder</h5>
            <h2>placeholder</h2>
            <p>placeholder</p>
            <a href='/' className="btn">placeholder</a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Blog;
