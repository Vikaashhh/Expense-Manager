import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-[#8B5FBF]'>
        <nav className='lg:w-[80%] container mx-auto flex items-center justify-between py-2'>
            <a href='' className='text-2xl font-bold text-white text-shadow-2xs'>Money Manager</a> 

            <ul className='flex items-center justify-center gap-x-3 text-white font-medium'>
                <li>
                    <a href="#home" className=''>Home</a>
                </li>
                <li>
                    <a href="#home" className=''>About</a>
                </li>
                <li>
                    <a href="#home" className=''>Contact</a>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar