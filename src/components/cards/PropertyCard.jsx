const PropertyCard = ({ key, title, description, rooms, mts, bathrooms, price, image }) => {
    return (
        <section className='bg-white border-2 border-blue-200 p-4 rounded-lg cursor-pointer hover:scale-105 transition ease-in-out duration-200'>
            <div className='w-60 md:w-80'>
                <img src={ image } alt={ title } className='rounded-lg' />
            </div>
            <div className='space-y-2 pt-2'>
                <h3 className='text-lg font-semibold'>{ title }</h3>
                <p className='text-sm text-start text-gray-600'>{ description }</p>
                <div className='grid grid-cols-3 text-sm text-gray-600'>
                    <p>{ rooms } habs.</p>
                    <p>{ mts } mts.</p>
                    <p>{ bathrooms } ba.</p>
                </div>
                <p className='text-sm text-gray-600'>{ price }</p>
            </div>
        </section>
    )
}

export default PropertyCard