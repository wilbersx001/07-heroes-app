import { Routes, Route } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRouter"

export const AppRouter = () => {
  return (
    <>

        <Routes>
            {/* <Route path="marvel" element={<MarvelPage/>}></Route>
            <Route path="dc" element={<DcPage/>}></Route> */}

            {/* <Route path="login" element={<LoginPage/>}></Route>
            
{  */}
            <Route path="/login" element={
              <PublicRoute>
                {/* <LoginPage/> */}
                <Routes>
                  <Route path="/*" element= {<LoginPage/>} />
                </Routes>
                
              </PublicRoute>
            } />

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            } /> 
            
            {/* }  */}

            {/* <Route path="/*" element={<HeroesRoutes/>}></Route> */}
        </Routes>
    </>
  )
}
