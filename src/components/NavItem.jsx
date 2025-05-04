import { NavLink } from "react-router"

const NavItem = ({ item, closeToggleMenu }) => {
    return (
        <li className="nav-bar__nav-item">
            <NavLink to={item.ruta}
            onClick={closeToggleMenu} 
            className="nav-bar__nav-link">
                {item.nombre}
            </NavLink>
        </li>
    )
}

export default NavItem