/* hooks */
import { useState } from 'react';

/* icons */
import { 
    UserCircleIcon,
    UserAddIcon,
    XCircleIcon
} from '@heroicons/react/outline'

const LoginButton = ({ handleToggle }) => {

    const [ user, setUser ] = useState(false);

    return (
        <div onClick={ handleToggle } className='flex items-center space-x-2 border-4 p-2 rounded-full cursor-pointer bg-gray-200 active:scale-105 transition duration-100'>
            <p className='font-semibold'>Ingresar</p>
            <UserCircleIcon className='h-6 w-6' />
            <UserAddIcon className='h-6 w-6' />
        </div>
    );
};

export default LoginButton;