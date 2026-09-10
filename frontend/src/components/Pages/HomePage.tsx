import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <h2>Bienvenue chez Topkaya Barber Club Hair Studio !</h2>

      <p>
        Nous sommes très fiers et heureux de vous accueillir dans notre salon.
        Nous sommes là pour vous offrir le meilleur service et refléter votre
        style de la meilleure façon possible !
      </p>

      <ul>
        <li>Un savoir-faire professionnel</li>
        <li>Un style et un soin impeccables</li>
        <li>Une ambiance confortable et chaleureuse</li>
      </ul>

      <p>Nous vous accueillons avec ou sans rendez-vous !</p>
      <p>
        En prenant rendez-vous, vous gagnez du temps. Sans rendez-vous, vous
        pouvez aussi venir tranquillement vous faire servir !
      </p>

      <h2>Nos horaires d'ouverture</h2>
      <ul className="card card-hours">
        <li>Lundi : 13h30 - 20h00</li>
        <li>Mardi : 13h30 - 20h00</li>
        <li>Mercredi : Fermé</li>
        <li>Jeudi : 13h30 - 20h00</li>
        <li>Vendredi : 13h30 - 20h00</li>
        <li>Samedi : 09h00 - 19h00</li>
        <li>Dimanche : 10h00 - 19h00</li>
      </ul>

      <div className="home_map-wrapper">
        <iframe
          className="home_map-embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746.89292906402!2d4.372113000252049!3d50.85687807752087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c36434aa4e15%3A0x34bae85d2d7dd09c!2sTopkaya%20Barber%20Club%20Hair%20Studio!5e1!3m2!1sfr!2sbe!4v1789056455849!5m2!1sfr!2sbe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Localisation Topkaya Barber Club Hair Studio"
        />
      </div>

      <p>Notre adresse : Rue Josaphat 35</p>

      <p>
        Nous ne sommes pas nouveaux sur ce marché, nous sommes de retour ! Venez
        découvrir la différence avec nous !
      </p>

      <p className="home__tagline">
        Topkaya Barber Club Hair Studio – La nouvelle adresse du style !
      </p>
    </div>
  );
};

export default HomePage;
