/* react-router-dom */
import { Routes, Link, Route } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-blue-100'>
            <section className='grid grid-cols-1 gap-y-10 px-20 py-14 md:grid-cols-4'>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>NOSOTROS</h5>
                    <p><Link to='/'>Quiénes somos</Link></p>
                    <p>Misión</p>
                    <p>Visión</p>
                    <p>Trayectoria</p>
                    <p>Grupo Manejar</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>SERVICIOS</h5>
                    <p>Arriendos</p>
                    <p>Ventas</p>
                    <p>Avalúos</p>
                    <p>Planos y diseños</p>
                    <p>Hipotecas</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>SOCIAL</h5>
                    <p>Instagram</p>
                    <p>WhatsApp</p>
                    <p>Facebook</p>
                    <p>TikTok</p>
                    <p>Linkedin</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>CONTACTANOS</h5>
                    <p>123456789</p>
                    <p>leonardodelacruz200314@gmail.com</p>
                    <p>Soporte</p>
                    <p>Empleos</p>
                    <p>Feedback</p>
                </div>
            </section>
            <div className='space-y-4 px-10 py-4 text-xs text-gray-800'>
                <p className='border-t-2 border-yellow-300 pt-4 text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut morbi. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Dictum non consectetur a erat nam at lectus urna. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Id nibh tortor id aliquet lectus proin. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Iaculis at erat pellentesque adipiscing commodo. Pharetra et ultrices neque ornare aenean euismod elementum nisi. In iaculis nunc sed augue lacus viverra. Id cursus metus aliquam eleifend. Egestas sed tempus urna et pharetra pharetra massa.
                </p>
            </div>
            {/* <div className='space-y-4 px-10 py-2 text-xs text-gray-800'>
                <p className='border-t-2 border-yellow-300 pt-4 text-justify'>
                    2022 ®. Grupo Manejar. Todos los derechos reservados. Aplican Terminos y codiciones
                </p>
            </div> */}
        </footer>
    )
}

export default Footer