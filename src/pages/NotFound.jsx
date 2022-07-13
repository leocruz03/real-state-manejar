/* pictures imports */
import not_found_img from '../assets/404.gif'

const NotFound = () => {
    return (
        <div className='w-full max-w-7xl mx-auto px-8 sm:px-16'>
            <section className='grid grid-cols-1 items-center justify-center md:grid-cols-2'>
                <img src={ not_found_img } className='my-0 mx-auto' />
                <p>Page not found</p>
            </section>
        </div>
    )
}

export default NotFound