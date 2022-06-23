/* react-router-dom */
import { Routes, Route } from 'react-router-dom'

/* pages */
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

const App = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <LogIn /> } />
          <Route path='/register' element={ <Register /> } />
        </Routes>
      </div>
    )
}

export default App