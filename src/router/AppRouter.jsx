import { Routes, Route } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"

export const AppRouter = () => {
  return (
    <>

        <Routes>
            {/* <Route path="marvel" element={<MarvelPage/>}></Route>
            <Route path="dc" element={<DcPage/>}></Route> */}

            <Route path="login" element={<LoginPage/>}></Route>

            <Route path="/*" element={<HeroesRoutes/>}></Route>
        </Routes>
    </>
  )
}
