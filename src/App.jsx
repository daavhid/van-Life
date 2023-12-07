import React, { useState } from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans,{loader as vanLoader} from './pages/Vans'
import VanDetails from './pages/VanDetails'
import './server'
import Layout from './components/Layout'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import HostVans,{loader as hostLoader} from './pages/Host/HostVans'
import HostVanDetails from './pages/Host/HostVanDetails'
import HostVanLayout from './components/HostVanLayout'
import HostPricing from './pages/Host/HostPricing'
import HostPhotos from './pages/Host/HostPhotos'
import HostDetail from './pages/Host/HostDetail'
import NotFound from './pages/NotFound'
import Error from './components/Error'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
        <Route index element={<Home  />}/>
        <Route path='about' element={<About />}/>

        <Route path='vans' >
            <Route index 
            element={<Vans/>} 
            loader={vanLoader}
            errorElement={<Error/>}/>
            <Route path=':id' element={<VanDetails/>}/>
        </Route>

        <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>

            <Route path='vans' element={<HostVans/>} loader={hostLoader}/>
            
            <Route path='vans/:id' element={<HostVanLayout/>} >
                <Route index element={<HostDetail/>}/>
                <Route path='pricing' element={<HostPricing/>}/>
                <Route path='photos' element={<HostPhotos/>}/>
            </Route>


            <Route path='reviews' element={<Reviews/>}/>
        </Route>




        <Route path='*' element={<NotFound/>}/> 

    </Route>
))
const App = () => {
    const [page,setPage] = useState('home');
  return (

    <RouterProvider router={router} />
  )
}

export default App