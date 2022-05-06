import { useState } from 'react'

import { NavBar, Footer, Loader, Services, Transaction, Welcome } from './components'
const App = () => {

  return (
    <div className='overflow-hidden'>
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>

  )
}

export default App
