import './Header.scss'
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

const Header = () => {

    // Funcion para cerrar menú una vez seleccionada una página:
    const closeToggleMenu = () => {
        const menuCheck = document.getElementById('menu')
        if (menuCheck) {
            menuCheck.checked = false
        }
    }
    return (
        <header className="main-header">
            <input type="checkbox" id="menu" />

            <Navbar closeToggleMenu={closeToggleMenu} />

            <SearchBar />

        </header>
    )
}

export default Header