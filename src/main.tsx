
import './index.css'
import App from './App.tsx'
import {createBrowserRouter} from "react-router";
import UsersComponent from "./Component/usersComponent/UsersComponent.tsx";

//createRoot(document.getElementById('root')!).render(
//  <StrictMode>
//    <App/>
 // </StrictMode>,
//)
export const routes = createBrowserRouter([
    {
        path:'/',element:<App/>,children:[
            {path:'users',element:<UsersComponent/>}
        ]
    }
])
