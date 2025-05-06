import React from 'react'

const Hero = () => {
  return (
    
    <>
   

    <section className='w-full h-[500px] border bg-[url(./assets/hero.png)] bg bg-no-repeat bg-center bg-cover flex items-center justify-center text-center color wh text-white '>
      <div>
        <h1 className='text-[50px]'>Let's do it together</h1>
        <p className='mt-5 mb-7 opacity-60 '>We travel the world in search of stories. Come along for the ride.</p>
        <button className='bg-primary py-3 px-8 rounded-[3px] cursor cursor-pointer'>View Latest Posts</button>
      </div>
    </section>

<section className="w-full bg-white border-t border-[#eee]">
<div className="container mx-auto">
  <ul className="flex justify-center gap-[120px] text-[#768088] text-[14px] font-light py-5">
    <li><a href="">Nature</a></li>
    <li><a href="">Photography</a></li>
    <li><a href="">Relaxation</a></li>
    <li><a href="">Vacation</a></li>
    <li><a href="">Travel</a></li>
    <li><a href="">Adventure</a></li>
  </ul>
</div>
</section>
</>

  )
}

export default Hero 