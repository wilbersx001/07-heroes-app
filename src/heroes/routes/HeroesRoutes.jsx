import {Navbar} from '../../ui'
import { Routes, Route } from "react-router-dom"
import { DcPage, MarvelPage } from '../pages'
import { InicioPage } from '../pages/InicioPage'
import { SearchPage } from '../pages/SearchPage'
import { HeroPage } from '../pages/HeroPage'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />}/>
                <Route path="dc" element={<DcPage/>}/>
                <Route path="search" element={<SearchPage/>}/>
                <Route path="hero/:id" element={<HeroPage/>}/>


                <Route path="/" element={<InicioPage/>}></Route>
            </Routes>

        </div>

        
    
    </>
  )
}
