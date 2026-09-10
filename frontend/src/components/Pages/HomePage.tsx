import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home">
            <h2>Bienvenue chez Topkaya Barber Club Hair Studio !</h2>

            <p>
                Nous sommes très fiers et heureux de vous accueillir dans notre salon.
                Nous sommes là pour vous offrir le meilleur service et refléter votre style de la meilleure façon possible !
            </p>

            <ul>
                <li>Un savoir-faire professionnel</li>
                <li>Un style et un soin impeccables</li>
                <li>Une ambiance confortable et chaleureuse</li>
            </ul>

            <p>Nous vous accueillons avec ou sans rendez-vous !</p>
            <p>En prenant rendez-vous, vous gagnez du temps. Sans rendez-vous, vous pouvez aussi venir tranquillement vous faire servir !</p>

            <h2>Nos horaires d'ouverture</h2>
            <ul>
                <li>Lundi : 13h30 - 20h00</li>
                <li>Mardi : 13h30 - 20h00</li>
                <li>Mercredi : Fermé</li>
                <li>Jeudi : 13h30 - 20h00</li>
                <li>Vendredi : 13h30 - 20h00</li>
                <li>Samedi : 09h00 - 19h00</li>
                <li>Dimanche : 10h00 - 19h00</li>
            </ul>

            <p>Notre adresse : Rue Josaphat 35</p>

            <p>Nous ne sommes pas nouveaux sur ce marché, nous sommes de retour ! Venez découvrir la différence avec nous !</p>

            <p className="home__tagline">Topkaya Barber Club Hair Studio – La nouvelle adresse du style !</p>
        </div>
    );
};

export default HomePage;