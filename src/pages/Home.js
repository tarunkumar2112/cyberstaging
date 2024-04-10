import React from 'react';
import Tesla from '../assets/tesla.png';
import Tmobile from '../assets/t-mobile.png';
import Yahoo from '../assets/yahoo.png';
import United from '../assets/United States Pentagon.png';
import Resolve from '../assets/imgpsh_fullsize_anim (8).png';
import FIrst from '../assets/Icon (1).png'
import Second from '../assets/Icon (2).png'
import Third from '../assets/Icon (3).png'
import Fourth from '../assets/Icon (4).png'
import Fifth from '../assets/Icon (5).png'
import Six from '../assets/Icon (6).png'
import Video from '../assets/video.png'
import star from '../assets/star.png'
import stars from '../assets/icon.png'
import grids from '../assets/grid.png'
import shapeLeft from '../assets/BG-left-top.png'
import checkmark from '../assets/checkmark.png'


const Home = () => {
  return (
    <div className="bg-{rgba(11, 1, 29, 1)}">
      <div className="hero-bg w-full md:pt-[200px] md:pb-[100px] pt-[80px] pb-[50px]">
        <div className="max-w-[1200px] mx-auto px-[15px]">
      {/* Banner Section */}
      <div className="text-center mb-[50px]">
        <h1 className="md:text-[88px] text-[50px] font-semibold mb-[30px] leading-tight text-white"> A new digital horizon<br />for your business</h1>
        <p className="text-lg text-Paragraph leading-normal mx-auto max-w-[670px]">Our dynamic cybersecurity firm, Cybertess Security Inc deploys experienced researchers to conduct thorough website security assessments. Leveraging cutting-edge tools and methodologies, our team rigorously tests for vulnerabilities on your company website, ensuring a robust defense against potential threats.</p>
      </div>
      
      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <button className="bg-[#DBD9DE] transition-all hover:bg-[#1E1333] text-[#2E1C63] hover:text-white font-medium py-2 px-4 rounded-[40px] mb-2 md:mb-0 md:mr-4 border border-solid border-transparent hover:border-slate-400/40">Get Started</button>
        <button className="bg-[#1E1333] transition-all hover:bg-[#DBD9DE] text-white hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white">How It Works</button>
      </div>
      
      {/* Image Row */}
      <div className="flex md:flex-row flex-column flex-wrap justify-between mt-[110px] gap-4 items-center">
        <img src={Tesla} alt="Image 1" className="h-auto max-w-full  " />
        <img src={Tmobile} alt="Image 2" className="h-auto max-w-full " />
        <img src={Yahoo} alt="Image 3" className="h-auto max-w-full  " />
        <img src={Resolve} alt="Image 4" className="extrahieght h-auto max-w-full " />
        <img src={United} alt="Image 5" className="h-auto max-w-full  " />
      </div>
      </div>
      </div>
      {/* New Section */}
      <section className='w-full md:py-[100px] py-[50px]'>
        <div className='max-w-[1200px] mx-auto px-[15px]'>
            <div className="text-center md:mb-[150px] mb-[50px] relative">
            <div className='txt-stroke left-0 right-0 text-center absolute text-[#130629] xl:text-[120px] lg:text-[100px] text-[40px] font-bold top-[15px]'>
            Creative technology
            </div>
          <p className="text-lg flex items-center justify-center gap-[5px] text-Primary relative"><img src={star} alt="Image 5" className="  " />
            Outstanding Digital Security, and Experiences</p>
            <h2 className=" font-bold mb-2 md:text-[56px] text-[40px] text-white relative">We craft secure brand experiences</h2>
            
          </div>
          {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={FIrst} alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-6 mb-2 min-h-[56px] flex items-center justify-center">Attack Surface Management</h3>
        <p className="text-Paragraph text-[16px]">Cybertess offers expert assistance in managing your externally exposed services through continuous monitoring of your digital infrastructure.</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Second} alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-6 mb-2 min-h-[56px] flex items-center justify-center">Mobile Application Security</h3>
        <p className="text-Paragraph text-[16px]">Cybertess employs advanced techniques such as code review, penetration testing, and vulnerability assessments to ensure comprehensive protection for your mobile applications.</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Third}alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-6 mb-2 min-h-[56px] flex items-center justify-center">CVE-Based Analysis and Generic Misconfigurations Assessment</h3>
        <p className="text-Paragraph text-[16px]">Our comprehensive approach extends to testing all externally exposed surfaces, identifying and mitigating vulnerabilities based on publicly available misconfigurations.</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Fourth} alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-6 mb-2 min-h-[56px] flex items-center justify-center">3rd Party Issues</h3>
        <p className="text-Paragraph text-[16px]">Cybertess also provides thorough monitoring and research services to evaluate third-party integrations, ensuring their security and compatibility with your systems.</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Fifth} alt="" className="inline-block" />
        <h3 className="text-lg text-white  font-semibold mt-6 mb-2 min-h-[56px] flex items-center justify-center">OSINT Automation</h3>
        <p className="text-Paragraph text-[16px]">Empower your threat intelligence capabilities with automated OSINT tools, accelerating the discovery of crucial insights in real-time and issuing immediate alerts to thwart potential threats posed by malicious actors.</p>
      </div>
      <div  className="bg-card-bg text-center bg-cover md:px-[37px] px-[30px] py-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px]">
        <img src={Six} alt="" className="inline-block" />
        <h3 className="text-lg text-white font-semibold mt-6 mb-2 min-h-[56px] flex items-center justify-center">Continued Automated threat Intelligence</h3>
        <p className="text-Paragraph text-[16px]">Continued Automated Threat Intelligence ensures proactive adaptation to evolving threats by integrating continuous automated processes for real-time threat detection and mitigation.</p>
      </div>
  </div>
        </div>
      </section>
      

      

         {/* New Section */}
         <section className='w-full bg-top-Left-bg bg-no-repeat '>
        <div className='max-w-[1200px] mx-auto px-[15px]'>
         <div className="max-w-full w-full p-8 flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Left Side */}
        <div className="md:w-[60%] mb-4 md:mb-0">
        <p className="text-lg flex items-center  gap-[5px] text-Primary relative"><img src={star} alt="Image 5" className="  " />Empowering Businesses to Enhance Their Online Exposure</p>
          <h2 className="md:text-[42px] leading-[1.1] text-[30px] font-semibold mb-2 text-white">Discover our new ideas that evolves with your business.</h2>
          <div className='md:mb-[60px] mb-[30px] mt-[30px]'>
          <p className="text-lg text-Paragraph mb-5">Unlock the potential and identify security loopholes before malicious threat actors do. At Cybertess Security Inc, We take pride in remaining at the forefront of industry trends, consistently adapting our strategies to ensure your digital security. Discover the power of our dynamic approach and witness your brand evolve to new heights, leaving a lasting impression on customer and data security.</p>
          </div>
          <div className='md:mb-[50px] mb-[30px]'>
          <strong className='text-white mb-[15px] block'>Select the plan that suits your requirements and budget</strong>
          <p className="text-lg text-Paragraph mb-5">Regardless of whether you're part of an agency or a larger team, we have a plan tailored to your organization's size. Let's collaborate to safeguard your digital future.</p>
          </div>

          <div className='md:mb-[50px] mb-[30px]'>
          <strong className='text-white mb-[15px] block'>Share your vision, and we'll work tirelessly to bring it to life</strong>
          <p className="text-lg text-Paragraph mb-5">Entrust us with your vision, and we'll commit our expertise and resources to transform it into reality. Leveraging our extensive knowledge and proven tools, we continuously automate real-life threats, promptly notifying you of any potential risks that could significantly impact your business.</p>
          </div>
          <div className='md:mb-[50px] mb-[30px]'>
          <strong className='text-white mb-[15px] block'>We’ll refine the designs until you’re fully satisfied</strong>
          <p className="text-lg text-Paragraph mb-4">We're dedicated to perfecting the designs until they meet your utmost satisfaction. At Cybertess, our paramount objective is to address the vulnerabilities that concern you most. We not only assist in eliminating these risks entirely but also maintain vigilant monitoring to prevent their recurrence in the future.</p>
          </div>
          
        
          <a href="https://rce.ninja" target="_blank" rel="noopener noreferrer">
          <button class="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Schedule a Call</button>
        </a>
          
        </div>
        
        {/* Right Side */}
        <div className="md:w-[40%]">
        <div className="tilt-container">
  <div className="tilt-content">
    <img src={Video} alt="Tilted Image" className="rounded-md shadow-lg" />
  </div>
