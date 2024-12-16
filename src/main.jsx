import './index.css'
import ReactDOM from 'react-dom/client'; 
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Body from './Components/Body/Body.jsx'
import ConsentScreen from './Components/ConsentScreen/ConsentScreen.jsx'
import ValidateToken from './Components/ValidateToken/ValidateToken.jsx'
import Layout from './Utils/Layout.jsx'
import { StrictMode } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}> 
        <Route path="/" element={<Body/>}></Route>
        <Route path="consent" element={<ConsentScreen/>}></Route>
        <Route path="token" element={<ValidateToken/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
    
)