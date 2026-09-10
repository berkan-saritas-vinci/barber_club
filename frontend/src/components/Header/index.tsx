import Barber from "../../assets/Barber_Club.png";
import "./index.css"

const Header = () => {
    
    return (
        <header className="header">
            <div className="header_logo">
                <img src={Barber} alt="Barber Studio Club" width={50} height={50} />
            </div>
            <p className="header_title">Barber Club Hair Studio</p>
            <div className="header_spacer" />
        </header>
    )
}

export default Header;