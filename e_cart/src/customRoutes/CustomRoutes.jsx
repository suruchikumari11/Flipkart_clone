import React from 'react'
import { Routes ,Route } from 'react-router-dom'

import Products from '../components/Products'
import Phone from '../components/phone'

const CustomRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/phone'element={<Phone/>}></Route>
            
        </Routes>
    </>
  )
}

export default CustomRoutes
