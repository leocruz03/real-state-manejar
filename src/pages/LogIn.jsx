const LogIn = () => {
    return (
        <div className='max-w-7xl mx-auto px-8 sm:px-10'>
            <section className='grid grid-cols-1 px-8 py-4 gap-8 md:grid-cols-2'>
                <div className='flex flex-col gap-4 px-4'>
                    <span>Iniciar sesión</span>
                    <div className='flex flex-col gap-3'>
                        <small>E-mail</small>
                        <input 
                            type='email'
                            placeholder='example@example.com'
                            className='outline-none px-2 py-1 border-2 rounded-lg border-blue-400'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <small>Contraseña</small>
                        <input 
                            type='password'
                            placeholder='Contraseña'
                            className='outline-none px-2 py-1 border-2 rounded-lg border-blue-400'
                        />
                    </div>
                    <div className='w-full grid gap-4'>
                        <button className='w-full px-2 py-1 rounded-xl shadow-md bg-yellow-500'>Iniciar sesión</button>
                    </div>
                    <div>
                        <a href='#' className='decoration-orange-500'>¿No tienes una cuenta? Crea una aquí</a>
                    </div>
                    {/* <div className='flex flex-col'>
                        <input />
                    </div>
                    <div className='flex flex-col'>
                        <input />
                    </div> */}
                </div>
                <div className='relative'>
                    <img src='https://images.unsplash.com/photo-1525095240410-9645dea911e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' className='lg:hidden' />
                    <img src='https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='hidden sm:hidden md:hiden lg:inline' />
                </div>
            </section>
        </div>
    )
}

export default LogIn