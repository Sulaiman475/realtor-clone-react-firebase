import React from 'react'
import { useLocation, useNavigate } from 'react-router'

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location.pathname);
    
    function pathMatchRoute(route) {
        if(route === location.pathname) {
            console.log("ok")
            return true;
        }
    }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            <img className='h-5 cursor-pointer' alt="realtor.com"  src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" onClick={() => navigate('/')} />
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute('/') ? "text-black border-b-red-500" : 'border-b-transparent text-gray-400'}`} onClick={() => navigate('/')}>
                    Home
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute('/offers') ? 'text-black border-b-red-500' : 'border-b-transparent text-gray-400'}`} onClick={() => navigate('/offers')}>
                    Offers
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute('/sign-in') ? 'text-black border-b-red-500' : 'border-b-transparent text-gray-400'}`} onClick={() => navigate('/sign-in')}>
                    Sign in
                </li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header;
