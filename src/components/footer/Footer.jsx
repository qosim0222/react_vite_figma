import React from 'react'

const Footer = () => {
    return (
        <>

            <footer className='  bg-[url(./assets/uy.png)] bg-no-repeat bg-center bg-cover mt-20'>
                <div className='pb-20'>
                    <div className='flex flex-col items-center justify-center '>
                        <h3 className='text-center w-[161px] text-[25px] text-[#EFEFEF]  mt-[60px] h-[38px] mb-[33px] border-b border-[#DEDEDE]'>Stay in Touch</h3>
                        <form className='flex'>
                            <input className='bg-[#FFFFFF] py-[15px] pl-[35px] w-[375px] rounded-l-[3px]' type="text" placeholder='Enter your email address' />
                            <button className='bg-[#FFFFFF47] text-[#F8F8F8] px-[35px] rounded-r-[3px]'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='bg-[#232F3899]'>
                    <div className='container mx-auto'>
                        <div className='flex justify-between items-center h-[74px] text-[#FFFFFF] '>
                            <div className='text-[26px]'>Escape.</div>
                            <ul className='flex gap-10 uppercase text-[12px] text-[#FFFFFF] opacity-60'>
                                <li><a href="#"><span>Home</span></a></li>
                                <li><a href="#"><span>Categories</span></a></li>
                                <li><a href="#"><span>About</span></a></li>
                                <li><a href="#"><span>Contact</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer