const ServiceCard = ({ key, title, btn, image }) => {
    return (
        <section className='flex items-center m-2 mt-5 p-6 space-x-4 rounded-xl bg-gray-100'>
            <div className=''>
                <h4 className='text-lg font-semibold pb-4'>{ title }</h4>
                <button href='#' className='text-sm font-semibold py-2 px-4 rounded-lg bg-blue-400 hover:shadow-md active:scale-105 transition duration-100'>{ btn }</button>
            </div>
        </section>
    )
}

export default ServiceCard