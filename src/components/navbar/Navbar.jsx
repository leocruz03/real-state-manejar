/* hooks */
import { useState } from 'react'

/* components */
import LogInCard from './../cards/LogInCard';
import LoginButton from './../buttons/LoginButton';

/* pictures */
import Manejar from '../../assets/LogoManejar.png'

/* icons */
import { 
    UserCircleIcon,
    UserAddIcon,
    XCircleIcon
} from '@heroicons/react/outline'

const Navbar = () => {

    const [ openToggle, setOpenToggle ] = useState(false);

    const handleToggle = () => {
        setOpenToggle(!openToggle);
    }

    const handleClose = () => {
        setOpenToggle(false);
    }

    return (
        <header className='sticky top-0 z-20 bg-white shadow-md p-2 md:px-8'>
            <div className='grid grid-cols-2'>
                {/* left */}
                <section className='relative flex items-center my-auto' onClick={ handleClose }>
                    <img src={ Manejar } alt='Manejar' className='w-[200px] cursor-pointer' />
                </section>

                {/* right */}
                <section className='flex items-center space-x-4 justify-end text-gray-500'>
                    <a href='#' className='py-2 px-4 rounded-xl font-semibold hidden sm:inline text-yellow-400 bg-blue-800 hover:shadow-md active:scale-105 transition duration-100' onClick={ handleClose }>Contactenos</a>
                    <LoginButton handleToggle={ handleToggle } />
                    <section className={ !openToggle ? 'hidden transition ease-in-out duration-150' : 'absolute top-16 right-2 md:right-8 z-30 bg-white rounded-2xl transition ease-in-out duration-150' }>
                        <LogInCard
                            handleClose={ handleClose }
                        />
                    </section>
                </section>
            </div>
            <nav onClick={ handleClose } className='pt-4'>
                <ul className='flex items-center justify-center space-x-12 md:space-x-20'>
                    <li><a href='#' className='font-semibold text-gray-500 hover:text-blue-800' onClick={ handleClose }>Inmuebles</a></li>
                    <li><a href='#' className='font-semibold text-gray-500 hover:text-blue-800' onClick={ handleClose }>Publicar</a></li>
                    <li><a href='#' className='font-semibold text-gray-500 hover:text-blue-800' onClick={ handleClose }>Servicios</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar