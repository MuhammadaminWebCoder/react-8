import React, {lazy,Suspense} from 'react'
import './App.css'
import getToken from './hooks/getToken'
import Loading from './components/Loading'

const Login = lazy(() => import('./pages/Login/Login'))
const PageRoutes = lazy(() => import('./routers/Dashboard'))

function App() {
    const {token} = getToken()
    
    if (token) {
      return(
        <Suspense fallback={<Loading/>}>
          <PageRoutes/>
        </Suspense>
      )
        
    }
    else{
      return(
        <Suspense fallback={<Loading/>}>
          <Login/>
        </Suspense>
      )
    }
}

export default App
