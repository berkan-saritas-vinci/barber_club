import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero_overlay">
          <div className="hero_content">
            <h1 className="hero_title">Topkaya Barber Club Hair Studio</h1>

            <p className="hero_subtitle">
              Des coupes modernes, un service professionnel et une expérience
              unique.
            </p>

            <button className="hero_button">Prendre rendez-vous</button>
          </div>
        </div>
      </section>

      <section className="about">
        <h2 className="section-title">Bienvenue chez Topkaya Barber Club</h2>

        <p className="about__text">
          Nous sommes très fiers et heureux de vous accueillir dans notre salon.
          Nous sommes là pour vous offrir le meilleur service et refléter votre
          style de la meilleure façon possible !
        </p>
      </section>

      <section className="service">
        <div className="service-card">
          <h3>✂️ Expertise</h3>
          <p>Un savoir-faire professionnel pour chaque client.</p>
        </div>
        <div className="service-card">
          <h3>🔥 Qualité</h3>
          <p>Un style et un soin impeccables à chaque visite.</p>
        </div>
        <div className="service-card">
          <h3>🛋️ Confort</h3>
          <p>Une ambiance confortable et chaleureuse.</p>
        </div>
      </section>

      <section className="appointment-info">
        <p>Nous vous accueillons avec ou sans rendez-vous !</p>
        <p>
          En prenant rendez-vous, vous gagnez du temps. Sans rendez-vous, vous
          pouvez aussi venir tranquillement vous faire servir !
        </p>
      </section>

      <section className="hours-section">
        <h2 className="section-title">Nos horaires d'ouverture</h2>
        <div className="hours-card">
          <div className="hours-row">
            <span>Lundi</span>
            <span>13h30 - 20h00</span>
          </div>
          <div className="hours-row">
            <span>Mardi</span>
            <span>13h30 - 20h00</span>
          </div>
          <div className="hours-row">
            <span>Mercredi</span>
            <span>Fermé</span>
          </div>
          <div className="hours-row">
            <span>Jeudi</span>
            <span>13h30 - 20h00</span>
          </div>
          <div className="hours-row">
            <span>Vendredi</span>
            <span>13h30 - 20h00</span>
          </div>
          <div className="hours-row">
            <span>Samedi</span>
            <span>09h00 - 19h00</span>
          </div>
          <div className="hours-row">
            <span>Dimanche</span>
            <span>10h00 - 19h00</span>
          </div>
        </div>
      </section>

      <section className="location-section">
        <h2 className="section-title">Nous trouver</h2>

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

        <p>📍Notre adresse : Rue Josaphat 35</p>
      </section>

      <section className="closing-section">
        <p>
          Nous ne sommes pas nouveaux sur ce marché, nous sommes de retour !
        </p>

        <p className="home_tagline">
          Topkaya Barber Club Hair Studio – La nouvelle adresse du style !
        </p>
      </section>
    </div>
  );
};

export default HomePage;
