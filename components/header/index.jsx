"use client"; // This is a client component 
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const abrirMenu = () => {
    setOpenMenu(!openMenu)

  }


  return (
    <header className='flex h-20 mb-10 w-full justify-between items-center '>
      <button className='md:ml-12 md:mt-4'>
        <img src='/logo.png' className="w-32" alt="logo TSP" />
      </button>
      <nav>
        <button onClick={abrirMenu} className={`${openMenu ? 'hidden' : 'block'} md:hidden absolute top-4 right-4`}><FaBars size={40} /></button>
        <ul className={` flex  flex-col fixed ${!openMenu ? '-right-60' : 'right-0'} transition-all ease-linear px-4 h-screen top-0  z-10 justify-center  bg-gray-800/95  gap-8 text-2xl  items-center
        
        md:flex-row md:flex md:bg-transparent md:h-full md:relative md:right-0 `}
        >
          <button className={`fixed top-4 right-4 md:hidden ${!openMenu ? 'hidden' : 'block'}`} onClick={abrirMenu}><FaTimes size={40} /></button>
          <li className='hover:text-azul ease-linear duration-300 font-bold cursor-pointer'>Home</li>
          <li className='hover:text-azul ease-linear duration-300 font-bold cursor-pointer'>Formações</li>
          <li className='hover:text-azul ease-linear duration-300 font-bold cursor-pointer'>Projetos</li>
          <li className='hover:text-azul ease-linear duration-300 font-bold cursor-pointer'>Blog</li>
          <li className='text-azul ease-linear duration-300 font-bold border border-solid border-azul rounded-md  p-3 hover:border-white hover:text-white cursor-pointer'>Contate me</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
