import React from 'react'

const Header = () => {

  return (
    <header>
      <div className="container mx-auto ">
        <nav className='h-[74px]  flex items-center justify-between gap'>
          <div>Escape</div>
          <ul className='flex gap-10 uppercase'>
            <li>
              <a href="#"><span>Home</span></a>
            </li>
            <li>
              <a href="#"><span>Categories</span></a>
            </li>
            <li>
              <a href="#"><span>About</span></a>
            </li>
            <li>
              <a href="#"><span>Contact</span></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header