</div>
        </div>
      </div>
</div>
</section>
 {/* New Section */}
 <section className='w-full bg-top-right-bg bg-no-repeat md:py-[100px] py-[50px]'>
        <div className='max-w-[1000px] mx-auto px-[15px] relative'>
      <div className="text-center">
        <h2 className="md:text-[42px] text-[30px] font-semibold mb-2 text-white ">Know more about us?</h2>
      </div>
        <div className="row mt-8 bg-full-BG bg-center bg-no-repeat bg-cover md:py-[77.5px] md:pl-[60px] md:pr-[80px] py-[30px] px-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px] shadow-lg shadow-black-500 md:shadow-xl">
          <div className="md:flex md:flex-row flex-column items-center  justify-between gap-8">
          <div className='max-w-[272px] w-full md:text-center relative'>
          <h2 className="opacity-70 txt-stroke  text-[#130629] md:text-[48px] text-[24px] font-bold ">FOUNDER</h2>
          <img src={grids} alt="Image 1" className="h-auto max-w-full absolute top-0 left-0" />
          </div>
            
            <div className="content max-w-[470px] w-full">
            <h5 className="text-[14px] flex items-center bg-[#1E1333] text-white py-[5px] px-[10px] rounded-[40px] border border-solid border-slate-400/40 mb-4"><img src={stars} alt="Image 5" className="  " />Founder</h5>
              <h2 className="text-2xl mb-4 text-white font-medium">Arman Surti</h2>
              <p className="text-base text-Paragraph">Exemplifying expertise in web application security through continuous bug bounty and research endeavors since 2018. Recognized as a top 35 researcher on the Bugcrowd platform and honored as the Most Valuable Hacker of 2022, my proficiency is evident in the impactful contributions to cybersecurity. Explore my bounty profiles on platforms such as Bugcrowd and HackerOne to witness a track record of excellence.</p>
              <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Our Work</button>
            </div>
          </div>
        </div>

        <div className="row mt-8 bg-full-BG bg-center bg-no-repeat bg-cover md:py-[77.5px] md:pl-[60px] md:pr-[80px] py-[30px] px-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px] shadow-lg shadow-black-500 md:shadow-xl">

        <div className="md:flex md:flex-row justify-between flex-column items-center gap-8">
          <div className="content max-w-[470px] w-full">
          <h5 className="text-[14px] flex items-center bg-[#1E1333] text-white py-[5px] px-[10px] rounded-[40px] border border-solid border-slate-400/40 mb-4"><img src={stars} alt="Image 5" className="  " />Co-Founder</h5>
            <h2 className="text-2xl mb-4 text-white font-medium ">El Mehdi Mhrassel </h2>
            <p className="text-base text-Paragraph">El Mehdi Mhrassel, a seasoned professional in bug bounty hunting since 2018, brings a wealth of experience to our cybersecurity team. With a remarkable track record, he has successfully identified vulnerabilities in Fortune 500 companies known for their strong security measures. Additionally, he has discovered zero-day exploits in prominent products, showcasing his expertise that significantly contributes to our commitment to ensuring robust security for our clients.</p>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Learn More</button>
          </div>
          <div className='max-w-[272px] w-full md:text-center relative'>
          <h2 className="opacity-70 txt-stroke  text-[#130629] md:text-[48px] text-[24px] font-bold ">CO FOUNDER</h2>
          <img src={grids} alt="Image 1" className="h-auto max-w-full absolute top-0 left-0" />
          </div>
          
        </div>
        </div>
        <div className="row mt-8 bg-full-BG bg-center bg-no-repeat bg-cover md:py-[77.5px] md:pl-[60px] md:pr-[80px] py-[30px] px-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px] shadow-lg shadow-black-500 md:shadow-xl">

        <div className="md:flex md:flex-row justify-between flex-column items-center gap-8">
          <div className='max-w-[272px] w-full md:text-center relative'>
          <h2 className="opacity-70 txt-stroke  text-[#130629] md:text-[120px] text-[60px] font-bold ">WEB</h2>
          <img src={grids} alt="Image 1" className="h-auto max-w-full absolute top-0 left-0" />
          </div>
          
          <div className="content max-w-[470px] w-full">
            <h5 className="text-[14px] flex items-center bg-[#1E1333] text-white py-[5px] px-[10px] rounded-[40px] border border-solid border-slate-400/40 mb-4"><img src={stars} alt="Image 5" className="  " />Crafting Digital Experiences</h5>
            <h2 className="text-2xl mb-4 text-white font-medium">We refuse to be redundant</h2>
            <p className="text-base text-Paragraph">At Cybertess, we collaborate, innovate, and adapt. With our expertise in digital security, we create solutions that strengthen, communicate, and empower. By staying updated on the latest cybersecurity trends, we deliver effective solutions that exceed our clients' expectations.</p>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Get Started</button>
          </div>
        </div>
        </div>
        <img src={shapeLeft} alt="img" className='absolute left-[-100px] bottom-0'/>
      </div>
  </section>
 {/* New Section */}
 <section className='w-full bg-marquee-BG bg-center bg-no-repeat  md:py-[100px] py-[50px] relative'>
      {/* Centered p and h2 */}
      <div className='max-w-[1200px] mx-auto px-[15px] relative'>
      <div className="text-center mb-8">
      <p className="text-lg flex items-center justify-center  gap-[5px] text-Primary relative"> <img src={star} alt="star-img"/>Read What Our Clients Have to Say About The Services We Provide</p>

        <h2 className=" font-bold mb-2 md:text-[56px] text-[40px] text-white ">What our clients are saying</h2>
      </div>
      </div>
      
      {/* First Marquee */}
      <marquee className="flex  mb-8" direction="left" scrollamount="5">
       
          <div className="items-center flex">
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>

          </div>

      </marquee>

      {/* Second Marquee */}
      <marquee className="flex  mb-8" direction="right" scrollamount="5">
      <div className="items-center flex">
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>
            <p className="mx-8 text-[14px] text-white font-medium bg-[#1E1333] rounded-[40px] border border-solid border-slate-400/40 py-3 px-5 w-[271px] whitespace-break-spaces">"The best service for startups,designers, and developers"</p>

          </div>
      </marquee>
      </section>
    {/* New Section */}
    <div className='bg-HR-bg h-px w-full  bg-center bg-no-repeat'></div>
    <section className='w-full  md:pb-[100px] pb-[50px] md:pt-[100px] pt-[50px] overflow-hidden'>
      
        <div className='max-w-[1200px] mx-auto px-[15px] relative'>
          <img src={shapeLeft} alt="image" className='absolute right-[-30px] top-[50px]'/>
    <div className="max-w-[725px] w-full py-8 mb-8 ">
        <p className="text-lg flex items-center  gap-[5px] text-Primary relative"> <img src={star} alt="star-img"/><a href="mailto:business@cybertess.io">Email us at business@cybertess.io for a free trial.</a></p>
      
        <h2 className=" font-bold mb-2 md:text-[42px] text-[30px] text-white ">Whether you’re part of an agency or a larger team we have a plan for you</h2>
