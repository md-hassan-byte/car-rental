import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-small-title">ABOUT US</p>
          <h1>Drive Your Journey<br />With Confidence</h1>
          <p>
            We make car rental simple, affordable, and reliable.
            Choose from our wide range of well-maintained vehicles
            and enjoy a smooth journey wherever you go.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-text">
          <p className="section-title">WHO WE ARE</p>

          <h2>Your Journey,<br />Our Responsibility</h2>

          <p>
            Welcome to our car rental service. We are committed to
            providing comfortable, reliable, and affordable cars for
            every type of journey.
          </p>

          <p>
            Whether you're planning a family trip, a business journey,
            a weekend getaway, or simply need a car for your daily needs,
            we have the right vehicle for you.
          </p>

          <button className="about-btn">
            Explore Our Cars
          </button>
        </div>

        <div className="about-card">
          <div className="card-icon">🚗</div>
          <h3>Reliable Cars</h3>
          <p>
            Our vehicles are regularly maintained and checked to
            provide you with a safe and comfortable experience.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <p className="section-title">WHY CHOOSE US</p>
        <h2>We Make Car Rental Easy</h2>

        <div className="features">

          <div className="feature">
            <div className="feature-icon">🚘</div>
            <h3>Wide Range of Cars</h3>
            <p>
              Choose from economy cars, sedans, SUVs and luxury
              vehicles according to your needs.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Affordable Prices</h3>
            <p>
              Enjoy competitive rental prices with transparent
              pricing and no hidden charges.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>Safe & Reliable</h3>
            <p>
              Every vehicle is maintained regularly to ensure a
              safe and comfortable journey.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">📞</div>
            <h3>24/7 Support</h3>
            <p>
              Our support team is always ready to help whenever
              you need assistance.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">

        <div className="stat">
          <h2>500+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <p>Cars Available</p>
        </div>

        <div className="stat">
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>

    </div>
  );
}

export default About;