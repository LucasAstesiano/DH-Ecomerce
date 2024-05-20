import {Outlet} from 'react-router-dom'
import { NavBar } from '../ui/Navbar/NavBar'

const LayoutMain = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default LayoutMain