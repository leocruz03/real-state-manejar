/* react hooks imports */
/* hooks */
import { useContext, useEffect, useState } from 'react';

/* react-router-dom */
import { Routes, Link, Route } from 'react-router-dom'

/* pages */
import Home from './pages/Home';
import Register from './pages/Register';
import PublicAction from './pages/PublicAction';
import RentsAndSell from './pages/RentsAndSell';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';

/* loader */
import { PropagateLoader } from 'react-spinners';

/* pictures */
import logoManejar from './assets/logoManejar.png';

/* components imports */
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {

    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
      <div>
        { loading ? 
          <div className='flex flex-col gap-8 w-full h-screen items-center justify-center'>
            <img src={ logoManejar } width={ 300 } />
            <PropagateLoader color={ '#0053a2' } size={ 20 } /> 
          </div>
          : 
          <div>
            <Navbar />
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/login' element={ <LogIn /> } />
              <Route path='/register' element={ <Register /> } />
              <Route path='/how-publication' element={ <PublicAction /> } />
              <Route path='/rents-and-sell' element={ <RentsAndSell /> } />
              <Route path='/login' element={ <LogIn /> } />
              <Route path='*' element={ <NotFound /> }/>
            </Routes>
            <section className='pt-6'>
              <Footer />
            </section>
          </div>
        }
      </div>
    )
}

export default App