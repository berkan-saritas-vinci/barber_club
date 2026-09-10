import {  NavLink } from "react-router-dom";
import type { MaybeAuthenticatedUser } from "../../types";
import "./Navbar.css"

interface NavBarProps {
    authenticatedUser: MaybeAuthenticatedUser;
    clearUser: () => void;
}

const NavBar = ({authenticatedUser, clearUser}: NavBarProps) => {
const linkClass = ({ isActive }: { isActive: boolean }) => isActive ? "nav__link nav__link--active" : "nav__link";

    if(authenticatedUser) {
    return (
        <nav className="nav">
            <NavLink to="/" end className={linkClass}>Accueil</NavLink>
            <NavLink to="/rdv" className={linkClass}>Prendre rendez-vous</NavLink>
            <NavLink to="/profil" className={linkClass}>Profil</NavLink>
        <button className="nav_link nav_logout" onClick={() => clearUser()}>Se déconnecter</button>
        </nav>
        );
    }

        return (
        <nav className="nav">
            <NavLink to="/" end className={linkClass}>Accueil</NavLink>
            <NavLink to="/rdv" className={linkClass}>Prendre rendez-vous</NavLink>
            <NavLink to="/login" className={linkClass}>Se Connecter</NavLink>
            <NavLink to="/register" className={linkClass}>S'enregistrer</NavLink>
        </nav>
        );

}

export default NavBar;