</div>
        <div className="flex md:flex-row flex-col gap-[30px] ">
          {/* Pricing Plan 1 */}
          <div className="bg-price-bg p-6 rounded-[20px] md:w-[calc(33.333% - 20px)] w-full border border-solid border-border-color">
            <p className='subtitle text-center font-medium mb-[15px] text-white'>Standard</p>
            <h3 className=" font-medium mb-2 text-center md:text-[42px] text-[30px] text-white">$600<span className='text-Paragraph text-xl font-medium'>/month</span></h3>
          <ul>
          <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Every 24h Scans
            </li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Attack Surface Management</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            3rd Party Risk Management</li>
          </ul>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Purchase Now</button>
          </div>

          {/* Pricing Plan 2 */}
          <div className="bg-price-bg p-6 rounded-[20px] md:w-[calc(33.333% - 20px)] w-full border border-solid border-border-color">
            <p className='subtitle text-center font-medium mb-[15px] text-white'>Bussiness</p>
            <h3 className="font-medium mb-2 text-center md:text-[42px] text-[30px] text-white">$1500<span className='text-Paragraph text-xl font-medium'>/month</span></h3>
          <ul>
          <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Every 24h Scans
            </li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Attack Surface Management</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Mobile Application Security</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            3rd Party Risk Management</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Pentest</li>
          </ul>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Purchase Now</button>
          </div>

          <div className="bg-price-bg p-6 rounded-[20px] md:w-[calc(33.333% - 20px)] w-full border border-solid border-border-color">
            <p className='subtitle text-center font-medium mb-[15px] text-white'>Enterprise</p>
            <h3 className="font-medium mb-2 text-center md:text-[42px] text-[30px] text-white">Let's chat<span className='text-Paragraph text-xl font-medium'></span></h3>
          <ul>
          <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Every 24h Scans
            </li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Attack Surface Management</li>
            
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            3rd Party Risk Management</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Pentest</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Mobile Application Security</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            Real-time collaboration with your team to help patch issues</li>
            <li class="flex items-start gap-[10px;] font-[16px] py-[5px]">
            <img className='mt-[2px]' src={checkmark} alt="checkmark"/>
            First to be notified for critical issues, based on our private research, if you're using similar technology</li>
          </ul>
            <button className="bg-[#1E1333] text-sm transition-all hover:bg-[#DBD9DE] text-[rgba(124, 124, 124, 1)] hover:text-[#2E1C63] font-medium py-2 px-4 rounded-[40px] border border-solid border-slate-400/40 hover:border-white mt-[30px]">Purchase Now</button>
          </div>
        </div>
      
      </div>
    </section>
    <section className='w-full  md:pt-[50px] pt-[50px] md:pb-[100px] pb-[50px] bg-last-sec-bg bg-no-repeat bg-bottom'>
    <div className='max-w-[1000px] mx-auto px-[15px] relative'>
    <div className="row  bg-full-BG bg-center bg-no-repeat bg-cover md:py-[100px] py-[50px] md:px-[100px] px-[30px] border border-solid border-[rgba(57,51,74,0.5)] rounded-[20px] shadow-lg shadow-black-500 md:shadow-xl text-center">
        {/* Heading with border */}
        <div className=" mb-4">
          <h3 className=" font-medium  text-white px-4 md:text-[56px] text-[40px]">Beyond Ordinary: Revealing What Real Hackers Seek</h3>
          <h6 className=" font-medium  text-white px-4 md:text-[18px] text-[16px]">By Hackers, Against Hackers</h6>
        </div>

        {/* CTA button */}
        <button className="bg-[#DBD9DE] transition-all hover:bg-[#1E1333] text-[#2E1C63] hover:text-white font-medium py-4 px-4 rounded-[40px] mb-2 md:mb-0 md:mr-4 border border-solid border-transparent hover:border-slate-400/40 text-[14px]">Get Started</button>

       
      </div>
    </div>
    </section>
      
        
      
    </div>
    
  );
};

export default Home;
