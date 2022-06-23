/* hooks */
import { useContext } from 'react'

/* components */
import Navbar from '../components/navbar/Navbar'
import MainBanner from '../components/banners/MainBanner'
import Footer from '../components/footer/Footer';
import PropertyCard from '../components/cards/PropertyCard';
import CityCard from '../components/cards/CityCard';
import ServiceCard from '../components/cards/ServiceCard';

/* data */
import { featuresProperties } from '../data/featuresProperties';
import { citiesCol } from '../data/citiesCol';
import { manejarServices } from '../data/manejarServices';

const Home = () => {
    return (
        <div className=''>
            <Navbar />
            <MainBanner />

            <main className='max-w-7xl mx-auto px-8 sm:px-16'>
            <section className='pt-6'>
                <h2 className='text-2xl lg:text-4xl font-bold pb-5'>
                <span className='text-yellow-500'>Propiedades</span> <span className='text-blue-800'>Destacadas</span>
                </h2>
                <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
                { featuresProperties?.map( property => (
                    <PropertyCard 
                    key={ property.id }
                    title={ property.title }
                    description={ property.description }
                    rooms={ property.rooms }
                    mts={ property.mts }
                    bathrooms={ property.bathrooms }
                    price={ property.price }
                    image={ property.image }
                    />
                ))}
                </div>
            </section>
            <section className='pt-6'>
                <h2 className='text-2xl lg:text-4xl font-bold pb-5'>
                <span className='text-blue-800'>Ciudades</span> <span className='text-yellow-500'>Principales</span>
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                { citiesCol?.map( city => (
                    <CityCard 
                    key={ city.id }
                    name={ city.name }
                    code={ city.code }
                    image={ city.image }
                    />
                ))}
                </div>
            </section>
            <section className='pt-6'>
                <h2 className='text-2xl lg:text-4xl font-bold pb-5'>
                <span className='text-yellow-500'>Nuestros</span> <span className='text-blue-800'>Servicios</span>
                </h2>
            </section>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    { manejarServices?.map( service => (
                    <ServiceCard 
                        key={ service.id }
                        title={ service.title }
                        btn={ service.btn }
                        image={ service.image }
                    />
                    ))}
            </div>
        </main>
        <section className='pt-6'>
          <Footer />
        </section>
      </div>
    )
}

export default Home