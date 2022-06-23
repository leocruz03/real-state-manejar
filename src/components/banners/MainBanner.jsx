// Pictures
import MainImgBanner from '../../assets/photo-1576941089067-2de3c901e126.jpg'

const MainBanner = () => {
    return (
        <section className='relative w-full h-auto'>
            <img 
                src={ MainImgBanner }
                alt='Banner'
                layout='fill'
                objectFit='cover'
                className='bg-cover bg-center'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-lg font-bold text-white md:text-4xl'>Encuentra lo que sueñas con nosotros</p>
                <button className='text-white bg-blue-400 px-6 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 md:py-4 md:px-10'>Hablemos !!</button>
            </div>
        </section>
    )
}

export default MainBanner