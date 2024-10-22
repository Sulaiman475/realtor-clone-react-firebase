import React from 'react'
import { useLocation, useNavigate } from 'react-router'

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location);
    function pathMatchRoute(route) {
        if(route === location.pathname) {
            return true
        }
    }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            {/* <img width="142" height="46" alt="realtor.com"  src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" /> */}
            <img className='h-5 cursor-pointer' alt="realtor.com"  src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" onClick={() => navigate('/')} />
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/') && 'text-black border-b-red-500'}`} onClick={() => navigate('/')}>
                    Home
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/offers') && 'text-black border-b-red-500'}`} onClick={() => navigate('/offers')}>
                    Offers
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/sign-in') && 'text-black border-b-red-500'}`} onClick={() => navigate('/sign-in')}>
                    Sign in
                </li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
