import { useNavigate } from "react-router-dom";
import type { MaybeAuthenticatedUser } from "../../types";
import "./Navbar.css"

interface NavBarProps {
    authenticatedUser: MaybeAuthenticatedUser;
    clearUser: () => void;
}

const NavBar = ({authenticatedUser, clearUser}: NavBarProps) => {
    const navigate = useNavigate();

    if(authenticatedUser) {
    return (
        <nav>
        <button onClick={() => navigate("/")}>Accueil</button>
        <button onClick={() => navigate("/rdv")}>Prendre rendez-vous</button>
        <button onClick={() => navigate("profil")}>Profil</button>
        <button onClick={() => clearUser()}>Se déconnecter</button>
        </nav>
        );
    }

        return (
        <nav>
        <button onClick={() => navigate("/")}>Accueil</button>
        <button onClick={() => navigate("/rdv")}>Prendre rendez-vous</button>
        <button onClick={() => navigate("/login")}>Se Connecter</button>
        <button onClick={() => navigate("/register")}>S'enregistrer</button>
        </nav>
        );

}

export default NavBar;