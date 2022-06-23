const CityCard = ({ key, name, code, image }) => {
    return (
        <section className='flex items-center m-2 mt-5 p-2 space-x-4 rounded-xl cursor-pointer bg-blue-100 hover:bg-yellow-100 hover:scale-105 transition transform duration-200 ease-out'>
            <div className='relative w-20'>
                <img src={ image } alt={ name } className='rounded-xl' />
            </div>
            <div className=''>
                <h4 className='text-lg font-semibold'>{ name }</h4>
                <p className='text-sm font-semibold'>{ code }</p>
            </div>
        </section>
    )
}

export default CityCard