/* react-router-dom */
import { Routes, Link, Route } from 'react-router-dom'

/* heroicons */
import { 
    XIcon
} from '@heroicons/react/outline'

const LogInCard = ({ handleClose }) => {
    return (
        <section className='flex flex-col gap-4 justify-start items-start leading-10 py-6 px-10 border-2 rounded-2xl'>
            <Link to='/login' className='' onClick={ handleClose }>Iniciar sesión</Link>
            <Link to='#' className='' onClick={ handleClose }>Acercate a nosotros</Link>
            <Link to='#' className='' onClick={ handleClose }>Ayuda</Link>
        </section>
    )
}

export default LogInCard