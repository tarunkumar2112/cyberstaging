import React from 'react'
import Blogimg from '../assets/first.png';
import Blogimgs from '../assets/second.png';
import Blogimged from '../assets/third.jpg';

const Blog = () => {
  return (
   <>
   <div className='conatiner'>
    <div className='row'>
       <p>Latest blog articles</p>
       <h1>Our latest articles.</h1>
       <p className='bottom'>Get insights on the latest trending CVE's, our own novel security research and everything which related to bolstering the security posture of your externally facing assets.</p>
      
    </div>
    <div className='row newrow'>
      <div className='col-md-4'>
        <div className="Blogpost">
          <div className='img'>
            <img src={Blogimg}
            alt="blog" />
          </div>
          <div className='catesflex'>
            <div className='cayes'>CVE</div>
            <div className='date'>10 Apil 2024</div>
          </div>
          <div className="content">
            <a href=''><h3>Shockwave Attack Surface Management - CVE-2024-29059 .NET Remote Code Execution</h3></a>
            <p className='text-size-small text-align-left'>Code White disclosed CVE-2024-29059 which by Leaking ObjRefs to Exploit HTTP .NET Remoting allows to achieve Remote Code Execution.</p>
          </div>

        </div>
      </div>
      <div className='col-md-4'>
        <div className="Blogpost">
          <div className='img'>
            <img src={Blogimged}
            alt="blog" />
          </div>
          <div className='catesflex'>
            <div className='cayes'>CVE</div>
            <div className='date'>10 Apil 2024</div>
          </div>
          <div className="content">
            <a href=''><h3>Shockwave Attack Surface Management - CVE-2024-29059 .NET Remote Code Execution</h3></a>
            <p className='text-size-small text-align-left'>Code White disclosed CVE-2024-29059 which by Leaking ObjRefs to Exploit HTTP .NET Remoting allows to achieve Remote Code Execution.</p>
          </div>

        </div>
      </div>
      <div className='col-md-4'>
        <div className="Blogpost">
          <div className='img'>
            <img src={Blogimgs}
            alt="blog" />
          </div>
          <div className='catesflex'>
            <div className='cayes'>CVE</div>
            <div className='date'>10 Apil 2024</div>
          </div>
          <div className="content">
            <a href=''><h3>Shockwave Attack Surface Management - CVE-2024-29059 .NET Remote Code Execution</h3></a>
            <p className='text-size-small text-align-left'>Code White disclosed CVE-2024-29059 which by Leaking ObjRefs to Exploit HTTP .NET Remoting allows to achieve Remote Code Execution.</p>
          </div>

        </div>
      </div>

    </div>
    <div className="newrow">
      <div className='fullcolumn'>
        <p>The security first platform</p>
        <h2>Supercharge your security</h2>
        <p>Identify, Secure and Continuously Monitor your Externally Facing Attack Surface.
Significantly Improve your security posture within minutes with an easy, smooth onboarding process.</p>
<a href='/' className="btn">Get Started</a>
      </div>
    </div>
   </div>
   </>
  )
}

export default Blog