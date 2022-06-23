import { 
    XIcon
} from '@heroicons/react/outline'

const LogInCard = ({ handleClose }) => {
    return (
        <section className='flex flex-col gap-4 justify-start items-start leading-10 py-6 px-10 border-2 rounded-2xl'>
            <a href='#' className='' onClick={ handleClose }>Iniciar sesión</a>
            <a href='#' className='' onClick={ handleClose }>Acercate a nosotros</a>
            <a href='#' className='' onClick={ handleClose }>Ayuda</a>
        </section>
    )
}

export default LogInCard