import menuItems from '../constants/menuItems'
import './Navbar.scss'
import NavItem from './NavItem'

const Navbar = ( {closeToggleMenu} ) => {


  return (
    <nav className="nav-bar">
      <ul className="nav-bar__nav-list">
        {
          menuItems.map((item) => (
            <NavItem item={item} key={item.id} closeToggleMenu={closeToggleMenu}/>
          ))
        }
      </ul>
    </nav>

  )
}

export default Navbar